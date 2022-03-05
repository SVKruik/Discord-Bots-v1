const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "deposit",
  aliases: config.aliases.aliasesdeposit,
  cooldown: config.cooldown.cooldowndeposit,
  permissions: config.permissions.permissiondeposit,
  description: "Deposit coins from your wallet to your bank.",
    async execute(message, args, cmd, client, Discord, profileData) {


    const amount = args[0];
    if (amount <= 0)
      return message.channel.send(config.basemessages.messagesgreaterone);
    try {
      if (amount > profileData.wallet)
        return message.channel.send(config.basemessages.messagescoinsmissing);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            wallet: -amount,
            bank: amount,
          },
        }
      );

      const flagmessage = `You deposited \`${amount}\` coins into your bank account.`
      const flags = ["everyone", "here", "delete"];

      if (!args[1]) {
        message.channel.send(flagmessage)
      }

      if (args[1] === "delete") {
        if (!args[2]) {
          if (!args[3]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[2] === "delete") {
        if (!args[1]) {
          if (!args[3]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      } else if (args[3] === "delete") {
        if (!args[1]) {
          if (!args[2]) {
            message.delete();
            message.channel.send(flagmessage)
          }
        }
      }

      if (args[1] === "everyone") {
        if (args[2] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[2] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${flagmessage}`)
        } else {
          message.channel.send(`@everyone ${flagmessage}`)
        }
      } else if (args[3] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }

      if (args[1] === "here") {
        if (args[2] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[2] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[2] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[3] === "delete") {
          message.delete();
          message.channel.send(`@here ${flagmessage}`)
        } else {
          message.channel.send(`@here ${flagmessage}`)
        }
      } else if (args[3] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
    } catch (err) {
      console.log(err);
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
    }
  },
};
