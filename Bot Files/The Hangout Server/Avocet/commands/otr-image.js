// Stuur een afbeelding. De bot zoekt je zoekterm op, en verstuurd het eerste resultaat.
// Werkt met blacklist ivm 'pikante' zoektermen. Zie ../other/profanity.js voor de lijst.

var Scraper = require("images-scraper");
const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

module.exports = {
  name: "image",
  aliases: config.aliases.aliasesimage,
  cooldown: config.cooldown.cooldownimage,
  permissions: config.permissions.permissionimage,
  description: "This sends the best google result for an image.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const channel = config.base.baseimagechannelid;
      const image_query = args.join(" ");
      if (!image_query) return message.channel.send(config.commandimage.commandimagemissing);
      if (message.channel.id == channel) {
      } else {
        return message.channel.send(
          `You are not in the right channel to use this command! Please use <#${channel}> instead!`
        );
      }
      const blacklist = require("../other/profanity.js");

      if (blacklist.includes(args[0].toLowerCase())) {
        message.delete();
        console.log(`${message.author.username} used the following forbidden word in an image search: || ${args[0]} ||`);
        return message.channel.send("Lets keep this family friendly!");
      } else {
        const image_results = await google.scrape(image_query, 1);
        await message.channel.send(image_results[0].url);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};
