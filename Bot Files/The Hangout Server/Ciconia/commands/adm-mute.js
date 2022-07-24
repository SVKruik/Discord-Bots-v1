// Mute iemand. Dit persoon kan niet praten of berichten sturen.

const ms = require("ms");
const config = require("../other/config.js");

module.exports = {
  name: "mute",
  aliases: config.aliases.aliasesmute,
  cooldown: config.cooldown.cooldownmute,
  permissions: config.permissions.permissionmute,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    try {
      const target = message.mentions.users.first();
      if (target) {
        const muteRole = message.guild.roles.cache.find(
          (role) => role.id === config.base.basemuterole // Rol die je krijgt
        );
        const memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
          memberTarget.roles.add(muteRole);
          message.channel.send(
            `<@${memberTarget.user.id}> has been succesfully muted.` // Als je geen tijd geeft
          );
          return;
        }
        memberTarget.roles.add(muteRole);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully muted for ${ms( // wel tijd
            ms(args[1])
          )}.`
        );

        setTimeout(function () {
          memberTarget.roles.remove(muteRole);
          message.channel.send(`<@${memberTarget.user.id}> has been automatically unmuted. You can speak again!`); // automatische unmute
        }, ms(args[1]));
      } else {
        message.channel.send(config.basemessages.messagesfinderror);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err14}\`.`) // Error Systeem
    }
  },
};
