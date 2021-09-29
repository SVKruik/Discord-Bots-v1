module.exports = {
    name: 'leave',
    permissions: ["SEND_MESSAGES"],
    description: 'Stop the bot and leave the channel',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Leaving the channel :wave:')
    }
}