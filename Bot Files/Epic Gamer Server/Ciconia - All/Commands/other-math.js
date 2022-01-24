const math = require("mathjs");
const config = require('./../Other/config.js');

module.exports = {
  name: "mathematics",
  aliases: config.aliases.aliasesmath,
  cooldown: process.env.ASMID,
  description: "Basic calculation.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    try {
      const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle(`Calculator`)
        .setImage(process.env.MBDIMG)
        .setDescription("Here is the answer to your question:")
        .addFields(
          {
            name: "Your question:",
            value: args.join(""),
          },
          {
            name: "Answer:",
            value: Math.round(math.evaluate(args.join(" "))  * 100) / 100,
          }
        )
        .setFooter(process.env.MBDFTR);

      message.channel.send(newEmbed);
    } catch (err) {
      message.channel.send("I don't understand your question.");
    }
  },
};
