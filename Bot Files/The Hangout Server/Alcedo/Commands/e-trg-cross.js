const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "cross",
    aliases: config.aliases.aliasestradingcross,
    cooldown: config.cooldown.cooldowntradingcross,
    permissions: config.permissions.permissiontradingcross,
    description: "Bulk write slope data.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
