require("dotenv").config();
const profileModel = require("../../models/profileSchema");

const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    //Core
    const prefix = process.env.PREFIX;

    const profileModel = require("../../models/profileSchema");

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    //Database profile
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                name: message.author.username,

                coins: 0,
                bank: 0,

                level: 0,
                experience: 0,
            });
            profile.save();
        }
    } catch (err) {
        console.log(err);
    }

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
                `Please wait ${time_left.toFixed(
                    1
                )} more seconds before using the specified command: \`${
                    command.name
                }\`.`
            );
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    //Error Checking
    try {
        command.execute(message, args, cmd, client, Discord, profileData);
    } catch (err) {
        message.reply(
            "There was an error trying to execute the specified command! Something ain't right. Check the console."
        );
        console.log(err);
    }
};
