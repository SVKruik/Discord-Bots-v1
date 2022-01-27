var Scraper = require("images-scraper");
const config = require("./../Other/config.js");
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
    const channel = config.base.baseimagechannelid;
    const image_query = args.join(" ");
    if (!image_query) return message.channel.send(process.env.MSGIMGMISSING);
    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }
    const blacklist = require("./../Other/profanity.js");

    if (blacklist.includes(args[0].toLowerCase())) {
      message.delete();
      return message.channel.send("Lets keep this family friendly!");
    } else {
      const image_results = await google.scrape(image_query, 1);
      await message.channel.send(image_results[0].url);
    }
  },
};
