module.exports = {
  name: "balance",
  description: "Check the user balance",
  permissions: ["SEND_MESSAGES"],
  async execute(message, args, cmd, client, Discord, profileData) {

    const channel = '820580470207021058'

    const BankEmoji = "🏦";
    const WalletEmoji = "👝";

    let embed = new Discord.MessageEmbed()
      .setColor("#ffb1b1")
      .setTitle("Choose Balance Option")
      .setImage("https://i.imgur.com/neCyTDH.png")
      .setDescription(
        "Choose what balance you would like to know.\n\n" +
          `${BankEmoji} for the balance of your Bank account.\n` +
          `${WalletEmoji} for the balance of your wallet.`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(BankEmoji);
    messageEmbed.react(WalletEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === BankEmoji) {
          await message.channel.send(`${message.author.username}, this is your current bank balance : \`${profileData.bank}\`.`);
        }
        if (reaction.emoji.name === WalletEmoji) {
          await message.channel.send(`${message.author.username}, this is your current wallet balance : \`${profileData.coins}\`.`);
        }
      } else {
        return;
      }
    });
  },
};
