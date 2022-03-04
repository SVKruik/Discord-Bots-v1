const config = require("./../Other/config.js");

module.exports = {
  name: "kick",
  aliases: config.aliases.aliaseskick,
  cooldown: config.cooldown.cooldownkick,
  permissions: config.permissions.permissionkick,
  description: "Kick a irritating person, that you don't hate enough to ban.",
  execute(message, args, cmd, client, Discord) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    const reason1 = args[1];
    if (!args[1]) {
      return message.channel.send("Please also specify for what reason you would like to kick this member.")
    }
    const reason = reason1.charAt(0).toUpperCase() + reason1.slice(1);

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.kick();
      console.log(
        `${memberTarget.user.username} got kicked because of: ${reason}. This was done by ${message.author.username} using ${username}.`
      );
      message.channel.send(
        `<@${memberTarget.user.id}> got kicked by ${username}. Reason: ${reason}.`
      );
    } else {
      message.channel.send(config.basemessages.messageserror);
    }
  },
};
