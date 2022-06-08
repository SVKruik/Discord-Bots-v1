// Laat alle materialen zien die je hebt.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "warehouse",
    aliases: config.aliases.aliaseswarehouse,
    cooldown: config.cooldown.cooldownwarehouse,
    permissions: config.permissions.permissionwarehouse,
    description: "Check all your inventory of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
