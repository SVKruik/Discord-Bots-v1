// Steen papier schaar Engelstalig

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "rockpaperscissor",
  aliases: config.aliases.aliasesrpsen,
  cooldown: config.cooldown.cooldownrpsen,
  permissions: config.permissions.permissionrpsen,
  description: "Rock, Paper Scissor!",
  async execute(message, args, cmd, client, Discord) {
    try {
      if (!args.length)
        return message.channel.send("To keep it fair, also send your pick!");

      const list = ["rock", "paper", "scissors", "scissor"];
      const rps = ["Rock! - ⛰", "Paper! - 📄", "Scissors! - ✂"];
      const random = rps[Math.floor(Math.random() * rps.length)];

      if (!list.includes(args[0].toLowerCase())) {
        return message.channel.send(`\`${args[0]}\` is not a valid option.`);
      }
      message.channel.send(random);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};
