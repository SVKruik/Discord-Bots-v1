const config = require("../Other/config.js");

module.exports = {
  name: "errorcode",
  aliases: config.aliases.aliaseserrorcode,
  cooldown: config.cooldown.cooldownerrorcode,
  permissions: config.permissions.permissionerrorcode,
  description: "See what error code means what.",
  execute(message, args, cmd, client, Discord, profileData) {
    const err1 = config.errorcodes.err1
    const err2 = config.errorcodes.err2
    const err3 = config.errorcodes.err3
    const err4 = config.errorcodes.err4
    const err5 = config.errorcodes.err5
    const err6 = config.errorcodes.err6
    const err7 = config.errorcodes.err7
    const err8 = config.errorcodes.err8
    const err9 = config.errorcodes.err9
    const err10 = config.errorcodes.err10
    const err11 = config.errorcodes.err11
    const err12 = config.errorcodes.err12
    const err13 = config.errorcodes.err13
    const err14 = config.errorcodes.err14
    const err15 = config.errorcodes.err15

    const info1 = config.errorcodes.info1
    const info2 = config.errorcodes.info2
    const info3 = config.errorcodes.info3
    const info4 = config.errorcodes.info4
    const info5 = config.errorcodes.info5
    const info6 = config.errorcodes.info6
    const info7 = config.errorcodes.info7
    const info8 = config.errorcodes.info8
    const info9 = config.errorcodes.info9
    const info10 = config.errorcodes.info10
    const info11 = config.errorcodes.info11
    const info12 = config.errorcodes.info12
    const info13 = config.errorcodes.info13
    const info14 = config.errorcodes.info14
    const info15 = config.errorcodes.info15

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Error Code Check")
      .setImage(config.embed.embedimage)
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