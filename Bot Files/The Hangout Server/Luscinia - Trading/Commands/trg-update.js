// test

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const fs = require("fs");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "update",
    aliases: config.aliases.aliaseswarnings,
    cooldown: config.cooldown.cooldownwarnings,
    permissions: config.permissions.permissionwarnings,
    description: "Display your warning count.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Received, check console.`)
        let file = editJsonFile(`./marketprice.json`);

        //file.set("planet", "Earth");
        file.save();
        console.log(file.get());
    },
};
