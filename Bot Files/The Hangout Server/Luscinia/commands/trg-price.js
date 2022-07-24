// Stuur alle market prijzen.

const config = require("../other/config.js");
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
        try {
            const attachment = new MessageAttachment('marketdynprice.json')
            message.channel.send(`File 1: Current Price`)
            message.channel.send({ files: [attachment] });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
