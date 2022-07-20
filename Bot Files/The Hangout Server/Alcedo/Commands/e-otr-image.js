var Scraper = require("images-scraper");
const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const google = new Scraper({
    puppeteer: {
        headless: true,
    },
});

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "image",
    aliases: config.aliases.aliasesimage,
    cooldown: config.cooldown.cooldownimage,
    permissions: config.permissions.permissionimage,
    description: "This sends the best google result for an image.",
    async execute(message, args, cmd, client, Discord) {
    },
};
