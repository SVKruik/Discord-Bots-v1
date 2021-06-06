module.exports = {
    name: 'help',
    description: "Advanced Help - Stage 1",
   permissions: ["SEND_MESSAGES"],
    async execute(message, args, cmd, client, Discord) {
        
        const channel = '848939517603479553'
        const ApplyEmoji = '🔴';
        const RanksRolesEmoji = '🟠';
        const GitHubEmoji = '🟡';
        const AboutEmoji = '🟢';
        const BotEmoji = '🔵';
        const ServersEmoji = '🟣';
        const RulesEmoji = '🟤';
        const StatsEmoji = '⚫';
        const EventsEmoji = '⚪';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ffb1b1')
            .setTitle('Choose Topic')
            .setImage('https://i.imgur.com/neCyTDH.png')
            .setFooter('Stats and bot profided by Complex. Usage: -help.')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('Choose a topic where you want to have help with. If this Bot still does not answer your questions, you can support our support team.\n\n'
                + `${ApplyEmoji} for support about becoming a staff member.\n`
                + `${RanksRolesEmoji} for support about our roles and ranks on our Discord and Minecraft servers.\n`
                + `${GitHubEmoji} for support of how to read things that are GitHub exlusive (updates etc.), or support of how to become a GitHub Collaborator.\n`
                + `${AboutEmoji} for general information about stuff.\n`
                + `${BotEmoji} for information about this bot you are talking to right now!\n`
                + `${ServersEmoji} for information about our servers we have, and how to join them.\n`
                + `${RulesEmoji} for a list of rules.\n`
                + `${StatsEmoji} for stats about servers we run (Minecraft or Discord).\n`
                + `${EventsEmoji} for information about Events, and about how to join them.`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ApplyEmoji);
        messageEmbed.react(RanksRolesEmoji);
        messageEmbed.react(GitHubEmoji);
        messageEmbed.react(AboutEmoji);
        messageEmbed.react(BotEmoji);
        messageEmbed.react(ServersEmoji);
        messageEmbed.react(RulesEmoji);
        messageEmbed.react(StatsEmoji);
        messageEmbed.react(EventsEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === ApplyEmoji) {
                    await message.channel.send('Test1');
                }
                if (reaction.emoji.name === RanksRolesEmoji) {
                    await message.channel.send('Test2');
                }
                if (reaction.emoji.name === GitHubEmoji) {
                    await message.channel.send('Test3');
                }
                if (reaction.emoji.name === AboutEmoji) {
                    await message.channel.send('Test4');
                }
                if (reaction.emoji.name === BotEmoji) {
                    await message.channel.send('Test5');
                }
                if (reaction.emoji.name === ServersEmoji) {
                    await message.channel.send('Test6');
                }
                if (reaction.emoji.name === RulesEmoji) {
                    await message.channel.send('Test7');
                }
                if (reaction.emoji.name === StatsEmoji) {
                    await message.channel.send('Test8');
                }
                if (reaction.emoji.name === EventsEmoji) {
                    await message.channel.send('Test9');
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === ApplyEmoji) {
                    await message.channel.send('Test1');
                }
                if (reaction.emoji.name === RanksRolesEmoji) {
                    await message.channel.send('Test2');
                }
                if (reaction.emoji.name === GitHubEmoji) {
                    await message.channel.send('Test3');
                }
                if (reaction.emoji.name === AboutEmoji) {
                    await message.channel.send('Test4');
                }
                if (reaction.emoji.name === BotEmoji) {
                    await message.channel.send('Test5');
                }
                if (reaction.emoji.name === ServersEmoji) {
                    await message.channel.send('Test6');
                }
                if (reaction.emoji.name === RulesEmoji) {
                    await message.channel.send('Test7');
                }
                if (reaction.emoji.name === StatsEmoji) {
                    await message.channel.send('Test8');
                }
                if (reaction.emoji.name === EventsEmoji) {
                    await message.channel.send('Test9');
                }
            } else {
                return;
            }
        });
    }
 
}   