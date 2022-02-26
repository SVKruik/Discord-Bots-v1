const config = require("./../Other/config.js");

module.exports = {
  name: "event",
  aliases: config.aliases.aliasesevent,
  cooldown: config.cooldown.cooldownevent,
  permissions: config.permissions.permissionevent,
  description: "Set up a event with teams.",
  async execute(message, args, cmd, client, Discord) {

    
    const channel = config.base.baseeventchannelid;
    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }
    const oneTeamRole = message.guild.roles.cache.find(
      (role) => role.id === config.commandevent.teamoneid
    );
    const twoTeamRole = message.guild.roles.cache.find(
      (role) => role.id === config.commandevent.teamtwoid
    );
    const threeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === config.commandevent.teamthreeid
    );
    const fourTeamRole = message.guild.roles.cache.find(
      (role) => role.id === config.commandevent.teamfourid
    );

    const oneTeamEmoji = "🟦"; // Blue
    const twoTeamEmoji = "🟩"; // Green
    const threeTeamEmoji = "🟥"; // Red
    const fourTeamEmoji = "🟨"; // Yellow

    let embed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setFooter(config.embed.embedfooter)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setTitle(config.embeds.titleevent)
      .setDescription(
        `${config.embeds.descriptionevent}\n\n` +
        `${oneTeamEmoji} - For Team Blue!\n` +
        `${twoTeamEmoji} - For Team Green!\n` +
        `${threeTeamEmoji} - For Team Red!\n` +
        `${fourTeamEmoji} - For Team Yellow!\n`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(oneTeamEmoji);
    messageEmbed.react(twoTeamEmoji);
    messageEmbed.react(threeTeamEmoji);
    messageEmbed.react(fourTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === oneTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(oneTeamRole);
        }
        if (reaction.emoji.name === twoTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(twoTeamRole);
        }
        if (reaction.emoji.name === threeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(threeTeamRole);
        }
        if (reaction.emoji.name === fourTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(fourTeamRole);
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
        if (reaction.emoji.name === oneTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(oneTeamRole);
        }
        if (reaction.emoji.name === twoTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(twoTeamRole);
        }
        if (reaction.emoji.name === threeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(threeTeamRole);
        }
        if (reaction.emoji.name === fourTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(fourTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
