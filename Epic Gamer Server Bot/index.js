const Discord = require("Discord.js");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const fs = require("fs");
const mongoose = require("mongoose");

const memberCounter = require("./Counters/member-counter");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
});

client.on("ready", () => {
  client.user
    .setActivity("Discord.js", { type: "PLAYING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
  client.user
    .setPresence({ activity: { name: "Hypixel Bed Wars" }, status: "idle" })
    .then(console.log)
    .catch(console.error);
});

client.on("guildMemberAdd", (guildMember) => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === "Member"
  );

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache
    .get("850753468927049798")
    .send(
      `Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`
    );
});

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

client.login(process.env.Discord_TOKEN);
