var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

module.exports = {
  name: "image",
  aliases: ["img"],
  cooldown: process.env.ASHARD,
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "This sends the best google result for an image.",
  async execute(message, args, cmd, client, Discord) {
    const channel = 934093861079380018;
    const image_query = args.join(" ");
    if (!image_query) return message.channel.send(process.env.MSGIMGMISSING);
    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#934093861079380018> instead!`
      );
    }
    const blacklist = require('../Other/profanity.js');

    blacklist.forEach((word) => {
      if (message.content.toLowerCase().includes(word));
      message.delete();
      message.channel.send("Let's try to keep it family friendly!");
    });

    const image_results = await google.scrape(image_query, 1);
    await message.channel.send(image_results[0].url);
  },
};
