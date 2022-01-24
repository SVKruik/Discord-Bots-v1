const config = require('./../Other/config.js');

module.exports = {
  name: "help",
  aliases: config.aliases.aliaseshelpst1,
  cooldown: config.cooldown.cooldownhelpst1,
  permissions: ["SEND_MESSAGES"],
  description: "Advanced Help - Stage 1",
  async execute(message, args, cmd, client, Discord) {
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

    let embed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEHELPST1)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
      .setFooter(process.env.MBDFTR)
      .setDescription(
        "Choose a topic where you want to have help with. If this Bot still does not answer your questions, you can contact our support team.\n\n" +
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

    let messageEmbed = await message.channel.send(embed);
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
        if (reaction.emoji.name === ApplyEmoji) {
          await message.channel.send("Test1");
        }
        if (reaction.emoji.name === RanksRolesEmoji) {
          await message.channel.send("Test2");
        }
        if (reaction.emoji.name === GitHubEmoji) {
          await message.channel.send("Test3");
        }
        if (reaction.emoji.name === AboutEmoji) {
          await message.channel.send("Test4");
        }
        if (reaction.emoji.name === BotEmoji) {
          await message.channel.send("Test5");
        }
        if (reaction.emoji.name === ServersEmoji) {
          await message.channel.send("Test6");
        }
        if (reaction.emoji.name === RulesEmoji) {
          await message.channel.send("Test7");
        }
        if (reaction.emoji.name === StatsEmoji) {
          await message.channel.send("Test8");
        }
        if (reaction.emoji.name === EventsEmoji) {
          await message.channel.send("Test9");
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === ApplyEmoji) {
          await message.channel.send("Test1");
        }
        if (reaction.emoji.name === RanksRolesEmoji) {
          await message.channel.send("Test2");
        }
        if (reaction.emoji.name === GitHubEmoji) {
          await message.channel.send("Test3");
        }
        if (reaction.emoji.name === AboutEmoji) {
          await message.channel.send("Test4");
        }
        if (reaction.emoji.name === BotEmoji) {
          await message.channel.send("Test5");
        }
        if (reaction.emoji.name === ServersEmoji) {
          await message.channel.send("Test6");
        }
        if (reaction.emoji.name === RulesEmoji) {
          await message.channel.send("Test7");
        }
        if (reaction.emoji.name === StatsEmoji) {
          await message.channel.send("Test8");
        }
        if (reaction.emoji.name === EventsEmoji) {
          await message.channel.send("Test9");
        }
      } else {
        return;
      }
    });
  },
};
