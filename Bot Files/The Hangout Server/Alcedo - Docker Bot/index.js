// De index van de bot. Vanuit hier start de bot op.
// Ook wordt hiermee met de DB verbonden.

// Alcedo is for testing the Docker container.

//Index
const Discord = require("Discord.js");
const fs = require("fs");
const config = require('./Other/config.js');
const mongoose = require("mongoose");
const { version } = require("os");
const { channel } = require("diagnostics_channel");
require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

//Core Code
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
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
