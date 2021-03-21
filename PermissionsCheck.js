module.exports = {
    name: 'permcheck',
    description: "This is a permcheck command.",
    execute(message, args){

        if(message.member.cache.send('819999530857922570')){
            message.channel.send('You have the _Normal Member_ Role. With this role you have the following permissions on this Discord Server: View Channels, Send Messages, Embed Links, Attach Files, Add Reactions, Use External Emoji, Mention @everyone etc, Read Message History, Connect, Speak, Video.')
        } else if (message.member.cache.send('820001836261441573')){
            message.channel.send('You have the _Programmer_ Role. With this role you have the following permissions on this Discord Server: View Channels, Create Invite, Manage Roles, Manage Webhooks, Send Messages, Embed Links, Attach Files, Add Reactions, Use External Emoji, Mention @everyone etc, Read Message History, Use Slash Commands, Connect, Speak, Video.')
        }
    }
}