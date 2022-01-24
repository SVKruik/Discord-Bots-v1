const config = require('./../Other/config.js');

module.exports = {
  name: "test",
  aliases: config.test.testaliases,
  cooldown: config.test.testcooldown,
  permissions: ["ADMINISTRATOR"],
  description: "Simple test message.",
  execute(message, args, cmd, client, Discord) {
    message.channel.send(config.test.testmessage);
  },
};
