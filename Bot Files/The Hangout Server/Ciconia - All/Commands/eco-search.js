const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "search",
  aliases: config.aliases.aliasessearch,
  cooldown: config.cooldown.cooldownsearch,
  permissions: config.permissions.permissionsearch,
  description: "Search for some coins. Kinda a second daily reward.",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
      const locations = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "48",
        "49",
        "50",
      ];

      const chosenLocations = locations
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

      const filter = ({ author, content }) =>
        message.author == author &&
        chosenLocations.some(
          (location) => location.toLowerCase() == content.toLowerCase()
        );

      const collector = message.channel.createMessageCollector(filter, {
        max: 1,
        time: 25000,
      });

      const earnings = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

      collector.on("collect", async (m) => {
        message.channel.send(
          `You found \`${earnings}\` coins! Congratulations! Be sure to come back tomorrow!`
        );

        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              wallet: earnings,
            },
          }
        );
      });

      collector.on("end", (collected, reason) => {
        if (reason == "time") {
          message.channel.send(config.commandsearch.commandsearchtimestop);
        }
      });

      message.channel.send(
        `<@${message.author.id
        }> What number do you choose?\n Type your decision in this channel.\n Note that there is a time limit!\n \`${chosenLocations.join(
          "` `"
        )}\``
      );
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC:`)
    }
  },
};
