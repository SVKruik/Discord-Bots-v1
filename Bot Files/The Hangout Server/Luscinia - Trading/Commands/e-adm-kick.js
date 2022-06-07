const config = require("../Other/config.js");

module.exports = {
  name: "kick",
  aliases: config.aliases.aliaseskick,
  cooldown: config.cooldown.cooldownkick,
  permissions: config.permissions.permissionkick,
  description: "Kick a irritating person, that you don't hate enough to ban.",
  execute(message, args, cmd, client, Discord) {
  },
};
