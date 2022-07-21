// Entry Point of the bot.

// Larum for events and other activities.

//Index
const Discord = require("discord.js");
const fs = require("fs");
const config = require('./other/config.js');
const mongoose = require("mongoose");
const { version } = require("os");
const { channel } = require("diagnostics_channel");
require("dotenv").config();
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

//Core Code
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

//Database - Economy, MongoDB and Robo3T
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(process.env.DBLOG);
  })
  .catch((err) => {
    console.log(process.env.DBLOGERR);
  });

//Token login
client.login(process.env.TOKEN);
