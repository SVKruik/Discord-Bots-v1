// Oude systeem van kleuren. Wordt niet meer gebruikt. Gaat de geschiedenis in.

const config = require("../Other/config.js");

module.exports = {
  name: "rolecolor1",
  aliases: config.aliases.aliasesrolecolor1,
  cooldown: config.cooldown.cooldownrolecolor1,
  permissions: config.permissions.permissionrolecolor1,
  description: "Role color choose page 1.",
    async execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)
    const channel = config.base.basecolorchannelid;
    const whiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910544967582253086"
    );
    const greyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545117650235552"
    );
    const lightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545170787880970"
    );
    const brickyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545246302122025"
    );
    const lightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545313352282143"
    );
    const lightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545359871303710"
    );
    const pastelblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545447381250079"
    );
    const lightorangebrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545527530217522"
    );
    const nougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545606005620746"
    );
    const brightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545659688542239"
    );
    const medreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545734196133918"
    );
    const brightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545795923714058"
    );
    const brightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545862361509909"
    );
    const earthorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545936135106620"
    );
    const blackTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545977415454790"
    );
    const darkgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546045379960852"
    );
    const darkgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546101273260093"
    );
    const mediumgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546150250139689"
    );
    const ligyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546214976651335"
    );
    const brightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546311315599470"
    );

    const whiteTeamEmoji = "🍇";
    const greyTeamEmoji = "🍈";
    const lightyellowTeamEmoji = "🍉";
    const brickyellowTeamEmoji = "🍊";
    const lightgreenTeamEmoji = "🍋";
    const lightreddishvioletTeamEmoji = "🍌";
    const pastelblueTeamEmoji = "🍍";
    const lightorangebrownTeamEmoji = "🌽";
    const nougatTeamEmoji = "🥭";
    const brightredTeamEmoji = "🍎";
    const medreddishvioletTeamEmoji = "🍏";
    const brightblueTeamEmoji = "🍐";
    const brightyellowTeamEmoji = "🍑";
    const earthorangeTeamEmoji = "🍒";
    const blackTeamEmoji = "🍓";
    const darkgreyTeamEmoji = "🥝";
    const darkgreenTeamEmoji = "🍅";
    const mediumgreenTeamEmoji = "🥥";
    const ligyellowishorangeTeamEmoji = "🥑";
    const brightgreenTeamEmoji = "🥔";

    let embed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setFooter(config.embed.embedfooter)
      .setImage(config.embed.embedimage)
      .setTitle("Role Color")
      .setDescription(
        "Choose a role color that you like, and your name will turn into that color.\n\n" +
          `${whiteTeamEmoji} = White, 1\n` +
          `${greyTeamEmoji} = Grey, 2\n` +
          `${lightyellowTeamEmoji} = Light Yellow, 3\n` +
          `${brickyellowTeamEmoji} = Brick Yellow, 5\n` +
          `${lightgreenTeamEmoji} = Light Green, 6\n` +
          `${lightreddishvioletTeamEmoji} = Light Reddish Violet, 9\n` +
          `${pastelblueTeamEmoji} = Pastel Blue, 11\n` +
          `${lightorangebrownTeamEmoji} = Light Orange Brown, 12\n` +
          `${nougatTeamEmoji} = Nougat, 18\n` +
          `${brightredTeamEmoji} = Bright Red, 21\n` +
          `${medreddishvioletTeamEmoji} = Med. Reddish Violet, 22\n` +
          `${brightblueTeamEmoji} = Bright Blue, 23\n` +
          `${brightyellowTeamEmoji} = Bright Yellow, 24\n` +
          `${earthorangeTeamEmoji} = Earth Orange, 25\n` +
          `${blackTeamEmoji} = Black, 26\n` +
          `${darkgreyTeamEmoji} = Dark Grey, 27\n` +
          `${darkgreenTeamEmoji} = Dark Green, 28\n` +
          `${mediumgreenTeamEmoji} = Medium Green, 29\n` +
          `${ligyellowishorangeTeamEmoji} = Lig. yellowish Orange, 36\n` +
          `${brightgreenTeamEmoji} = Bright Green, 37`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(whiteTeamEmoji);
    messageEmbed.react(greyTeamEmoji);
    messageEmbed.react(lightyellowTeamEmoji);
    messageEmbed.react(brickyellowTeamEmoji);
    messageEmbed.react(lightgreenTeamEmoji);
    messageEmbed.react(lightreddishvioletTeamEmoji);
    messageEmbed.react(pastelblueTeamEmoji);
    messageEmbed.react(lightorangebrownTeamEmoji);
    messageEmbed.react(nougatTeamEmoji);
    messageEmbed.react(brightredTeamEmoji);
    messageEmbed.react(medreddishvioletTeamEmoji);
    messageEmbed.react(brightblueTeamEmoji);
    messageEmbed.react(brightyellowTeamEmoji);
    messageEmbed.react(earthorangeTeamEmoji);
    messageEmbed.react(blackTeamEmoji);
    messageEmbed.react(darkgreyTeamEmoji);
    messageEmbed.react(darkgreenTeamEmoji);
    messageEmbed.react(mediumgreenTeamEmoji);
    messageEmbed.react(ligyellowishorangeTeamEmoji);
    messageEmbed.react(brightgreenTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === whiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
        }
        if (reaction.emoji.name === greyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(greyTeamRole);
        }
        if (reaction.emoji.name === lightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightyellowTeamRole);
        }
        if (reaction.emoji.name === brickyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brickyellowTeamRole);
        }
        if (reaction.emoji.name === lightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightgreenTeamRole);
        }
        if (reaction.emoji.name === lightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === pastelblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(pastelblueTeamRole);
        }
        if (reaction.emoji.name === lightorangebrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightorangebrownTeamRole);
        }
        if (reaction.emoji.name === nougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(nougatTeamRole);
        }
        if (reaction.emoji.name === brightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightredTeamRole);
        }
        if (reaction.emoji.name === medreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(medreddishvioletTeamRole);
        }
        if (reaction.emoji.name === brightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightblueTeamRole);
        }
        if (reaction.emoji.name === brightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightyellowTeamRole);
        }
        if (reaction.emoji.name === earthorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(earthorangeTeamRole);
        }
        if (reaction.emoji.name === blackTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(blackTeamRole);
        }
        if (reaction.emoji.name === darkgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darkgreyTeamRole);
        }
        if (reaction.emoji.name === darkgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darkgreenTeamRole);
        }
        if (reaction.emoji.name === mediumgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(mediumgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(ligyellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightgreenTeamRole);
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
        if (reaction.emoji.name === whiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(whiteTeamRole);
        }
        if (reaction.emoji.name === greyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(greyTeamRole);
        }
        if (reaction.emoji.name === lightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightyellowTeamRole);
        }
        if (reaction.emoji.name === brickyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brickyellowTeamRole);
        }
        if (reaction.emoji.name === lightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreenTeamRole);
        }
        if (reaction.emoji.name === lightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === pastelblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelblueTeamRole);
        }
        if (reaction.emoji.name === lightorangebrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightorangebrownTeamRole);
        }
        if (reaction.emoji.name === nougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(nougatTeamRole);
        }
        if (reaction.emoji.name === brightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightredTeamRole);
        }
        if (reaction.emoji.name === medreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(medreddishvioletTeamRole);
        }
        if (reaction.emoji.name === brightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightblueTeamRole);
        }
        if (reaction.emoji.name === brightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightyellowTeamRole);
        }
        if (reaction.emoji.name === earthorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(earthorangeTeamRole);
        }
        if (reaction.emoji.name === blackTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(blackTeamRole);
        }
        if (reaction.emoji.name === darkgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreyTeamRole);
        }
        if (reaction.emoji.name === darkgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreenTeamRole);
        }
        if (reaction.emoji.name === mediumgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(ligyellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightgreenTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
