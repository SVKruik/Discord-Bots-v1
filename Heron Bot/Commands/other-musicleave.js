module.exports = {
    name: 'musicleave',
    aliases: ['leave', 'msclv'],
    cooldown: process.env.ASMSC,
    permissions: ["SEND_MESSAGES"],
    description: 'Stop the music, and leave the call.',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Leaving the channel :wave:')
    }
}