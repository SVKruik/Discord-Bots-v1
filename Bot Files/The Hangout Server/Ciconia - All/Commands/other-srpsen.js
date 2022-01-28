const profileModel = require("../models/profileSchema");
const config = require("../Other/config.js");

module.exports = {
  name: "stakerockpaperscissor",
  aliases: config.aliases.aliasessrpsen,
  cooldown: config.cooldown.cooldownsrpsen,
  permissions: config.permissions.permissionsrpsen,
  description: "Rock, Paper Scissor!",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0].length)
      return message.channel.send("To keep it fair, also send your pick!");

    const stake = args[1];
    if (!args[1].length)
      return message.channel.send("Please also send your stake!");

    const target = message.author;

    const list = ["rock", "paper", "scissors", "scissor"];
    const rps = ["Rock! - ⛰", "Paper! - 📄", "Scissors! - ✂"];
    const random = rps[Math.floor(Math.random() * rps.length)];

    if (!list.includes(args[0].toLowerCase())) {
      return message.channel.send(`\`${args[0]}\` is not a valid option.`);
    }
    message.channel.send(random);
    console.log(random);

    var lowerrandom = random.toLowerCase();

    if (lowerrandom.substring(0, 4) == args[0])
      return message.channel.send("It's a tie! You did not loose any coins.");
    else if (random.slice(0, 4) != args[0]) {
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData)
          return message.channel.send(
            config.basemessages.messagesaccountmissing
          );
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              coins: stake * 2,
            },
          }
        );

        const profit = stake * 2;
        const newbal = profileData.coins + profit;
        return message.channel.send(
          `You win! You received double your stake. Your stake was \`${args[1]}\`, your new balance is \`${newbal}\`.`
        );
      } catch (err) {
        console.log(err);
      }
    }
  },
};