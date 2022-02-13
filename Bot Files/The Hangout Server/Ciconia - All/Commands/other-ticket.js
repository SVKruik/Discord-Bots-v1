const config = require("./../Other/config.js");

module.exports = {
  name: "ticket",
  aliases: config.aliases.aliasesticket,
  cooldown: config.cooldown.cooldownticket,
  permissions: config.permissions.permissionticket,
  description: "open a support ticket!",
  async execute(message, args, cmd, client, discord) {
    const channel = await message.guild.channels.create(
      `Ticket: ${message.author.tag}`
    );

    channel.setParent(config.base.baseticketgroupid);

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true,
    });

    const reactionMessage = await channel.send(config.commandticket.commandticketpending);

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send(config.basemessages.messageemojierr);
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) =>
        message.guild.members.cache
          .find((member) => member.id === user.id)
          .hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send(
            `Deleting this channel in ${config.base.baseticketdeletetime} milliseconds!`
          );
          setTimeout(() => channel.delete(), config.base.baseticketdeletetime);
          break;
      }
    });

    message.channel
      .send(`${config.commandticket.commandticketpending} Your channel: ${channel}`)
      .catch((err) => {
        throw err;
      });
  },
};
