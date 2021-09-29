const profileModel = require("../../models/profileSchema");
const message = require("./message");

module.exports = async (client, Discord, member) => {
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
};