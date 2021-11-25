// Stern supports YouTube music

//Index
const Discord = require("Discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const memberCounter = require("./Counters/member-counter");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

//Counter
client.on('ready', () => {
  memberCounter(client);
})


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
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Succesfully connected to the database.");
  })
  .catch((err) => {
    console.log(err);
  });

//Token login - Stored in a hidden file. 
client.login(process.env.Discord_TOKEN);
