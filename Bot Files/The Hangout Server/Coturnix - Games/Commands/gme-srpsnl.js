// Inleg Steen Papier Schaar. Zelde als normale RPS maar met een inleg.
// Raak munten kwijt, krijg een veelvoud of gelijk spel.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "inlegsteenpapierschaar",
  aliases: config.aliases.aliasessrpsnl,
  cooldown: config.cooldown.cooldownsrpsnl,
  permissions: config.permissions.permissionsrpsnl,
  description: "Steen, Papier, Schaar, maar met inleg!",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      if (!args[0].length)
        return message.channel.send("Om het eerlijk te houden, moet je ook jouw keuze sturen!");
      const stake = args[1];
      if (!args[1].length)
        return message.channel.send("Stuur ook je inleg!");
      const target = message.author;
      const list = ["steen", "papier", "schaar"];
      const rps = ["Steen! - ⛰", "Papier! - 📄", "Schaar! - ✂"];
      const random = rps[Math.floor(Math.random() * rps.length)];

      if (!list.includes(args[0].toLowerCase())) {
        return message.channel.send(`\`${args[0]}\` is geen optie.`);
      }
      message.channel.send(random);
      console.log(random);

      var lowerrandom = random.toLowerCase();

      if (lowerrandom.substring(0, 4) == args[0])
        return message.channel.send("Het is gelijkspel! Je verloor geen munten.");
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
                wallet: stake * 1.1,
              },
            }
          );

          const profit = stake * 2;
          const newbal = profileData.wallet + profit;
          return message.channel.send(
            `Jij wint! Je kreeg een kleine bonus op je inleg. Je inleg was \`${args[1]}\`, je nieuwe saldo is \`${newbal}\`.`
          );
        } catch (err) {
          console.log(err);
          message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
    }
  },
};
