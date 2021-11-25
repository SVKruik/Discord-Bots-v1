module.exports = {
  name: "musicleave",
  aliases: ["leave", "msclv"],
  cooldown: process.env.ASMSC,
  permissions: ["SEND_MESSAGES"],
  description: "Stop the music, and leave the call.",
  async execute(message, args, cmd, client, Discord) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send(process.env.MSGVCREQ);
    await voiceChannel.leave();
    await message.channel.send(process.env.MSGLEAVE);
  },
};
