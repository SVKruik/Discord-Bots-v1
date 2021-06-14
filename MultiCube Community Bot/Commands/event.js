module.exports = {
    name: 'event',
    permissions: ["ADMINISTRATOR"],
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '828557449975693342';
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "TeamGreen");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "TeamRed");
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "TeamYellow");
        const whiteTeamRole = message.guild.roles.cache.find(role => role.name === "TeamWhite");
 
        const greenTeamEmoji = '🟢';
        const redTeamEmoji = '🔴';
        const yellowTeamEmoji = '🟡';
        const whiteTeamEmoji = '⚪';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ffb1b1')
            .setFooter('Stats and bot profided by Complex. Usage: -newevent.')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates while in a event! When a event starts with for example Bed Wars, you can choose your team here. Be aware though that teams will be balanced, and your pick is not always available.\n\n'
                + `${greenTeamEmoji} for the Green team\n`
                + `${redTeamEmoji} for the Red team\n`
                + `${yellowTeamEmoji} for the Yellow team\n`
                + `${whiteTeamEmoji} for the White team`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(greenTeamEmoji);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(whiteTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                } if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                } if (reaction.emoji.name === yellowTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                } if (reaction.emoji.name === whiteTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(whiteTeamRole);
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
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                } if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                } if  (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                } if  (reaction.emoji.name === whiteTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   