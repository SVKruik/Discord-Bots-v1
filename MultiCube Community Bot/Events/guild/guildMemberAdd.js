const profileModel = require("../../models/profileSchema");

module.exports = async (client, Discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 0,
    bank: 0,
    level: 0,
    name: member.username,
  });
  profile.save();
};