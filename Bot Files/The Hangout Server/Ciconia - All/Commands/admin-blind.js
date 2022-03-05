const ms = require("ms");
const config = require("./../Other/config.js");

module.exports = {
  name: "blind",
  aliases: config.aliases.aliasesblind,
  cooldown: config.cooldown.cooldownblind,
  permissions: config.permissions.permissionblind,
  description: "Completly blind a member. Target cannot do anything.",
  execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)
    const target = message.mentions.users.first();
    if (target) {
      const blindRole = message.guild.roles.cache.find(
        (role) => role.id === config.base.baseblindrole
      );
      const memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.add(blindRole);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully blinded.`
        );
        return;
      }

      memberTarget.roles.add(blindRole);
      message.channel.send(
        `<@${memberTarget.user.id}> has been succesfully blinded for ${ms(
          ms(args[1])
        )}.`
      );

      setTimeout(function () {
        memberTarget.roles.remove(blindRole);
        message.channel.send(`<@${memberTarget.user.id}> has been automatically unblinded. Welcome back!`);
      }, ms(args[1]));
    } else {
      message.channel.send(config.basemessages.messagesfinderror);
    }
  },
};
