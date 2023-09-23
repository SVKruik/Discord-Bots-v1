const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "urban",
    aliases: config.aliases.aliasesurban,
    cooldown: config.cooldown.cooldownurban,
    permissions: config.permissions.permissionurban,
    description: "Collect the definition of a word using the Urban Dictionary.",
    async execute(message, args, cmd, client, Discord) {
    },
};
