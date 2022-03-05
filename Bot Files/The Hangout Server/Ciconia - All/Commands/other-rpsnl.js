const config = require("../Other/config.js");

module.exports = {
  name: "steenpapierschaar",
  aliases: config.aliases.aliasesrpsnl,
  cooldown: config.cooldown.cooldownrpsnl,
  permissions: config.permissions.permissionrpsnl,
  description: "Steen, Papier, Schaar!",
    async execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)
    if (!args.length)
      return message.channel.send("Om het eerlijk te houden, moet je ook jouw keuze invoeren!");

    const list = ["steen", "papier", "schaar"];
    const rps = ["Steen! - ⛰", "Papier! - 📄", "Schaar! - ✂"];
    const random = rps[Math.floor(Math.random() * rps.length)];

    if (!list.includes(args[0].toLowerCase())) {
      return message.channel.send(`\`${args[0]}\` is geen geldige keuze!`);
    }
    message.channel.send(random);
  },
};