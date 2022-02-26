const config = require("../Other/config.js");

module.exports = {
  name: "errorcode",
  aliases: config.aliases.aliaseserrorcode,
  cooldown: config.cooldown.cooldownerrorcode,
  permissions: config.permissions.permissionerrorcode,
  description: "See what error code means what.",
  execute(message, args, cmd, client, Discord, profileData) {
    const err1 = config.errorcodes.one
    const err2 = config.errorcodes.two
    const err3 = config.errorcodes.three
    const err4 = config.errorcodes.four
    const err5 = config.errorcodes.five
    const err6 = config.errorcodes.six
    const err7 = config.errorcodes.seven
    const err8 = config.errorcodes.eight
    const err9 = config.errorcodes.nine
    const err10 = config.errorcodes.ten
    const err11 = config.errorcodes.eleven
    const err12 = config.errorcodes.twelve
    const err13 = config.errorcodes.thirteen
    const err14 = config.errorcodes.fourteen
    const err15 = config.errorcodes.fifteen

    const info1 = `A fatal bug in the code. Contact any bot developers if you see this.`
    const info2 = `A problem with the database. This probably affects all level and economy commands.`
    const info3 = `An error with generating the reaction emoji's.`
    const info4 = `A problem with generating a channel. This can happen with the command \`ticket\`.`
    const info5 = `An error with generating an user account in our database. This error can only occur when someone joins the Discord server, since it will auto-generate an account.`
    const info6 = `A problem with adding XP to your account when sending a messsage.`
    const info7 = `A problem whilst connecting to your voice channel. This error can only occur with the music bot, since only with that command the bot will join the voice channel.`
    const info8 = `An error with collecting information about a minecraft server. This error can only occur with the command \`${process.env.PREFIX}mcserver\`.`
    const info9 = `An error with refunding your coins.`
    const info10 = ``
    const info11 = ``
    const info12 = ``
    const info13 = ``
    const info14 = ``
    const info15 = ``

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Error Code Check")
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription("See what error code means what.")
      .addFields(
        {
          name: `Error Codes`,
          value: `**-------**`,
        },
        {
          name: `> ${err1}`,
          value: `${info1}`,
        },
        {
          name: `> ${err2}`,
          value: `${info2}`,
        },
        {
          name: `> ${err3}`,
          value: `${info3}`,
        },
        {
          name: `> ${err4}`,
          value: `${info4}`,
        },
        {
          name: `> ${err5}`,
          value: `${info5}`,
        },
        {
          name: `> ${err6}`,
          value: `${info6}`,
        },
        {
          name: `> ${err7}`,
          value: `${info7}`,
        },
        {
          name: `> ${err8}`,
          value: `${info8}`,
        },
        {
          name: `> ${err9}`,
          value: `${info9}`,
        },
        {
          name: `**-------**`,
          value: `We would really appreciate it, if you contact any of the bot developers if you encounter any of these errors. We can then get to work to fix it ASAP.`,
        }
      )
      .setFooter(config.embed.embedfooter);

    if (!args[0]) {
      message.channel.send(newEmbed);
    } else if (args[0] === err1) {
      message.channel.send(`Error Code \`${err1}\`: ${info1}`)
    } else if (args[0] === err2) {
      message.channel.send(`Error Code \`${err2}\`: ${info2}`)
    } else if (args[0] === err3) {
      message.channel.send(`Error Code \`${err3}\`: ${info3}`)
    } else if (args[0] === err4) {
      message.channel.send(`Error Code \`${err4}\`: ${info4}`)
    } else if (args[0] === err5) {
      message.channel.send(`Error Code \`${err5}\`: ${info5}`)
    } else if (args[0] === err6) {
      message.channel.send(`Error Code \`${err6}\`: ${info6}`)
    } else if (args[0] === err7) {
      message.channel.send(`Error Code \`${err7}\`: ${info7}`)
    } else if (args[0] === err8) {
      message.channel.send(`Error Code \`${err8}\`: ${info8}`)
    } else if (args[0] === err9) {
      message.channel.send(`Error Code \`${err9}\`: ${info9}`)
    } else if (args[0] !== err1 || err2 || err3 || err4 || err5 || err6 || err7 || err8 || err9 || err10 || err11 || err12 || err13 || err14 || err15) {
      message.channel.send(`I haven't heard of the Error Code: \`${args[0]}\`.`)
    }
  },
};