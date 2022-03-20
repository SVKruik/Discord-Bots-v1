// De index van de bot. Vanuit hier start de bot op.
// Ook wordt hiermee met de DB verbonden.

// Perdix for stats

//Index
const Discord = require("Discord.js");
const fs = require("fs");
const config = require('./Other/config.js');
const mongoose = require("mongoose");
const { version } = require("os");
const memberCounter = require("./Counters/counters.js");
const { channel } = require("diagnostics_channel");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

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
mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useCreateIndex: true,
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
