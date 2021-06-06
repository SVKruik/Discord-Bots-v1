require("dotenv").config();
const profileModel = require("../../models/profileSchema");

module.exports = async (Discord, client, message) => {
  //Core
  const prefix = process.env.PREFIX;

  const profileModel = require("../../models/profileSchema");

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  //Aliases
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  //Perms
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ];

  if (!command) return;
  if (command.hasOwnProperty("permissions")) {
    let invalidPerms = [];
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permission: ${perm}`);
      }
      if (!message.member.hasOwnProperty(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.channel.send(
        `To perform this command, you need these permissions: \`${invalidPerms}\``
      );
    }
  }

  //Error Checking
  try {
    command.execute(message, args, cmd, client, Discord, profileData);
  } catch (err) {
    message.reply(
      "There was an error trying to execute the specified command! Check the console to see what is wrong."
    );
    console.log(err);
  }
};