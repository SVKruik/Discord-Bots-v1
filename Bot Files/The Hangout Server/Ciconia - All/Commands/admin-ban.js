require("console-stamp")(console, "[HH:MM]");
const config = require("./../Other/config.js");

module.exports = {
  name: "ban",
  aliases: config.aliases.aliasesban,
  cooldown: config.cooldown.cooldownban,
  permissions: config.permissions.permissionban,
  description: "config.descriptionban",
  execute(message, args) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    const reason1 = args.join(' ');
    if (!args[1]) {
      return message.channel.send("Please also specify for what reason you would like to ban this member.")
    }
    const reason = reason1.charAt(0).toUpperCase() + reason1.slice(1);

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      console.log(
        `${memberTarget.user.username} got banned because of: ${reason2}. This was done by ${message.author.username} using ${username}.`
      );
      message.channel.send(
        `<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`
      );
    } else {
      message.channel.send(config.basemessages.messageserror);
    }
  },
};