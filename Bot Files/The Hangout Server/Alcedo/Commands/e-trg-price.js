const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "tradingprice",
    aliases: config.aliases.aliasestradingprice,
    cooldown: config.cooldown.cooldowntradingprice,
    permissions: config.permissions.permissiontradingprice,
    description: "Show all the prices.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
