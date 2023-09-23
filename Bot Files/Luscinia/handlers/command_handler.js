// De handler die de commands uit de commands folder haalt, en execute. 

const { DiscordAPIError } = require('discord.js');
const fs = require('fs');
const config = require("../other/config.js");

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
};