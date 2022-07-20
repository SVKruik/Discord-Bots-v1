const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "tradingdemolish",
    aliases: config.aliases.aliasestradingdemolish,
    cooldown: config.cooldown.cooldowntradingdemolish,
    permissions: config.permissions.permissiontradingdemolish,
    description: "Remove a placed building from it's current position.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
