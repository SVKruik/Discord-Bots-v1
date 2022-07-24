const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const queue = new Map();

module.exports = {
    name: "play",
    aliases: config.aliases.aliasesplay,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Music Bot via YouTube links.",
    async execute(message, args, cmd, client, Discord) {
    },
};
