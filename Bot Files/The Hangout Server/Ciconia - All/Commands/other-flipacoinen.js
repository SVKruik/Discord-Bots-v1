const config = require("./../Other/config.js");

module.exports = {
  name: "flipacoin",
  aliases: config.aliases.aliasesflipacoinen,
  cooldown: config.cooldown.cooldownflipacoinen,
  permissions: config.permissions.permissionflipacoinen,
  description: "Flip a coin!",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0]) {
      return message.channel.send({ content: "Please also choose your winning side."});
    }

    const list = ["heads", "head", "tails", "tail"];
    const fac = [`Heads!`, `Tails!`];
    const random = fac[Math.floor(Math.random() * fac.length)];

    if (!list.includes(args[0].toLowerCase())) {
      return message.channel.send({ content: `\`${args[0]}\` is not a valid option.`});
    }
    message.channel.send({ content: random});

    var lowerrandom = random.toLowerCase();

    if (lowerrandom.substring(0, 4) == args[0]) {
      console.log(lowerrandom);
      return message.channel.send({ content: "You win! - 🟢"});
    } else if (lowerrandom.substring(0, 4) != args[0]) {
      console.log(lowerrandom);
      return message.channel.send({ content: `You lose! - 🔴`});
    }
  },
};
