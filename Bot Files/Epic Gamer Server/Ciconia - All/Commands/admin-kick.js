const config = require('./../Other/config.js');

module.exports = {
  name: "kick",
  aliases: config.aliases.aliaseskick,
  cooldown: process.env.ASADMIN,
  description: "Kick a irritating person, that you don't hate enough to ban.",
  permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
  execute(message, args) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    const reason1 = args[1];
    const reason2 = reason1.charAt(0).toUpperCase() + reason1.slice(1);

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.kick();
      console.log(
        `${memberTarget.user.username} got kicked because of: ${reason2}. This was done by ${message.author.username} using ${username}.`
      );
      message.channel.send(
        `<@${memberTarget.user.id}> got kicked. Reason: ${reason2}.`
      );
    } else {
      message.channel.send(process.env.MSGERR);
    }
  },
};
