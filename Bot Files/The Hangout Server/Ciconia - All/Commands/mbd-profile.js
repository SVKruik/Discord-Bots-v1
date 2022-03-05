const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "profile",
  aliases: config.aliases.aliasesprofile,
  cooldown: config.cooldown.cooldownprofile,
  permissions: config.permissions.permissionprofile,
  description: "Displays all information we have about you.",
  execute(message, args, cmd, client, Discord, profileData) {
      const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: || ${command.name} ||`)
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titleprofile)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptionprofile)
      .addFields(
        { name: config.embeds.nameprofile1, value: "> **Data:**" },
        { name: config.embeds.nameprofile2, value: `\`${profileData.userID}\`` },
        { name: config.embeds.nameprofile3, value: `\`${profileData.name}\`` },
        { name: config.embeds.nameprofile4, value: `\`${profileData.tag}\`` },
        { name: config.embeds.nameprofile5, value: `\`${profileData.uni}\`` },
        { name: config.embeds.nameprofile6, value: `\`${profileData.bot}\`` },
        { name: config.embeds.nameprofile7, value: "> **Technical:**" },
        { name: config.embeds.nameprofile8, value: `\`${profileData._id}\`` },
        { name: config.embeds.nameprofile9, value: `\`${profileData.__v}\`` },
      )
      .setFooter(config.embed.embedfooter);

      const flagmessage = newEmbed
      const flags = ["everyone", "here", "delete"];
      
      if (!args[0]) {
        message.channel.send(flagmessage)
      }
      
      if (args[0] === "delete") {
        if (!args[1]) {
          if (!args[2]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[1] === "delete") {
        if (!args[0]) {
          if (!args[2]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[2] === "delete") {
        if (!args[0]) {
          if (!args[1]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      }
      
      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        }
      } else if (args[2] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
      
      if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        }
      } else if (args[2] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
  },
};
