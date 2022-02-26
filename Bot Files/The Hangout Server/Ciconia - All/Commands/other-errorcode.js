const config = require("../Other/config.js");

module.exports = {
  name: "errorcode",
  aliases: config.aliases.aliaseserrorcode,
  cooldown: config.cooldown.cooldownerrorcode,
  permissions: config.permissions.permissionerrorcode,
  description: "See what error code means what.",
  execute(message, args, cmd, client, Discord) {
    
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Error Code Check")
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription("See what error code means what.")
      .addFields(
        {
          name: `Error Codes`,
          value: `---`,
        },
        {
          name: `> 3951`,
          value: `A fatal bug in the code. Contact any bot developers if you see this.`,
        },
        {
          name: `> 4182`,
          value: `A problem with the database. This probably affects all level and economy commands.`,
        },
        {
          name: `> 5382`,
          value: `An error with generating the reaction emoji's.`,
        },
        {
          name: `> 1432`,
          value: `A problem with generating a channel. This can happen with the command \`ticket\`.`,
        },
        {
          name: `> 8931`,
          value: `An error with generating an user account in our database. This error can only occur when someone joins the Discord server, since it will auto-generate an account.`,
        },
        {
          name: `> 5671`,
          value: `A problem with adding XP to your account when sending a messsage.`,
        },
        {
          name: `> 3120`,
          value: `A problem whilst connecting to your voice channel. This error can only occur with the music bot, since only with that command the bot will join the voice channel.`,
        },
        {
          name: `> 7329`,
          value: `An error with collecting information about a minecraft server. This error can only occur with the command \`mcserver\`.`,
        },
        {
          name: `> 2371`,
          value: `An error with refunding your coins.`,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};