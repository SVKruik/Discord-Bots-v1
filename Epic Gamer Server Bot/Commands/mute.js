const ms = require('ms');
module.exports = {
    name: 'mute',
    persmisions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
    description: "This command mutes members.",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been succesfully muted.`);
            return
        }
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been succesfully muted for ${ms(ms(args[1]))}.`);

        setTimeout(function() {
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send
        }, ms(args[1]));
        } else{
            message.channel.send('Cannot find the specified member.');
        }
    }
}