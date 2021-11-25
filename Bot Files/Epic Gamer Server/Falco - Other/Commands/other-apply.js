module.exports = {
  name: "apply",
  aliases: [],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Shows the apply form.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(process.env.MSGAPPLY);
  },
};
