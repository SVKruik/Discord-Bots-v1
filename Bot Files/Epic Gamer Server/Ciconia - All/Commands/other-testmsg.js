const config = require('./../Other/config.js');

module.exports = {
  name: "test",
  aliases: config.test.testaliases,
  cooldown: config.test.testcooldown,
  description: "Simple test message.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args, cmd, client, Discord) {
    message.channel.send(config.test.testmessage);
  },
};
