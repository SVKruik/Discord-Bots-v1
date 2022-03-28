// Laat allerlei thema's zien waar je op kan stemmen zodat hij je informatie geeft.
// Moet herschreven worden ivm inefficientie.
// Ik vind dit stem systeem minder 'goed'. Args is beter.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "help",
  aliases: config.aliases.aliaseshelp,
  cooldown: config.cooldown.cooldownhelp,
  permissions: config.permissions.permissionhelp,
  description: "Advanced Help - Stage 1",
  async execute(message, args, cmd, client, Discord) {
    try {
      const topic1 = "Roles";
      const topic2 = "GitHub";
      const topic3 = "Events";
      const topic4 = "Bots";
      const topic5 = "About";
      const topic6 = "Apply";

      const info1 = "Get information about all the roles we have.";
      const info2 = "Get information and links to our GitHub repositories.";
      const info3 = "All information about events, like joining, rewards etc.";
      const info4 = "Get information about me, and my friends.";
      const info5 = "Get information about this server, and general stuff.";
      const info6 = "Get information on how to apply for staff.";
      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlehelp)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionhelp)
        .addFields(
          {
            name: `> **1.** ${topic1}`,
            value: `${info1}`,
          },
          {
            name: `> **2.** ${topic2}`,
            value: `${info2}`,
          },
          {
            name: `> **3.** ${topic3}`,
            value: `${info3}`,
          },
          {
            name: `> **4.** ${topic4}`,
            value: `${info4}`,
          },
          {
            name: `> **5.** ${topic5}`,
            value: `${info5}`,
          },
          {
            name: `> **6.** ${topic6}`,
            value: `${info6}`,
          },
          {
            name: `**-------**`,
            value: `If your topic isn't listed, you can always contact our support team.`,
          }
        )
        .setFooter({ text: config.embed.embedfooter });
      if (!args[0]) {
        message.channel.send({ embeds: [newEmbed] })
      }
      else if (args[0] === "1" || args[0] === "roles") {
        message.channel.send(`**${topic1}**: ${info1}`);
      } else if (args[0] === "2" || args[0] === "github") {
        message.channel.send(`**${topic2}**: ${info2}`);
      } else if (args[0] === "3" || args[0] === "events") {
        message.channel.send(`**${topic3}**: ${info3}`);
      } else if (args[0] === "4" || args[0] === "bots") {
        message.channel.send(`**${topic4}**: ${info4}`);
      } else if (args[0] === "5" || args[0] === "about") {
        message.channel.send(`**${topic5}**: ${info5}`);
      } else if (args[0] === "6" || args[0] === "apply") {
        message.channel.send(`**${topic6}**: ${info6}`);
      }

      const flagmessage = newEmbed
      const flags = ["everyone", "here", "delete"];

      if (!args[1]) {
      }

      if (args[1] === "delete") {
        if (!args[2]) {
          if (!args[3]) {
            message.delete();
            message.channel.send({ embeds: [flagmessage] })
          }
        }
      } else if (args[2] === "delete") {
        if (!args[1]) {
          if (!args[3]) {
            message.delete();
            message.channel.send({ embeds: [flagmessage] })
          }
        }
      } else if (args[3] === "delete") {
        if (!args[1]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ embeds: [flagmessage] })
          }
        }
      }

      if (args[1] === "everyone") {
        if (args[2] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[2] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[3] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }

      if (args[1] === "here") {
        if (args[2] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[2] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[3] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};