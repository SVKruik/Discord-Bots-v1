// Print de hele marketprice JSON in de log.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "print",
    aliases: config.aliases.aliasesprint,
    cooldown: config.cooldown.cooldownprint,
    permissions: config.permissions.permissionprint,
    description: "Print the JSON file containing the marketprices in the console.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            let file = editJsonFile(`./marketprice.json`);
            console.log(file.get());
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
