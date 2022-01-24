const config = require('./../Other/config.js');

module.exports = {
  name: "ticket",
  aliases: config.aliases.aliasesticket,
  cooldown: config.cooldown.cooldownticket,
  permissions: ["SEND_MESSAGES"],
  description: "open a support ticket!",
  async execute(message, args, cmd, client, discord) {
    const channel = await message.guild.channels.create(
      `Ticket: ${message.author.tag}`
    );

    channel.setParent(process.env.TICKETGROUP);

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send(process.env.MSGTKTPENDING);

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send(process.env.MSGEMOJIERR);
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
          channel.send(`Deleting this channel in ${process.env.TKTDELTIME} milliseconds!`);
          setTimeout(() => channel.delete(), process.env.TKTDELTIME);
          break;
      }
    });

    message.channel
      .send(`We will be right with you! Your channel: ${channel}`)
      .catch((err) => {
        throw err;
      });
  },
};
