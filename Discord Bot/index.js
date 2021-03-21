const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The MultiCube Community Bot is now online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command == 'github'){
        client.commands.get('github').execute(message, args);
    } else if(command == 'apply'){
        client.commands.get('apply').execute(message, args);
    } else if(command == 'permcheck'){
        client.commands.get('permcheck').execute(message, args);
    }
});

client.login('ODIyMDE2NzYzOTQ0MjM5MTQ0.YFMIxA.wQrxv28JGVwH-YaE7ihWn_keqEE')