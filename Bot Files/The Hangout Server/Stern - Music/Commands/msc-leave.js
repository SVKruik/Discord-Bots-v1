// Stop de music bot, en laat hem de call verlaten

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "leave",
  aliases: config.aliases.aliasesleave,
  cooldown: config.cooldown.cooldownleave,
  permissions: config.permissions.permissionmusic,
  description: "Stop the music, and leave the call.",
  async execute(message, args, cmd, client, Discord) {
    try {
      message.channel.send(`The \`play\` and \`leave\` command is currently out of order. We are working on it. Sorry for the inconvenience.`)
      // const voiceChannel = message.member.voice.channel;
      // const channel = config.base.basemusicchannelid;
      // if (message.channel.id == channel) {
      // } else {
      //   return message.channel.send(
      //     `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      //   );
      // }
      // if (!voiceChannel) return message.channel.send(config.basemessages.messagesvcrequired);
      // await voiceChannel.leave();
      // await message.channel.send(config.commandleave.commandleavemsg);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err7}\`.`)
    }
  },
};
