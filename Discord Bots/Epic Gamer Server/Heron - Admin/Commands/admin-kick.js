module.exports = {
    name: 'kick',
    aliases: [],
    cooldown: process.env.ASADMIN,
    description: "Kick a irritating person, that you don't hate enough to ban.",
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}>has been succesfully kicked!`);
        }else{
            message.channel.send(`You coudn't kick that member for unspecified reason. Check the console to see what is wrong.`);
        }
    }
}