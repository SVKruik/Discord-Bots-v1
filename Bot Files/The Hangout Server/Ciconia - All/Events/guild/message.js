// Kern van de bot. Dit is de listener naar berichten die beginnen met de prefix. 
// Verder zitten hier ook de cooldown, permission en aliases module in.
// Vele variabelen zitten in de config.
// Veel kern spulletjes die eenmaal geschreven niet meer aangeraakt hoeven te worden. 

require("dotenv").config();
const config = require("./../../Other/config.js");
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  //Core

  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const profileModel = require("../../models/profileSchema");

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);

  const rndIntmax = 10000000000000
  const rndIntmin = 1
  const rndInt = Math.round(Math.floor(Math.random() * rndIntmax) + rndIntmin)

  //Database profile
  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      message.channel.send("It looks like you didn't have an account with us. I have created one for you. This was an one time thing. You can now use all Economy and Level commands.")
      let profile = await profileModel.create({
        userID: message.author.id,
        name: message.author.username,
        avatar: message.author.avatar,
        bot: message.author.bot,
        tag: tag,
        uni: rndInt,
        warnings: 0,

        scrapexotic: 0,
        scraplegendary: 0,
        scrapepic: 0,
        scraprare: 0,
        scrapuncommon: 0,
        scrapcommon: 0,

        music1: "https://www.youtube.com/",
        music2: "https://www.youtube.com/",
        music3: "https://www.youtube.com/",
        music4: "https://www.youtube.com/",
        music5: "https://www.youtube.com/",
        music6: "https://www.youtube.com/",

        level: 0,
        experience: 0,

        wallet: 0,
        bank: 0,

        boxesultra: 0,
        boxessuper: 0,
        boxesnormal: 0,

        shardsdiamond: 0,
        shardsplatinum: 0,
        shardsgold: 0,
        shardssilver: 0,
        shardsbronze: 0,
        shardsiron: 0,

        xi: 0,
        pi: 0,
        
        tradesaccepted: 0,
        tradescancelled: 0,
        actions: 0,
        amountbought: 0,
        amountsold: 0,

        steel: 0,
        steelpart: 0,
        iron: 0,
        carbon: 0,
        rawiron: 0,

        brick: 0,
        clay: 0,

        woodplank: 0,
        woodpart: 0,
        wood: 0,
        logs: 0,

        pipe: 0,
        plasticpart: 0,
        plastic: 0,

        glass: 0,
        limestone: 0,
        sand: 0,

        granite: 0,
        marble: 0,
        quartz: 0,
        chalk: 0,
        slate: 0,
        basalt: 0,

        phenolicfoam: 0,
        polyurethane: 0,
        xps: 0,
        rockwool: 0,
        foamglass: 0,
        glasswool: 0,
        doubleglass: 0,
        tripleglass: 0,

        fabric: 0,
        cotton: 0,
        fibre: 0,

        bread: 0,
        wheat: 0,
        flower: 0,

        meat: 0,
        animal: 0,

        vegetable: 0,
        plant: 0,

        polymaterial: 0,
        acid: 0,
        catalyst: 0,

        chromepart: 0,
        chrome: 0,
        brasspart: 0,
        brass: 0,

        diamond: 0,
        gold: 0,
        platinum: 0,
        silver: 0,
        copper: 0,
        lithium: 0,
        cobalt: 0,

        componentelectric: 0,
        componentinterior: 0,
        componentclothing: 0,
        componentstarting: 0,

        housetier1: 0,
        housetier2: 0,
        housetier3: 0,
        housetier4: 0,
        housetier5: 0,

        warehousetier: 0,
        policetier: 0,
        firedepartmenttier: 0,
        hospitaltier: 0,
        malltier: 0,
        cityhalltier: 0,
        infrastructuretier: 0,
        landfilltier: 0,

        interiorshoptier: 0,
        clothingshoptier: 0,
        drugstoretier: 0,
        conveniencestoretier: 0,
        devicestoretier: 0,

        happinesspercentage: 0,
        crimerate: 0,
        population: 0,

        reactortier: 0,
        factorytier: 0,
        energyplanttier: 0,
        waterplanttier: 0,
        gasplanttier: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }

  //Aliases
  try {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
  } catch (err) {
    console.log(`${message.author.username} used an invalid command.`)
    return message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
  }
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
    "MANAGE_EVENTS",
    "MANAGE_THREADS",
    "CREATE_PUBLIC_THREADS",
    "CREATE_PRIVATE_THREADS",
    "USE_EXTERNAL_STICKERS",
    "SEND_MESSAGES_IN_THREADS",
    "USE_EMBEDDED_ACTIVITIES",
    "MODERATE_MEMBERS"
  ];
  if (command.permissions.length) {
    let invalidPerms = [];
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!message.member.permissions.has(perm)) {
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
