const config = require('./../Other/config.js');

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasescommandtemplate,
  cooldown: config.cooldown.cooldowncommandtemplate,
  description: "Command template for devs.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args, cmd, client, Discord) {
    message.channel.send(process.env.MSGCMDTEMP);
  },
};
