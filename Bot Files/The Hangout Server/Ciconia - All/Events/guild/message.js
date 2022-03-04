require("dotenv").config();
const config = require("./../../Other/config.js");
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  //Core
  const prefix = process.env.PREFIX;
  const target = message.author.id;

  // Database Schema's
  const bitsModel = require("../../models/bitsSchema");
  const boxesModel = require("../../models/boxesSchema");
  const economyModel = require("../../models/economySchema");
  const levelModel = require("../../models/levelSchema");
  const musicModel = require("../../models/musicSchema");
  const profileModel = require("../../models/profileSchema");
  const scrapModel = require("../../models/scrapSchema");

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);

  const rndIntmax = 10000000000000
  const rndIntmin = 1
  const rndInt = Math.round(Math.floor(Math.random() * rndIntmax) + rndIntmin)

  //Database profile
  // Bits
  let bitsData;
  try {
    bitsData = await bitsModel.findOne({ userID: message.author.id });
    if (!bitsData) {
      let bits = await bitsModel.create({
        userID: `A ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        bitsdiamond: 0,
        bitsplatinum: 0,
        bitsgold: 0,
        bitssilver: 0,
        bitsbronze: 0,
        bitsiron: 0,
      });
      bits.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Boxes
  let boxesData;
  try {
    boxesData = await boxesModel.findOne({ userID: message.author.id });
    if (!boxesData) {
      let boxes = await boxesModel.create({
        userID: `B ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        boxesultra: 0,
        boxessuper: 0,
        boxesnormal: 0,
      });
      boxes.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Economy
  let economyData;
  try {
    economyData = await economyModel.findOne({ userID: message.author.id });
    if (!economyData) {
      let economy = await economyModel.create({
        userID: `C ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        wallet: 0,
        bank: 0,
      });
      economy.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Level
  let levelData;
  try {
    levelData = await levelModel.findOne({ userID: message.author.id });
    if (!levelData) {
      let level = await levelModel.create({
        userID: `D ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        level: 0,
        experience: 0,
      });
      level.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Music
  let musicData;
  try {
    musicData = await musicModel.findOne({ userID: message.author.id });
    if (!musicData) {
      let music = await musicModel.create({
        userID: `E ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        music1: "https://www.youtube.com/",
        music2: "https://www.youtube.com/",
        music3: "https://www.youtube.com/",
        music4: "https://www.youtube.com/",
        music5: "https://www.youtube.com/",
        music6: "https://www.youtube.com/",
      });
      music.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Profile
  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: `F ${message.author.id}`,
        name: message.author.username,
        avatar: message.author.avatar,
        banner: message.author.banner,
        bot: message.author.bot,
        tag: tag,
        uni: rndInt,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }
  // Scrap
  let scrapData;
  try {
    scrapData = await scrapModel.findOne({ userID: message.author.id });
    if (!scrapData) {
      let scrap = await scrapModel.create({
        userID: `G ${message.author.id}`,
        name: message.author.username,
        tag: tag,
        uni: rndInt,

        scrapexotic: 0,
        scraplegendary: 0,
        scrapepic: 0,
        scraprare: 0,
        scrapuncommon: 0,
        scrapcommon: 0,
      });
      scrap.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }


  //Inc on message send
  // try {
  //   const targetData = await profileModel.findOne({ userID: target.id });
  //   await profileModel.findOneAndUpdate(
  //     {
  //       userID: target.id,
  //     },
  //     {
  //       $inc: {
  //         experience: 3,
  //       },
  //     }
  //   );
  // } catch (err) {
  //   console.log(err);
  //   message.channel.send(`Error executing command. EC: \`${config.errorcodes.err6}\`.`)
  // }

  //Aliases
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  //Message Permissions
  // https://discord.com/developers/docs/topics/permissions
  // Keep updated in order to use new permissions.
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
    "MANAGE_EMOJIS_AND_STICKERS",
    "USE_APPLICATION_COMMANDS",
    "REQUEST_TO_SPEAK",
    "MANAGE_THREADS",
    "CREATE_PUBLIC_THREADS",
    "CREATE_PRIVATE_THREADS",
    "USE_EXTERNAL_STICKERS",
    "SEND_MESSAGES_IN_THREADS",
    "START_EMBEDDED_ACTIVITIES",
  ];

  if (command.permissions.length) {
    let invalidPerms = [];
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!message.member.hasPermission(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.channel.send(
        `You are missing the following permissions to use this command: \`${invalidPerms}\`.`
      );
    }
  }

  //Cooldown
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = command.cooldown * 1000;

  if (time_stamps.has(message.author.id)) {
    const expiration_time =
      time_stamps.get(message.author.id) + cooldown_amount;

    if (current_time < expiration_time) {
      const time_left = (expiration_time - current_time) / 1000;

      return message.reply(
        `Please wait \`${time_left.toFixed(
          1
        )}\` more seconds before using the command: \`${command.name}\`.`
      );
    }
  }

  time_stamps.set(message.author.id, current_time);
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

  //Error Checking
  try {
    command.execute(message, args, cmd, client, Discord, profileData);
  } catch (err) {
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err1}\`.`)
    console.log(err);
  }
};
