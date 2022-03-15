const config = require("./../Other/config.js");

module.exports = {
  name: "unblind",
  aliases: config.aliases.aliasesunblind,
  cooldown: config.cooldown.cooldownunblind,
  permissions: config.permissions.permissionunblind,
  description: "This command unblinds members.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }
    
    const target = message.mentions.users.first();
    if (target) {
      const blindRole = message.guild.roles.cache.find(
        (role) => role.id === config.base.baseblindrole
      );
      const memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(blindRole);
      message.channel.send({ content: 
        `<@${memberTarget.user.id}> has been succesfully unblinded. Welcome back!`
      });
    } else {
      message.channel.send({ content: config.basemessages.messagesfinderror});
    }
  },
};
