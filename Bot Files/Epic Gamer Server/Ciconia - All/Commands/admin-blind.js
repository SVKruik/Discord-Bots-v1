const ms = require("ms");
const config = require("./../Other/config.js");

module.exports = {
  name: "blind",
  aliases: config.aliases.aliasesblind,
  cooldown: config.cooldown.cooldownblind,
  permissions: config.permissions.permissionblind,
  description: "Completly blind a member. Target cannot do anything.",
  execute(message, args, cmd, client, Discord) {
    const target = message.mentions.users.first();
    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === process.env.MAINROLE
      );
      let blindRole = message.guild.roles.cache.find(
        (role) => role.name === process.env.BLINDROLE
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(blindRole.id);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully blinded.`
        );
        return;
      }
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(blindRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been succesfully blinded for ${ms(
          ms(args[1])
        )}.`
      );

      setTimeout(function () {
        memberTarget.roles.remove(blindRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send;
      }, ms(args[1]));
    } else {
      message.channel.send(process.env.MSGFINDERR);
    }
  },
};
