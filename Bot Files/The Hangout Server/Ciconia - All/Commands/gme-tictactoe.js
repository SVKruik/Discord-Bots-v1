const config = require("../Other/config.js");

module.exports = {
    name: "commandtemplate",
    aliases: config.aliases.aliasestemplatecommand,
    cooldown: config.cooldown.cooldowntemplatecommand,
    permissions: config.permissions.permissiontemplatecommand,
    description: "Command template for devs.",
    async execute(message, args, cmd, client, Discord) {
        try {
        } catch (err) {
            console.log(err);
            message.channel.send(`k`)
        }
    }
}