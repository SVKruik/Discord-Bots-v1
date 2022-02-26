const config = require("./../Other/config.js");

module.exports = {
  name: "donate",
  aliases: config.aliases.aliasesdonate,
  cooldown: config.cooldown.cooldowndonate,
  permissions: config.permissions.permissiondonate,
  description: "Support our project by donating to us.",
  execute(message, args, cmd, client, Discord, profileData) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titledonate)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(config.embeds.descriptiondonate)
      .addFields(
        {
          name: config.embeds.namedonate1,
          value: config.embeds.valuedonate1,
        },
        {
          name: config.embeds.namedonate2,
          value: config.embeds.valuedonate2,
        }
      )
      .setFooter(config.embed.embedfooter);

    const flagmessage = newEmbed
    const flags = ["everyone", "here", "delete"];

    if (!args[0]) {
      message.channel.send(flagmessage) // Send base message
    }

    if (args[2] === "everyone" || "here") {
      return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
    } else {

      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      }

      if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      }
    }
  },
};
