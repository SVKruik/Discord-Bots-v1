const config = require("../Other/config.js");
const haversine = require("haversine-distance");

module.exports = {
    name: "haversine",
    aliases: config.aliases.aliaseshaversine,
    cooldown: config.cooldown.cooldownhaversine,
    permissions: config.permissions.permissionhaversine,
    description: "Calculate the distance between two GPS coordinates.",
    execute(message, args, cmd, client, Discord, profileData) {

        if (!args[0]) {
            return message.channel.send("You are missing your \`latitude\` of \`A\`.")
        } else if (!args[1]) {
            return message.channel.send("You are missing your \`longitude\` of \`A\`.")
        } else if (!args[2]) {
            return message.channel.send("You are missing your \`latitude\` of \`B\`.")
        } else if (!args[3]) {
            return message.channel.send("You are missing your \`longitude\` of \`B\`.")
        } else if (isNaN(args[0])) {
            return message.channel.send("Please enter a number as your \`latitude\` for \`A\`.")
        } else if (isNaN(args[1])) {
            return message.channel.send("Please enter a number as your \`longitude\` for \`A\`.")
        } else if (isNaN(args[2])) {
            return message.channel.send("Please enter a number as your \`latitude\` for \`B\`.")
        } else if (isNaN(args[3])) {
            return message.channel.send("Please enter a number as your \`longitude\` for \`B\`.")
        }

        const a = { latitude: args[0], longitude: args[1] }
        const b = { latitude: args[2], longitude: args[3] }
        const haver = haversine(a, b)
        const haverround = Math.round((haver + Number.EPSILON) * 100) / 100

        const haverroundkm = haverround / 1000
        const haverroundkmr = Math.round((haverroundkm + Number.EPSILON) * 100) / 100

        const haverroundmi = haverround * 0.0006213712
        const haverroundmir = Math.round((haverroundmi + Number.EPSILON) * 100) / 100

        const haverroundnm = haverround * 0.0005399568
        const haverroundnmr = Math.round((haverroundnm + Number.EPSILON) * 100) / 100

        const haverroundyd = haverround * 1.093613
        const haverroundydr = Math.round((haverroundyd + Number.EPSILON) * 100) / 100

        const haverroundft = haverround * 3.28084
        const haverroundftr = Math.round((haverroundft + Number.EPSILON) * 100) / 100

        const haverroundm = haver * 1
        const haverroundmr = Math.round((haverroundm + Number.EPSILON) * 100) / 100

        const newEmbed = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titlehaversine)
            .setImage(config.embed.embedimage)
            .setDescription(config.embeds.descriptionhaversine)
            .addFields(
                {
                    name: config.embeds.namehaversine1,
                    value: `Latitude: ${args[0]}, Latitude ${args[1]}.`,
                },
                {
                    name: config.embeds.namehaversine2,
                    value: `Latitude: ${args[2]}, Longitude ${args[3]}.`,
                },
                {
                    name: config.embeds.namehaversine3,
                    value: `\`${haverroundkmr}\` Kilometers.`
                },
                {
                    name: config.embeds.namehaversine4,
                    value: `\`${haverroundmir}\` Miles.`
                },
                {
                    name: config.embeds.namehaversine5,
                    value: `\`${haverroundnmr}\` Nautical Miles.`
                },
                {
                    name: config.embeds.namehaversine6,
                    value: `\`${haverroundydr}\` Yards.`
                },
                {
                    name: config.embeds.namehaversine7,
                    value: `\`${haverroundftr}\` Feet.`
                },
                {
                    name: config.embeds.namehaversine8,
                    value: `\`${haverroundmr}\` Meters.`
                }
            )
            .setFooter(config.embed.embedfooter);

        message.channel.send(newEmbed);
    },
};