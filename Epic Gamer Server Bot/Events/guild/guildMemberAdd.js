const profileModel = require("../../models/profileSchema");
const message = require("./message");

module.exports = async (client, Discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    name: message.author.id,
    coins: 0,
    bank: 0,
    level: 0,
  });
  profile.save();
};