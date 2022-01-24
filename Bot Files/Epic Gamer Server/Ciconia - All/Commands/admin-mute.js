const ms = require("ms");
const config = require('./../Other/config.js');

module.exports = {
  name: "mute",
  aliases: config.aliases.aliasesmute,
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
  description: "This silences spamming or naughty people. Can only read stuff.",
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

      if (!args[1]) {
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully muted.`
        );
        return;
      }
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been succesfully muted for ${ms(
          ms(args[1])
        )}.`
      );

      setTimeout(function () {
        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send;
      }, ms(args[1]));
    } else {
      message.channel.send(process.env.MSGFINDERR);
    }
  },
};
