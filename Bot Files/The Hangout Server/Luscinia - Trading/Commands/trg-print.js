// Print de hele marketprice JSON in de chat.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "print",
    aliases: config.aliases.aliasesprint,
    cooldown: config.cooldown.cooldownprint,
    permissions: config.permissions.permissionprint,
    description: "Print the JSON file containing the marketprices and list in the chat.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const attachment1 = new MessageAttachment('marketprice.json')
            const attachment2 = new MessageAttachment('Other/materiallist.txt')
            message.channel.send({ files: [attachment1, attachment2] });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
