const ms = require("ms");
const config = require("./../Other/config.js");

module.exports = {
  name: "mute",
  aliases: config.aliases.aliasesmute,
  cooldown: config.cooldown.cooldownmute,
  permissions: config.permissions.permissionmute,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
      const target = message.mentions.users.first();
      if (target) {
        const muteRole = message.guild.roles.cache.find(
          (role) => role.id === config.base.basemuterole
        );
        const memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
          memberTarget.roles.add(muteRole);
          message.channel.send(
            `<@${memberTarget.user.id}> has been succesfully muted.`
          );
          return;
        }
        memberTarget.roles.add(muteRole);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully muted for ${ms(
            ms(args[1])
          )}.`
        );

        setTimeout(function () {
          memberTarget.roles.remove(muteRole);
          message.channel.send(`<@${memberTarget.user.id}> has been automatically unmuted. You can speak again!`);
        }, ms(args[1]));
      } else {
        message.channel.send(config.basemessages.messagesfinderror);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err14}\`.`)
    }
  },
};
