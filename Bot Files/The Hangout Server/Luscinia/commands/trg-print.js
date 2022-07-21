// Print de hele marketprice JSON in de chat.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "print",
    aliases: config.aliases.aliasestradingprint,
    cooldown: config.cooldown.cooldowntradingprint,
    permissions: config.permissions.permissiontradingprint,
    description: "Print the JSON file containing the marketprices and stock.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const attachment1 = new MessageAttachment('marketdynprice.json')
            const attachment2 = new MessageAttachment('marketdynstock.json')
            const attachment3 = new MessageAttachment('marketpricemax.json')
            const attachment4 = new MessageAttachment('marketpricemin.json')
            message.channel.send(`File 1: Current Price --- File 2: Current Stock --- File 3: Max Price --- File 4: Min Price`)
            message.channel.send({ files: [attachment1, attachment2, attachment3, attachment4] });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
