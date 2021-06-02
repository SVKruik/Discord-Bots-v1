module.exports = {
    name: 'kick',
    description: "This command kicks a member.",
    async execute(message, args, cmd, client, Discord) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been succesfully kicked.`);
        }else{
            message.channel.send('Kicking the targeted member failed for unspecified reason.');
        }
    }
}