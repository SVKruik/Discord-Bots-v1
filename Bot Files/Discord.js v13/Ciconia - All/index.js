// Ciconia has it all

//Index
const Discord = require("discord.js");
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require("fs");
const config = require('./Other/config.js');
const mongoose = require("mongoose");
const { version } = require("os");
const memberCounter = require("./Counters/member-counter");
require("dotenv").config();

//Counter
client.on("ready", () => {
  memberCounter(client);
});

//Core Code
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
});

//Database - Economy, MongoDB and Robo3T

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  retryWrites: true,
})
  .then(() => {
    console.log(process.env.DBLOG);
  })
  .catch((err) => {
    console.log(process.env.DBLOGERR);
  });

// mongoose
//   .connect(process.env.MONGODB_SRV, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(process.env.DBLOG);
//   })
//   .catch((err) => {
//     console.log(process.env.DBLOGERR);
//   });

//Token login
client.login(process.env.Discord_TOKEN);
