module.exports = {
    name: 'balance',
    permissions: ["SEND_MESSAGES"],
    description: "This is a balance command.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, your current wallet balance is \`${profileData.coins}\` and your bank account balance is \`${profileData.bank}\`.`);
    }
}