// Lijst met alle errorcodes die je kan krijgen. Gewoon informatief.
// Specifieke error code, of allemaal.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "errorcode",
  aliases: config.aliases.aliaseserrorcode,
  cooldown: config.cooldown.cooldownerrorcode,
  permissions: config.permissions.permissionerrorcode,
  description: "See what error code means what.",
  execute(message, args, cmd, client, Discord) {
    try {
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
      const err16 = config.errorcodes.err16

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
      const info16 = config.errorcodes.info16

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titleerrorcode)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionerrorcode)
        .addFields(
          {
            name: `Error Codes`,
            value: `**-------**`,
          },
          {
            name: `> ${err1}`,
            value: `**1.** ${info1}`,
          },
          {
            name: `> ${err2}`,
            value: `**2.** ${info2}`,
          },
          {
            name: `> ${err3}`,
            value: `**3.** ${info3}`,
          },
          {
            name: `> ${err4}`,
            value: `**4.** ${info4}`,
          },
          {
            name: `> ${err5}`,
            value: `**5.** ${info5}`,
          },
          {
            name: `> ${err6}`,
            value: `**6.** ${info6}`,
          },
          {
            name: `> ${err7}`,
            value: `**7.** ${info7}`,
          },
          {
            name: `> ${err8}`,
            value: `**8.** ${info8}`,
          },
          {
            name: `> ${err9}`,
            value: `**9.** ${info9}`,
          },
          {
            name: `> ${err10}`,
            value: `**10.** ${info10}`,
          },
          {
            name: `> ${err11}`,
            value: `**11** ${info11}`,
          },
          {
            name: `> ${err12}`,
            value: `**12.** ${info12}`,
          },
          {
            name: `> ${err13}`,
            value: `**13.** ${info13}`,
          },
          {
            name: `> ${err14}`,
            value: `**14.** ${info14}`,
          },
          {
            name: `> ${err15}`,
            value: `**15.** ${info15}`,
          },
          {
            name: `> ${err16}`,
            value: `**16.** ${info16}`,
          },
          {
            name: `**-------**`,
            value: `We would really appreciate it, if you contact any of the bot developers if you encounter any of these errors. We can then get to work to fix it ASAP.`,
          }
        )
        .setFooter({ text: config.embed.embedfooter });

      if (!args[0]) {
        message.channel.send({ embeds: [flagmessage] });
      } else if (args[0] === err1) {
        let flagmessage = `Error Code \`${err1}\`: ${info1}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err2) {
        let flagmessage = `Error Code \`${err2}\`: ${info2}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err3) {
        let flagmessage = `Error Code \`${err3}\`: ${info3}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err4) {
        let flagmessage = `Error Code \`${err4}\`: ${info4}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err5) {
        let flagmessage = `Error Code \`${err5}\`: ${info5}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err6) {
        let flagmessage = `Error Code \`${err6}\`: ${info6}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err7) {
        let flagmessage = `Error Code \`${err7}\`: ${info7}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err8) {
        let flagmessage = `Error Code \`${err8}\`: ${info8}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err9) {
        let flagmessage = `Error Code \`${err9}\`: ${info9}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err10) {
        let flagmessage = `Error Code \`${err10}\`: ${info10}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err11) {
        let flagmessage = `Error Code \`${err11}\`: ${info11}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err12) {
        let flagmessage = `Error Code \`${err12}\`: ${info12}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err13) {
        let flagmessage = `Error Code \`${err13}\`: ${info13}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err14) {
        let flagmessage = `Error Code \`${err14}\`: ${info14}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err15) {
        let flagmessage = `Error Code \`${err15}\`: ${info15}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] === err16) {
        let flagmessage = `Error Code \`${err16}\`: ${info16}`
        message.channel.send({ content: flagmessage })
      } else if (args[0] !== err1 || args[0] !== err2 || args[0] !== err3 || args[0] !== err4 || args[0] !== err5 || args[0] !== err6 || args[0] !== err7 || args[0] !== err8 || args[0] !== err9 || args[0] !== err10 || args[0] !== err11 || args[0] !== err12 || args[0] !== err13 || args[0] !== err14 || args[0] !== err15 || args[0] !== err16) {
        message.channel.send(`I haven't heard of the Error Code: \`${args[0]}\`. Check the list to see the valid Error Codes.`)
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
    }
  },
};