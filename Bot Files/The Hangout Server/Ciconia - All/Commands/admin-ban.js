require("console-stamp")(console, "[HH:MM]");
const config = require("./../Other/config.js");

module.exports = {
  name: "ban",
  aliases: config.aliases.aliasesban,
  cooldown: config.cooldown.cooldownban,
  permissions: config.permissions.permissionban,
  description: "config.descriptionban",
  execute(message, args) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    const reason1 = args[1];
    const reason = reason1.charAt(0).toUpperCase() + reason1.slice(1);

    const flags = ["everyone", "here", "delete"];

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);

        // Flag 1: Everyone
        if (args[2] === "everyone") {
          if (args[3] === "here") {
            return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
          } else {
            message.channel.send(`@everyone, <@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
          }
        } else if (args[3] === "everyone") {
          if (args[2] === "here") {
            return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
          } else {
            message.channel.send(`@everyone, <@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
          }
        } else if (args[4] === "everyone") {
          return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
        }

        // Flag 2: Here
        else if (args[2] === "here") {
          if (args[3] === "everyone") {
            return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
          } else {
            message.channel.send(`@here, <@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
          }
        } else if (args[3] === "here") {
          if (args[2] === "everyone") {
            return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
          } else {
            message.channel.send(`@here, <@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
          }
        } else if (args[4] === "here") {
          return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
        }

        // Flag 3: Delete
        else if (args[2] === "delete" || args[0] === "del") {
          message.delete();
          message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
        } else if (args[3] === "delete" || args[0] === "del") {
          message.delete();
          message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
        } else if (args[4] === "delete" || args[0] === "del") {
          message.delete();
          message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)
        } else message.channel.send(`<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`)

      //memberTarget.ban();
      console.log(
        `${memberTarget.user.username} got banned because of: ${reason}. This was done by ${message.author.username} using ${username}.`
      );
    } else {
      message.channel.send(config.basemessages.messageserror);
    }
  },
};
