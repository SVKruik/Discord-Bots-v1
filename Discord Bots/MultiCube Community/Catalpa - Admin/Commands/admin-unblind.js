module.exports = {
    name: 'unblind',
    aliases: [],
    cooldown: process.env.ASADMIN,
    permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
    description: "This command unblinds members.",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let blindRole = message.guild.roles.cache.find(role => role.name === 'Blinded');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(blindRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been succesfully unblinded. Welcome back!`)

        } else{
            message.channel.send('Cannot find the specified member.');
        }
    }
}