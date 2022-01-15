module.exports = {
  name: "event",
  aliases: ["vnt"],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Set up a event with teams.",
  async execute(message, args, cmd, client, Discord) {
    const channel = process.env.EVENTCHANNEL;
    const greenTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Team Green"
    );
    const redTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Team Red"
    );
    const yellowTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Team Yellow"
    );
    const blueTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Team blue"
    );

    const greenTeamEmoji = "🟩";
    const redTeamEmoji = "🟥";
    const yellowTeamEmoji = "🟨";
    const blueTeamEmoji = "🟦";

    let embed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setFooter(process.env.MBDFTR)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
      .setTitle("Choose a team to play on!")
      .setDescription(
        "Choosing a team will allow you to interact with your teammates while in a event! When a event starts with for example Bed Wars, you can choose your team here. Be aware though that teams will be balanced, and your pick is not always available.\n\n" +
          `${greenTeamEmoji} - For Team Green!\n` +
          `${redTeamEmoji} - For Team Red!\n` +
          `${yellowTeamEmoji} - For Team Yellow!\n` +
          `${blueTeamEmoji} - For Team Blue!`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(greenTeamEmoji);
    messageEmbed.react(redTeamEmoji);
    messageEmbed.react(yellowTeamEmoji);
    messageEmbed.react(blueTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === greenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(greenTeamRole);
        }
        if (reaction.emoji.name === redTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(redTeamRole);
        }
        if (reaction.emoji.name === yellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(yellowTeamRole);
        }
        if (reaction.emoji.name === blueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(blueTeamRole);
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
        if (reaction.emoji.name === greenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(greenTeamRole);
        }
        if (reaction.emoji.name === redTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(redTeamRole);
        }
        if (reaction.emoji.name === yellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(yellowTeamRole);
        }
        if (reaction.emoji.name === blueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(blueTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
