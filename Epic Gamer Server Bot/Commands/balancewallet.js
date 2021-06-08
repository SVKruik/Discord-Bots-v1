module.exports = {
    name: 'balwallet',
    permissions: ["SEND_MESSAGES"],
    description: "This command shows your wallet balance.",
    execute(message, args, cmd, client){
        message.channel.send(`This is your current wallet balance : \`${profileData.coins}\`.`);
    }
}
  