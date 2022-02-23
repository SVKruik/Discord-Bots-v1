const config = require("./../Other/config.js");

module.exports = {
  name: "rolecolor2",
  aliases: config.aliases.aliasesrolecolor2,
  cooldown: config.cooldown.cooldownrolecolor2,
  permissions: config.permissions.permissionrolecolor2,
  description: "Role color choose page 2.",
  async execute(message, args, cmd, client, Discord) {
    const channel = config.base.basecolorchannelid;
    const darkorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555748369563699"
    );
    const lightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555820662591550"
    );
    const transparentTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555926661070898"
    );
    const trredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556010257711204"
    );
    const trlgblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556060081860619"
    );
    const trblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556212205076491"
    );
    const tryellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556212205076491"
    );
    const lightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556305431855126"
    );
    const trfluereddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556375665504336"
    );
    const trgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556425191825419"
    );
    const trflugreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556525838348398"
    );
    const phosphwhiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556592473251871"
    );
    const lightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556650937671690"
    );
    const mediumredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556748849500240"
    );
    const mediumblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556783171489902"
    );
    const lightgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556944849330196"
    );
    const brightvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556995680100434"
    );
    const bryellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557046687019008"
    );
    const brightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557131458113556"
    );
    const brightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557194779500555"
    );

    const darkorangeTeamEmoji = "🍇";
    const lightbluishvioletTeamEmoji = "🍈";
    const transparentTeamEmoji = "🍉";
    const trredTeamEmoji = "🍊";
    const trlgblueTeamEmoji = "🍋";
    const trblueTeamEmoji = "🍌";
    const tryellowTeamEmoji = "🍍";
    const lightblueTeamEmoji = "🌽";
    const trfluereddishorangeTeamEmoji = "🥭";
    const trgreenTeamEmoji = "🍎";
    const trflugreenTeamEmoji = "🍏";
    const phosphwhiteTeamEmoji = "🍐";
    const lightredTeamEmoji = "🍑";
    const mediumredTeamEmoji = "🍒";
    const mediumblueTeamEmoji = "🍓";
    const lightgreyTeamEmoji = "🥝";
    const brightvioletTeamEmoji = "🍅";
    const bryellowishorangeTeamEmoji = "🥥";
    const brightorangeTeamEmoji = "🥑";
    const brightbluishgreenTeamEmoji = "🥔";

    let embed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setFooter(config.embed.embedfooter)
      .setImage(config.embed.embedimage)
      .setTitle("Role Color")
      .setDescription(
        "Choose a role color that you like, and your name will turn into that color.\n\n" +
          `${darkorangeTeamEmoji} = Dark Orange, 38\n` +
          `${lightbluishvioletTeamEmoji} = Light Bluish Violet, 39\n` +
          `${transparentTeamEmoji} = Transparent, 40\n` +
          `${trredTeamEmoji} = Tr. Red, 41\n` +
          `${trlgblueTeamEmoji} = Tr. Lg Blue, 42\n` +
          `${trblueTeamEmoji} = Tr. Blue, 43\n` +
          `${tryellowTeamEmoji} = Tr. Yellow, 44\n` +
          `${lightblueTeamEmoji} = Light Blue, 45\n` +
          `${trfluereddishorangeTeamEmoji} = Tr. Flu. Reddish Orange, 47\n` +
          `${trgreenTeamEmoji} = Tr. Green, 48\n` +
          `${trflugreenTeamEmoji} = Tr. Flu. Green, 49\n` +
          `${phosphwhiteTeamEmoji} = Phosph. White, 50\n` +
          `${lightredTeamEmoji} = Light Red, 100\n` +
          `${mediumredTeamEmoji} = Medium Red, 101\n` +
          `${mediumblueTeamEmoji} = Medium Blue, 102\n` +
          `${lightgreyTeamEmoji} = Light Grey, 103\n` +
          `${brightvioletTeamEmoji} = Bright Violet, 104\n` +
          `${bryellowishorangeTeamEmoji} = Br. Yellowish Orange, 105\n` +
          `${brightorangeTeamEmoji} = Bright Orange, 106\n` +
          `${brightbluishgreenTeamEmoji} = Bright Bluish Green, 107`
      );

    let messageEmbed = await message.channel.send({ content: embed});
    messageEmbed.react(darkorangeTeamEmoji);
    messageEmbed.react(lightbluishvioletTeamEmoji);
    messageEmbed.react(transparentTeamEmoji);
    messageEmbed.react(trredTeamEmoji);
    messageEmbed.react(trlgblueTeamEmoji);
    messageEmbed.react(trblueTeamEmoji);
    messageEmbed.react(tryellowTeamEmoji);
    messageEmbed.react(lightblueTeamEmoji);
    messageEmbed.react(trfluereddishorangeTeamEmoji);
    messageEmbed.react(trgreenTeamEmoji);
    messageEmbed.react(trflugreenTeamEmoji);
    messageEmbed.react(phosphwhiteTeamEmoji);
    messageEmbed.react(lightredTeamEmoji);
    messageEmbed.react(mediumredTeamEmoji);
    messageEmbed.react(mediumblueTeamEmoji);
    messageEmbed.react(lightgreyTeamEmoji);
    messageEmbed.react(brightvioletTeamEmoji);
    messageEmbed.react(bryellowishorangeTeamEmoji);
    messageEmbed.react(brightorangeTeamEmoji);
    messageEmbed.react(brightbluishgreenTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === darkorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darkorangeTeamRole);
        }
        if (reaction.emoji.name === lightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === transparentTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(transparentTeamRole);
        }
        if (reaction.emoji.name === trredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trredTeamRole);
        }
        if (reaction.emoji.name === trlgblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trlgblueTeamRole);
        }
        if (reaction.emoji.name === trblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trblueTeamRole);
        }
        if (reaction.emoji.name === tryellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(tryellowTeamRole);
        }
        if (reaction.emoji.name === lightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightblueTeamRole);
        }
        if (reaction.emoji.name === trfluereddishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trfluereddishorangeTeamRole);
        }
        if (reaction.emoji.name === trgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trgreenTeamRole);
        }
        if (reaction.emoji.name === trflugreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trflugreenTeamRole);
        }
        if (reaction.emoji.name === phosphwhiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(phosphwhiteTeamRole);
        }
        if (reaction.emoji.name === lightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightredTeamRole);
        }
        if (reaction.emoji.name === mediumredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(mediumredTeamRole);
        }
        if (reaction.emoji.name === mediumblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(mediumblueTeamRole);
        }
        if (reaction.emoji.name === lightgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightgreyTeamRole);
        }
        if (reaction.emoji.name === brightvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightvioletTeamRole);
        }
        if (reaction.emoji.name === bryellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(bryellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brightorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightorangeTeamRole);
        }
        if (reaction.emoji.name === brightbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightbluishgreenTeamRole);
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
        if (reaction.emoji.name === darkorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darkorangeTeamRole);
        }
        if (reaction.emoji.name === lightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === transparentTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(transparentTeamRole);
        }
        if (reaction.emoji.name === trredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trredTeamRole);
        }
        if (reaction.emoji.name === trlgblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trlgblueTeamRole);
        }
        if (reaction.emoji.name === trblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trblueTeamRole);
        }
        if (reaction.emoji.name === tryellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(tryellowTeamRole);
        }
        if (reaction.emoji.name === lightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightblueTeamRole);
        }
        if (reaction.emoji.name === trfluereddishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trfluereddishorangeTeamRole);
        }
        if (reaction.emoji.name === trgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trgreenTeamRole);
        }
        if (reaction.emoji.name === trflugreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trflugreenTeamRole);
        }
        if (reaction.emoji.name === phosphwhiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(phosphwhiteTeamRole);
        }
        if (reaction.emoji.name === lightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightredTeamRole);
        }
        if (reaction.emoji.name === mediumredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumredTeamRole);
        }
        if (reaction.emoji.name === mediumblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumblueTeamRole);
        }
        if (reaction.emoji.name === lightgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreyTeamRole);
        }
        if (reaction.emoji.name === brightvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightvioletTeamRole);
        }
        if (reaction.emoji.name === bryellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(bryellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brightorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightorangeTeamRole);
        }
        if (reaction.emoji.name === brightbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightbluishgreenTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
