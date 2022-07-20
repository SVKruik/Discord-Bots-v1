const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "warehouse",
    aliases: config.aliases.aliasestradingwarehouse,
    cooldown: config.cooldown.cooldowntradingwarehouse,
    permissions: config.permissions.permissiontradingwarehouse,
    description: "Check all your inventory of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
