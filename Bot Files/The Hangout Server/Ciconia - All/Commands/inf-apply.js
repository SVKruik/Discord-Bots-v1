// Stuurt een link naar een google form. Soliciteer bij MultiCube.
// Dit was in de tijd dat MultiCube nog een ding was, en we het groot probeerden te maken.
// Simpele vragenlijst op Google Forms.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "apply",
  aliases: config.aliases.aliasesapply,
  cooldown: config.cooldown.cooldownapply,
  permissions: config.permissions.permissionapply,
  description:
    "Sends you the link where you can apply to one of our roles/ranks.",
  async execute(message, args, cmd, client, Discord) {
    try {
      message.channel.send(config.commandapply.commandapply);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${ config.errorcodes.err16}\`.`)
    }
  },
};
