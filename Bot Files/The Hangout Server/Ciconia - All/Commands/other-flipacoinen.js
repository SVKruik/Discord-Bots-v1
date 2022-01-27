const config = require("./../Other/config.js");

module.exports = {
  name: "flipacoin",
  aliases: config.aliases.aliasesflipacoinen,
  cooldown: config.cooldown.cooldownflipacoinen,
  permissions: config.permissions.permissionflipacoinen,
  description: "Flip a coin!",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0].length)
    return message.channel.send("Please also choose your winning side.");

  const list = ["head", "tails", "tail"];
  const fac = [`It landed on \`Heads\`!`, `It landed on \`Tails\`!`];
  const random = fac[Math.floor(Math.random() * fac.length)];

  if (!list.includes(args[0].toLowerCase())) {
    return message.channel.send(`\`${args[0]}\` is not a valid option.`);
  }
  message.channel.send(random);

  var lowerrandom = random.toLowerCase();

  if (lowerrandom.substring(0, 4) == args[0])
    return message.channel.send("You win!");
  else if (random.slice(0, 4) != args[0]) {
      return message.channel.send(
        `You lose!`
      );
    }
  }
}
