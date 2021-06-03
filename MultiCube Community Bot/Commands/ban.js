module.exports = {
    name: 'ban',
    persmisions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    description: "This command bans a member.",
    async execute(Discord, message, args, cmd, client) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by the MultiCube Community Bot!`);
        }else{
            message.channel.send('Banning the targeted member failed for unspecified reason.');
        }
    }
}