const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "setprice",
    aliases: config.aliases.aliasestradingsetprice,
    cooldown: config.cooldown.cooldowntradingsetprice,
    permissions: config.permissions.permissiontradingsetprice,
    description: "Recalculate the standard price.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
