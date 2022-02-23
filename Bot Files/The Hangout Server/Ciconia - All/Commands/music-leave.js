const config = require("./../Other/config.js");

module.exports = {
  name: "leave",
  aliases: config.aliases.aliasesleave,
  cooldown: config.cooldown.cooldownleave,
  permissions: config.permissions.permissionleave,
  description: "Stop the music, and leave the call.",
  async execute(message, args, cmd, client, Discord) {
    const voiceChannel = message.member.voice.channel;
    const channel = config.base.basemusicchannelid;
    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }
    if (!voiceChannel) return message.channel.send(config.basemessages.messagesvcrequired);
    await voiceChannel.leave();
    await message.channel.send(config.commandleave.commandleavemsg);
  },
};
