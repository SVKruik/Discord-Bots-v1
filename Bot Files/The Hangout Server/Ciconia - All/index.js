// Ciconia has it all

//Index
const Discord = require("Discord.js");
const fs = require("fs");
const config = require('./Other/config.js');
const mongoose = require("mongoose");
const { version } = require("os");
const memberCounter = require("./Counters/member-counter");
require("dotenv").config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Counter
client.on("ready", async () => {
  memberCounter(client);
  await mongoose.connect(process.env.MONGODB_SRV || '', {
    keepAlive: true,

  });
});

//Core Code
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
});

//Database - Economy, MongoDB and Robo3T
mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(process.env.DBLOG);
  })
  .catch((err) => {
    console.log(process.env.DBLOGERR);
  });

//Token login
client.login(process.env.Discord_TOKEN);
