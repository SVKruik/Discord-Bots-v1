module.exports = {
    name: 'balwallet',
    permissions: ["SEND_MESSAGES"],
    description: "This command shows your wallet balance.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, this is your current wallet balance : \`${profileData.coins}\`.`);
    }
}