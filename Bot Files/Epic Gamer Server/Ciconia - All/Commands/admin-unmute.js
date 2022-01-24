const config = require('./../Other/config.js');

module.exports = {
  name: "unmute",
  aliases: config.aliases.aliasesunmute,
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
  description: "This command unmutes members.",
  execute(message, args, cmd, client, Discord) {
    const target = message.mentions.users.first();
    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === process.env.MAINROLE
      );
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === process.env.MUTEROLE
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been succesfully unmuted. You can now talk again!`
      );
    } else {
      message.channel.send(process.env.MSGFINDERR);
    }
  },
};
