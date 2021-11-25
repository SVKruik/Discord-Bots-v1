module.exports = {
  name: "rolecolorx",
  aliases: ["rlclrx"],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Role color choose page X.",
  async execute(message, args, cmd, client, Discord) {
    const channel = process.env.ROLECOLORCHANNEL;
    const template1TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template2TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template3TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template4TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template5TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template6TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template7TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template8TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template9TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template10TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template11TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template12TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template13TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template14TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template15TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template16TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template17TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template18TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template19TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
    const template20TeamRole = message.guild.roles.cache.find(
      (role) => role.id === ''
    );
 
    const template1TeamEmoji = "🍇";
    const template2TeamEmoji = "🍈";
    const template3TeamEmoji = "🍉";
    const template4TeamEmoji = "🍊";
    const template5TeamEmoji = "🍋";
    const template6TeamEmoji = "🍌";
    const template7TeamEmoji = "🍍";
    const template8TeamEmoji = "🌽";
    const template9TeamEmoji = "🥭";
    const template10TeamEmoji = "🍎";
    const template11TeamEmoji = "🍏";
    const template12TeamEmoji = "🍐";
    const template13TeamEmoji = "🍑";
    const template14TeamEmoji = "🍒";
    const template15TeamEmoji = "🍓";
    const template16TeamEmoji = "🥝";
    const template17TeamEmoji = "🍅";
    const template18TeamEmoji = "🥥";
    const template19TeamEmoji = "🥑";
    const template20TeamEmoji = "🥔";

    let embed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setFooter(process.env.MBDFTR)
      .setImage(process.env.MBDIMG)
      .setTitle("Role Color")
      .setDescription(
        "Choose a role color that you like, and your name will turn into that color.\n\n" +
          `${template1TeamEmoji} = Dark Orange, 38\n` +
          `${template2TeamEmoji} = Light Bluish Violet, 39\n` +
          `${template3TeamEmoji} = template3, 40\n` +
          `${template4TeamEmoji} = Tr. Red, 41\n` +
          `${template5TeamEmoji} = Tr. Lg Blue, 42\n` +
          `${template6TeamEmoji} = Tr. Blue, 43\n` +
          `${template7TeamEmoji} = Tr. Yellow, 44\n` +
          `${template8TeamEmoji} = Light Blue, 45\n` +
          `${template9TeamEmoji} = Tr. Flu. Reddish Orange, 47\n` +
          `${template10TeamEmoji} = Tr. Green, 48\n` +
          `${template11TeamEmoji} = Tr. Flu. Green, 49\n` +
          `${template12TeamEmoji} = Phosph. White, 50\n` +
          `${template13TeamEmoji} = Light Red, 100\n` +
          `${template14TeamEmoji} = Medium Red, 101\n` +
          `${template15TeamEmoji} = Medium Blue, 102\n` +
          `${template16TeamEmoji} = Light Grey, 103\n` +
          `${template17TeamEmoji} = Bright Violet, 104\n` +
          `${template18TeamEmoji} = Br. Yellowish Orange, 105\n` +
          `${template19TeamEmoji} = Bright Orange, 106\n` +
          `${template20TeamEmoji} = Bright Bluish Green, 107`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(template1TeamEmoji);
    messageEmbed.react(template2TeamEmoji);
    messageEmbed.react(template3TeamEmoji);
    messageEmbed.react(template4TeamEmoji);
    messageEmbed.react(template5TeamEmoji);
    messageEmbed.react(template6TeamEmoji);
    messageEmbed.react(template7TeamEmoji);
    messageEmbed.react(template8TeamEmoji);
    messageEmbed.react(template9TeamEmoji);
    messageEmbed.react(template10TeamEmoji);
    messageEmbed.react(template11TeamEmoji);
    messageEmbed.react(template12TeamEmoji);
    messageEmbed.react(template13TeamEmoji);
    messageEmbed.react(template14TeamEmoji);
    messageEmbed.react(template15TeamEmoji);
    messageEmbed.react(template16TeamEmoji);
    messageEmbed.react(template17TeamEmoji);
    messageEmbed.react(template18TeamEmoji);
    messageEmbed.react(template19TeamEmoji);
    messageEmbed.react(template20TeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === template1TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template1TeamRole);
        }
        if (reaction.emoji.name === template2TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template2TeamRole);
        }
        if (reaction.emoji.name === template3TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template3TeamRole);
        }
        if (reaction.emoji.name === template4TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template4TeamRole);
        }
        if (reaction.emoji.name === template5TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template5TeamRole);
        }
        if (reaction.emoji.name === template6TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template6TeamRole);
        }
        if (reaction.emoji.name === template7TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template7TeamRole);
        }
        if (reaction.emoji.name === template8TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template8TeamRole);
        }
        if (reaction.emoji.name === template9TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template9TeamRole);
        }
        if (reaction.emoji.name === template10TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template10TeamRole);
        }
        if (reaction.emoji.name === template11TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template11TeamRole);
        }
        if (reaction.emoji.name === template12TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template12TeamRole);
        }
        if (reaction.emoji.name === template13TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template13TeamRole);
        }
        if (reaction.emoji.name === template14TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template14TeamRole);
        }
        if (reaction.emoji.name === template15TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template15TeamRole);
        }
        if (reaction.emoji.name === template16TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template16TeamRole);
        }
        if (reaction.emoji.name === template17TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template17TeamRole);
        }
        if (reaction.emoji.name === template18TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template18TeamRole);
        }
        if (reaction.emoji.name === template19TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template19TeamRole);
        }
        if (reaction.emoji.name === template20TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(template20TeamRole);
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
        if (reaction.emoji.name === template1TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template1TeamRole);
        }
        if (reaction.emoji.name === template2TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template2TeamRole);
        }
        if (reaction.emoji.name === template3TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template3TeamRole);
        }
        if (reaction.emoji.name === template4TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template4TeamRole);
        }
        if (reaction.emoji.name === template5TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template5TeamRole);
        }
        if (reaction.emoji.name === template6TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template6TeamRole);
        }
        if (reaction.emoji.name === template7TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template7TeamRole);
        }
        if (reaction.emoji.name === template8TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template8TeamRole);
        }
        if (reaction.emoji.name === template9TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template9TeamRole);
        }
        if (reaction.emoji.name === template10TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template10TeamRole);
        }
        if (reaction.emoji.name === template11TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template11TeamRole);
        }
        if (reaction.emoji.name === template12TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template12TeamRole);
        }
        if (reaction.emoji.name === template13TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template13TeamRole);
        }
        if (reaction.emoji.name === template14TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template14TeamRole);
        }
        if (reaction.emoji.name === template15TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template15TeamRole);
        }
        if (reaction.emoji.name === template16TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template16TeamRole);
        }
        if (reaction.emoji.name === template17TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template17TeamRole);
        }
        if (reaction.emoji.name === template18TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template18TeamRole);
        }
        if (reaction.emoji.name === template19TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template19TeamRole);
        }
        if (reaction.emoji.name === template20TeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(template20TeamRole);
        }
      } else {
        return;
      }
    });
  },
};
