const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "tradingstock",
    aliases: config.aliases.aliasestradingstock,
    cooldown: config.cooldown.cooldowntradingstock,
    permissions: config.permissions.permissiontradingstock,
    description: "Show the current stock.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
