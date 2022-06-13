// Stuur de actuele stock.

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
        try {
            const attachment = new MessageAttachment('marketdynstock.json')
            message.channel.send(`File 1: Current Stock`)
            message.channel.send({ files: [attachment] });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
