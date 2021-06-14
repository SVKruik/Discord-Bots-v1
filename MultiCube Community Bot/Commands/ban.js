module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by the MultiCube Community Bot!`);
        }else{
            message.channel.send(`Banning the targeted member failed for unspecified reason.`);
        }
    }
}
//`<@${memberTarget.user.id}> got 360 no-scoped by the MultiCube Community Bot! Reason \`${d.d}\`.`