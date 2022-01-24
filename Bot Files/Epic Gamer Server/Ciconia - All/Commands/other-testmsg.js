const config = require('./../Other/config.js');

module.exports = {
  name: "test",
  aliases: config.test.testaliases,
  cooldown: process.env.ASADMIN,
  description: "Simple test message.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args, cmd, client, Discord) {
    message.channel.send(config.test.testmessage);
  },
};
