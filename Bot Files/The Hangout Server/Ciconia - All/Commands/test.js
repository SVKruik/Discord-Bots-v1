const config = require("../Other/config.js")
module.exports = {
    name: "test",
    aliases: config.aliases.aliaseserrorcode,
    cooldown: config.cooldown.cooldownerrorcode,
    permissions: config.permissions.permissionerrorcode,
    execute(message, args, cmd, client, Discord, profileData) {
        const tagfull = message.author.tag
        const tag = tagfull.substr(-4);
        message.channel.send(`hello ${tag}`)
    }
}