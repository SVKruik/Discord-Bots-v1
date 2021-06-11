const ms = require('ms');
module.exports = {
    name: 'blind',
    permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "DEAFEN_MEMBERS"],
    description: "This command blinds members.",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let blindRole = message.guild.roles.cache.find(role => role.name === 'Blinded');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(blindRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been succesfully blinded.`);
            return
        }
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(blindRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been succesfully blinded for ${ms(ms(args[1]))}.`);

        setTimeout(function() {
            memberTarget.roles.remove(blindRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send
        }, ms(args[1]));
        } else{
            message.channel.send('Cannot find the specified member.');
        }
    }
}