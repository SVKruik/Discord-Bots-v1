const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "print",
    aliases: config.aliases.aliasestradingprint,
    cooldown: config.cooldown.cooldowntradingprint,
    permissions: config.permissions.permissiontradingprint,
    description: "Print the JSON file containing the marketprices and stock.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
