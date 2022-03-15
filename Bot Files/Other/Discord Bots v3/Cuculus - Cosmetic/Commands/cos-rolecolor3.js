// Oude systeem van kleuren. Wordt niet meer gebruikt. Gaat de geschiedenis in.

const config = require("../Other/config.js");

module.exports = {
  name: "rolecolor3",
  aliases: config.aliases.aliasesrolecolor3,
  cooldown: config.cooldown.cooldownrolecolor3,
  permissions: config.permissions.permissionrolecolor3,
  description: "Role color choose page 3.",
    async execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)
    const channel = config.base.basecolorchannelid;
    const earthyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557270188896276"
    );
    const brightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557320185012314"
    );
    const trbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557409825656902"
    );
    const mediumbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557474925465652"
    );
    const trmedireddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557527022927892"
    );
    const medyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557634954919996"
    );
    const medbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557703926079508"
    );
    const lightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557786864242729"
    );
    const bryellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557847920709702"
    );
    const ligyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557939696275456"
    );
    const medyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558010022195200"
    );
    const brreddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558904772079617"
    );
    const brightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558982375084062"
    );
    const lightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559048653475850"
    );
    const trbrightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559168858058762"
    );
    const goldaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559235425833001"
    );
    const darknougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559291285573632"
    );
    const silverTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559340514144357"
    );
    const neonorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559385758097448"
    );
    const neongreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559449704448081"
    );

    const earthyellowTeamEmoji = "🍇";
    const brightbluishvioletTeamEmoji = "🍈";
    const trbrownTeamEmoji = "🍉";
    const mediumbluishvioletTeamEmoji = "🍊";
    const trmedireddishvioletTeamEmoji = "🍋";
    const medyellowishgreenTeamEmoji = "🍌";
    const medbluishgreenTeamEmoji = "🍍";
    const lightbluishgreenTeamEmoji = "🌽";
    const bryellowishgreenTeamEmoji = "🥭";
    const ligyellowishgreenTeamEmoji = "🍎";
    const medyellowishorangeTeamEmoji = "🍏";
    const brreddishorangeTeamEmoji = "🍐";
    const brightreddishvioletTeamEmoji = "🍑";
    const lightorangeTeamEmoji = "🍒";
    const trbrightbluishvioletTeamEmoji = "🍓";
    const goldaTeamEmoji = "🥝";
    const darknougatTeamEmoji = "🍅";
    const silverTeamEmoji = "🥥";
    const neonorangeTeamEmoji = "🥑";
    const neongreenTeamEmoji = "🥔";

    let embed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setFooter(config.embed.embedfooter)
      .setImage(config.embed.embedimage)
      .setTitle("Role Color")
      .setDescription(
        "Choose a role color that you like, and your name will turn into that color.\n\n" +
          `${earthyellowTeamEmoji} = Earth Yellow, 108\n` +
          `${brightbluishvioletTeamEmoji} = Bright Bluish Violet, 110\n` +
          `${trbrownTeamEmoji} = Tr. Brown, 111\n` +
          `${mediumbluishvioletTeamEmoji} = Medium Bluish Violet, 112\n` +
          `${trmedireddishvioletTeamEmoji} = Tr. Medi. Reddish Violet, 113\n` +
          `${medyellowishgreenTeamEmoji} = Med. Yellowish Green, 115\n` +
          `${medbluishgreenTeamEmoji} = Med. Bluish Green, 116\n` +
          `${lightbluishgreenTeamEmoji} = Light Bluish Green, 118\n` +
          `${bryellowishgreenTeamEmoji} = Br. Yellowish Green, 119\n` +
          `${ligyellowishgreenTeamEmoji} = Lig. Yellowish Green, 120\n` +
          `${medyellowishorangeTeamEmoji} = Med. Yellowish Orange, 121\n` +
          `${brreddishorangeTeamEmoji} = Br. Reddish Orange, 123\n` +
          `${brightreddishvioletTeamEmoji} = Bright Reddish Violet, 124\n` +
          `${lightorangeTeamEmoji} = Light Orange, 125\n` +
          `${trbrightbluishvioletTeamEmoji} = Tr. Bright Bluish Violet, 126\n` +
          `${goldaTeamEmoji} = Gold (Type-A), 127\n` +
          `${darknougatTeamEmoji} = Dark Nougat, 128\n` +
          `${silverTeamEmoji} = Silver, 131\n` +
          `${neonorangeTeamEmoji} = Neon Orange, 133\n` +
          `${neongreenTeamEmoji} = Neon Green, 134`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(earthyellowTeamEmoji);
    messageEmbed.react(brightbluishvioletTeamEmoji);
    messageEmbed.react(trbrownTeamEmoji);
    messageEmbed.react(mediumbluishvioletTeamEmoji);
    messageEmbed.react(trmedireddishvioletTeamEmoji);
    messageEmbed.react(medyellowishgreenTeamEmoji);
    messageEmbed.react(medbluishgreenTeamEmoji);
    messageEmbed.react(lightbluishgreenTeamEmoji);
    messageEmbed.react(bryellowishgreenTeamEmoji);
    messageEmbed.react(ligyellowishgreenTeamEmoji);
    messageEmbed.react(medyellowishorangeTeamEmoji);
    messageEmbed.react(brreddishorangeTeamEmoji);
    messageEmbed.react(brightreddishvioletTeamEmoji);
    messageEmbed.react(lightorangeTeamEmoji);
    messageEmbed.react(trbrightbluishvioletTeamEmoji);
    messageEmbed.react(goldaTeamEmoji);
    messageEmbed.react(darknougatTeamEmoji);
    messageEmbed.react(silverTeamEmoji);
    messageEmbed.react(neonorangeTeamEmoji);
    messageEmbed.react(neongreenTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === earthyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(earthyellowTeamRole);
        }
        if (reaction.emoji.name === brightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === trbrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trbrownTeamRole);
        }
        if (reaction.emoji.name === mediumbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(mediumbluishvioletTeamRole);
        }
        if (reaction.emoji.name === trmedireddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trmedireddishvioletTeamRole);
        }
        if (reaction.emoji.name === medyellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(medyellowishgreenTeamRole);
        }
        if (reaction.emoji.name === medbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(medbluishgreenTeamRole);
        }
        if (reaction.emoji.name === lightbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightbluishgreenTeamRole);
        }
        if (reaction.emoji.name === bryellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(bryellowishgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(ligyellowishgreenTeamRole);
        }
        if (reaction.emoji.name === medyellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(medyellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brreddishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brreddishorangeTeamRole);
        }
        if (reaction.emoji.name === brightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === lightorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightorangeTeamRole);
        }
        if (reaction.emoji.name === trbrightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(trbrightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === goldaTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(goldaTeamRole);
        }
        if (reaction.emoji.name === darknougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darknougatTeamRole);
        }
        if (reaction.emoji.name === silverTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(silverTeamRole);
        }
        if (reaction.emoji.name === neonorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(neonorangeTeamRole);
        }
        if (reaction.emoji.name === neongreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(neongreenTeamRole);
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
        if (reaction.emoji.name === earthyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(earthyellowTeamRole);
        }
        if (reaction.emoji.name === brightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === trbrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trbrownTeamRole);
        }
        if (reaction.emoji.name === mediumbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumbluishvioletTeamRole);
        }
        if (reaction.emoji.name === trmedireddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trmedireddishvioletTeamRole);
        }
        if (reaction.emoji.name === medyellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(medyellowishgreenTeamRole);
        }
        if (reaction.emoji.name === medbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(medbluishgreenTeamRole);
        }
        if (reaction.emoji.name === lightbluishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightbluishgreenTeamRole);
        }
        if (reaction.emoji.name === bryellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(bryellowishgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowishgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(ligyellowishgreenTeamRole);
        }
        if (reaction.emoji.name === medyellowishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(medyellowishorangeTeamRole);
        }
        if (reaction.emoji.name === brreddishorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brreddishorangeTeamRole);
        }
        if (reaction.emoji.name === brightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === lightorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightorangeTeamRole);
        }
        if (reaction.emoji.name === trbrightbluishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(trbrightbluishvioletTeamRole);
        }
        if (reaction.emoji.name === goldaTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(goldaTeamRole);
        }
        if (reaction.emoji.name === darknougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darknougatTeamRole);
        }
        if (reaction.emoji.name === silverTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(silverTeamRole);
        }
        if (reaction.emoji.name === neonorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(neonorangeTeamRole);
        }
        if (reaction.emoji.name === neongreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(neongreenTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
