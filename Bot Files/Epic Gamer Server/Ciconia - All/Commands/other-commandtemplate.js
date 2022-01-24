const config = require('./../Other/config.js');

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasescommandtemplate,
  cooldown: config.cooldown.cooldowncommandtemplate,
  permissions: ["ADMINISTRATOR"],
  description: "Command template for devs.",
  execute(message, args, cmd, client, Discord) {
    message.channel.send(process.env.MSGCMDTEMP);
  },
};
