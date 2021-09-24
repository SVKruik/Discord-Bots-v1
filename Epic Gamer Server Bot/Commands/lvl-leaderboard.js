const Levels = require ("discord-xp");

module.exports = {
    name: 'leaderboard',
    aliases: [],
    cooldown: process.env.ASMID,
    description: 'Displays the top 3 leveled users.',
    permissions: ["ADMINISTRATOR"],
    async execute(message, args, cmd, client, Discord) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 3);

        if (rawLeaderboard.length < 1) return RemotePlayback("No members in the leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
    },
}