const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const haversine = require("haversine-distance");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "haversine",
    aliases: config.aliases.aliaseshaversine,
    cooldown: config.cooldown.cooldownhaversine,
    permissions: config.permissions.permissionhaversine,
    description: "Calculate the distance between two GPS coordinates.",
    execute(message, args, cmd, client, Discord) {

    },
};
