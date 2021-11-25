const ms = require("ms");
module.exports = {
  name: "blind",
  aliases: [],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
  description: "Completly blind a member. Target cannot do anything.",
  execute(message, args, cmd, client, Discord) {
    const target = message.mentions.users.first();
    if (target) {
      let blindRole = message.guild.roles.cache.find(
        (role) => role.name === process.env.BLINDROLE
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.add(blindRole.id);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully blinded.`
        );
        return;
      }
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
