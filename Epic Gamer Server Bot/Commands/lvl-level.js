const Levels = require("discord-xp")

module.exports = {
    name: 'level',
    aliases: ['lvl'],
    cooldown: process.env.ASSOFT,
    permissions: ["SEND_MESSAGES"],
    description: "Displays your current exp/server level.",
    async execute(message, args, cmd, client, Discord, profileData) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const target = Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send(`${message.author.username}, the targeted member does have an account yet.`);

        try {
            message.channel.send(`${message.author.username}, ${mentionedMember.user.tag} is level ${target.level} and has ${target.xp}/${Levels.xpFor(target.level + 1)}`);
        } catch (err) {
            console.log(err);
        }  
    },
}