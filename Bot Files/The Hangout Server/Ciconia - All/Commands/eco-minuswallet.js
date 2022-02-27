const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "minuswallet",
  aliases: config.aliases.aliasesminuswallet,
  cooldown: config.cooldown.cooldownminuswallet,
  permissions: config.permissions.permissionminuswallet,
  description: "Decrease the balance of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args[0]) {
      return message.channel.send(config.basemessages.messagesmembermention)
    };
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount <= 0)
      return message.channel.send(config.basemessages.messagesgreaterone);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            wallet: -amount,
          },
        }
      );

      const flagmessage = `The targeted member has lost \`${amount}\` amount of coins in their wallet account.`
      const flags = ["everyone", "here", "delete"];

      if (!args[2]) {
        message.channel.send(flagmessage)
      }

      if (args[2] === "delete") {
        if (!args[3]) {
          if (!args[4]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[3] === "delete") {
        if (!args[2]) {
          if (!args[4]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[4] === "delete") {
        if (!args[2]) {
          if (!args[3]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      }

      if (args[2] === "everyone") {
        if (args[3] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[3] || args[4] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[3] === "everyone") {
        if (args[2] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[4] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[4] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }

      if (args[2] === "here") {
        if (args[3] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[3] || args[4] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[3] === "here") {
        if (args[2] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[4] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[4] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
    } catch (err) {
      console.log(err);
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
    }
  },
};
