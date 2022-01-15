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
    const image_query = args.join(" ");
    if (!image_query) return message.channel.send(process.env.MSGIMGMISSING);

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);
  },
};
