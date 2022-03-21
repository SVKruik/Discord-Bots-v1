// Unmute iemand. Persoon kan weer praten.

const config = require("../Other/config.js");

module.exports = {
  name: "unmute",
  aliases: config.aliases.aliasesunmute,
  cooldown: config.cooldown.cooldownunmute,
  permissions: config.permissions.permissionunmute,
  description: "This command unmutes members.",
  execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.


      const target = message.mentions.users.first();
      if (target) {
        const muteRole = message.guild.roles.cache.find( // Rol die weggehaald wordt
          (role) => role.id === config.base.basemuterole
        );
        const memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole);
        message.channel.send(
          `<@${memberTarget.user.id}> has been succesfully unmuted. You can now speak again!`
        );
      } else {
        message.channel.send(config.basemessages.messagesfinderror);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err14}\`.`) // Error Systeem
    }
  },
};