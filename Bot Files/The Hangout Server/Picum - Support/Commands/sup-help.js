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
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
      const channel = "848939517603479553";
      const ApplyEmoji = "🔴";
      const RanksRolesEmoji = "🟠";
      const GitHubEmoji = "🟡";
      const AboutEmoji = "🟢";
      const BotEmoji = "🔵";
      const ServersEmoji = "🟣";
      const RulesEmoji = "🟤";
      const StatsEmoji = "⚫";
      const EventsEmoji = "⚪";

      const newEmbed = new Discord.MessageEmbed()
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlehelp)
        .setImage(config.embed.embedimage)
        .setFooter(config.embed.embedfooter)
        .setDescription(
          `${config.embeds.descriptionhelp}\n\n` +
          `${ApplyEmoji} - For information about becoming a staff member.\n` +
          `${RanksRolesEmoji} - For information about our roles and ranks on our Discord and Minecraft servers.\n` +
          `${GitHubEmoji} - For support with how to read things that are GitHub exlusive (updates etc.), or how to become a GitHub Collaborator.\n` +
          `${AboutEmoji} - For general information about stuff.\n` +
          `${BotEmoji} - For information about this bot you are talking to right now!\n` +
          `${ServersEmoji} - For information about our servers we have, and how to join them.\n` +
          `${RulesEmoji} - For a list of rules.\n` +
          `${StatsEmoji} - For stats about servers we run (Minecraft or Discord).\n` +
          `${EventsEmoji} - For information about Events, and about how to join them.`
        );

      messageEmbed.react(ApplyEmoji);
      messageEmbed.react(RanksRolesEmoji);
      messageEmbed.react(GitHubEmoji);
      messageEmbed.react(AboutEmoji);
      messageEmbed.react(BotEmoji);
      messageEmbed.react(ServersEmoji);
      messageEmbed.react(RulesEmoji);
      messageEmbed.react(StatsEmoji);
      messageEmbed.react(EventsEmoji);

      client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === ApplyTeamEmoji) {
            message.channel.send("Test")
          }
        } else {
          return;
        }
      });
      const flagmessage = newEmbed
      const flags = ["everyone", "here", "delete"];

      if (!args[0]) {
        message.channel.send({ content: flagmessage })
      }

      if (args[0] === "delete") {
        if (!args[1]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      } else if (args[1] === "delete") {
        if (!args[0]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      } else if (args[2] === "delete") {
        if (!args[0]) {
          if (!args[1]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      }

      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[2] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }

      if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[2] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }

    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err3}\`.`)
    }
  },
};