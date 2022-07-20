const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "update",
    aliases: config.aliases.aliasestradingupdate,
    cooldown: config.cooldown.cooldowntradingupdate,
    permissions: config.permissions.permissiontradingupdate,
    description: "Bulk update data.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
