require("console-stamp")(console, "[HH:MM]");
const ms = require("ms");
const profileModel = require("../models/profileSchema");
const util = require("minecraft-server-util");
var Scraper = require("images-scraper");
const math = require("mathjs");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const queue = new Map();
const fs = require("fs");
const commands = fs.readdirSync("../Commands").length;
const version = require("../package.json").version;
const days = Math.floor(client.uptime / 86400000);
const hours = Math.floor(client.uptime / 3600000) % 24;
const minutes = Math.floor(client.uptime / 60000) % 60;
const seconds = Math.floor(client.uptime / 1000) % 60;

const B = 0;
const I = ["ADMINISTRATOR"];
exports.test = {
  testmessage: "If you see this, something you are trying worked I guess.",
  testaliases: ["test1", "test2"],
  testcooldown: B,
  testpermission: I,
};

exports.commandclear = {
    commandclearmax: 50,
    commandclearmin: 1,
}

exports.embeds = {
  //Titles
  titlebotstats: "Bot Statistics",
  titledonate: "Donate",
  titleembedtemplate: "Bot Template",
  titleevent: "Choose a team to play on!",
  titlegithub: "GitHub Repository",
  titlehelp: "Support",
  titlemcserver: "Minecraft Server Statistics",
  titleprofile: "Server Profile",
  titlerules: "House Rules",
  titleserverip: "Server IP",

  //Names
  namebotstats1: "Uptime:", // Botstats
  namebotstats2: "API Ping:",
  namebotstats3: "Bot Ping:",
  namebotstats4: "Server ID:",
  namebotstats5: "Commands:",
  namebotstats6: "Bot Version:",
  namebotstats7: "Bot Owner",
  namedonate1: "Donate Link:", // Donate
  namedonate2: "Memberships:",
  nameembedtemplate1: "Name: A", // Embed Template
  nameembedtemplate1: "Name: B",
  namegithub1: "Main link:", // GitHub
  namegithub2: "---",
  namegithub3: "More links:",
  namegithub4: "Child Servers:",
  namegithub5: "Issues:",
  namegithub6: "Discussions:",
  namemcserver1: "server IP:",
  namemcserver2: "Online Players:",
  namemcserver3: "Max Players:",
  namemcserver4: "Game Version:",
  namemcserver5: "Port:",
  namemcserver6: "Mods:",
  nameprofile1: "---", // Profile
  nameprofile2: "Name:",
  nameprofile3: "Tag:",
  nameprofile4: "userID",
  nameprofile5: "serverID",
  nameprofile6: "---",
  nameprofile7: "Coins:",
  nameprofile8: "Bank:",
  nameprofile9: "---",
  nameprofile10: "Level:",
  nameprofile11: "Experience:",
  namerules1: "Rule 1:",
  namerules2: "Rule 2:",
  namerules3: "Rule 3:",
  namerules4: "Rule 4:",
  namerules5: "Rule 5:",
  namerules6: "Rule 6:",
  nameserverip1: "Server IP:",
  nameserverip2: "Game Version:",
  nameserverip3: "Mods:",

  //Values
  valuebotstats1: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`, // Botstats
  valuebotstats2: `${Math.round(client.ws.ping)} ms`,
  valuebotstats3: `${Date.now() - message.createdTimestamp} ms`,
  valuebotstats4: `${message.guild.id}`,
  valuebotstats5: `${commands}`,
  valuebotstats6: `${version}`,
  valuebotstats7: `<@422704748488163332>`,
  valuedonate1: "https://ko-fi.com/multicubecommunity", // Donate
  valuedonate2: "https://ko-fi.com/multicubecommunity/tiers",
  valueembedtemplate1: "value: X", // Embed Template
  valueembedtemplate1: "value: Y",
  valuegithub1: "https://github.com/PuffinKwadraat/MultiCube-Public", // GitHub
  valuegithub2: "---",
  valuegithub3: "More links:",
  valuegithub4: "Child Servers:",
  valuegithub5: "Issues:",
  valuegithub6: "Discussions:",
  valuemcserver1: "server IP:",
  valuemcserver2: "Online Players:",
  valuemcserver3: "Max Players:",
  valuemcserver4: "Game Version:",
  valuemcserver5: "Port:",
  valuemcserver6: "Mods:",
  valueprofile1: "---", // Profile
  valueprofile2: "value:",
  valueprofile3: "Tag:",
  valueprofile4: "userID",
  valueprofile5: "serverID",
  valueprofile6: "---",
  valueprofile7: "Coins:",
  valueprofile8: "Bank:",
  valueprofile9: "---",
  valueprofile10: "Level:",
  valueprofile11: "Experience:",
  valuerules1: "Rule 1:",
  valuerules2: "Rule 2:",
  valuerules3: "Rule 3:",
  valuerules4: "Rule 4:",
  valuerules5: "Rule 5:",
  valuerules6: "Rule 6:",
  valueserverip1: "Server IP:",
  valueserverip2: "Game Version:",
  valueserverip3: "Mods:",
}

exports.base = {
  baseprefix: "$",
  basecolor: "#76b3e1",
  basewalletdefault: "0",
  basebankdefault: "0",
  baseleveldefault: "0",
  baseexperiencedefault: "0",
  basewelcomechannelid: "850753468927049798",
  baseimagechannelid: "934093861079380018",
  basemembercounterhz: '1500000',
  baseguildid: "820580469757313025",
  basemembercounterchannelid: "873925840096886784",
  baseeventchannelid: "896369888103366716",
  baserolecolorchannelid: "910547872439734292",
  baseticketgroupid: "852178171305525258",
  baseticketdeletetime: "5000",
  basemainrole: "Member",
  basemuterole: "Muted",
  baseblindrole: "Blinded",
};

exports.embed = {
  embedfooter: "Stats and Bot provided by Complex.",
  embedimage: "https://i.imgur.com/neCyTDH.png",
  embedlink: "https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers",
};

exports.aliases = {
  // Command Aliases
  aliasesban: [], // Ban
  aliasesblind: [], // Blind
  aliasesclear: ["bulkdelete", "bulkdel"], // Clear
  aliaseskick: [], // Kick
  aliasesmute: [], // Mute
  aliasesping: ["pong"], // Ping
  aliasesunblind: [], // Unblind
  aliasesunmute: [], //Unmute
  aliasesuptime: [], // Uptime
  aliasescolor: ["clr", "colour"], // Color
  aliasescolorremove: ["clrremove", "colourremove", "clrrmv"], // Colorremove
  aliasesrolecolor1: ["rlclr1"], // Rolecolor1
  aliasesrolecolor2: ["rlclr2"], // Rolecolor2
  aliasesrolecolor3: ["rlclr3"], // Rolecolor3
  aliasesbalance: ["bal", "baltot", "baltotal", "showbal"], // Balance
  aliasesbalancebank: ["balbank"], // Balancebank
  aliasesbalancewallet: ["balwallet", "balwal"], // Balancewallet
  aliasesdailyreward: ["dlyrwd", "dr"], // Dailyreward
  aliasesdeposit: ["dep", "depo"], // Deposit
  aliasesgivebank: [], // Givebank
  aliasesgivefulleco: ["givebankwal", "givewalbank"], // Givebankandwallet
  aliasesgivewallet: ["givewal"], // Givewallet
  aliasesminusbank: ["minbank"], // Minusbank
  aliasesminusfulleco: [
    "minusbankwal",
    "minuswalbank",
    "minbankwal",
    "minwalbank",
  ], // Minusbankandwallet
  aliasesminuswallet: ["minwal"], // Minuswallet
  aliasessearch: ["srch"], // Search
  aliasessetbank: [], // Setbank
  aliasessetfulleco: [
    "setwalbank",
    "setwalletbank",
    "setbankwallet",
    "setbankwal",
  ], // Setbankandwallet
  aliasessetwallet: ["setwal"], // Setwallet
  aliaseswithdraw: ["with", "wit"], // Withdraw
  aliasesexperience: ["exp", "xp"], // Experience
  aliasesgiveexperience: ["givexp", "giveexp"], // Giveexperience
  aliasesgivefulllevel: [
    "givelvlxp",
    "givexplvl",
    "givelvlexp",
    "giveexplvl",
    "givefullevel",
  ], // Givelevelandexperience
  aliasesgivelevel: ["givelvl"], // Givelevel
  aliaseslevel: ["lvl"], // Level
  aliaseslevelstats: ["levelstats", "levelstat", "lvlstat", "lvlstats"], // levelstatistics
  aliasesminusexperience: ["minusexp", "minusxp", "minxp", "minexp"], // Minusexperience
  aliasesminusfulllevel: [
    "minuslvlxp",
    "minusxplvl",
    "minusexplvl",
    "minuslvlexp",
    "minlvlxp",
    "minxplvl",
    "minexplvl",
    "minlvlexp",
    "minusfullevel",
  ], // Minuslevelandexperience
  aliasesminuslevel: ["minuslvl", "minlvl"], // Minuslevel
  aliasessetexperience: ["setxp", "setexp"], // Setexperience
  aliasessetfulllevel: ["setlvlexp", "setlvlxp", "setfullevel"], // Setlevelandexperience
  aliasessetlevel: ["setlvl"], // Setlevel
  aliasesdonate: ["dnte"], // Donate
  aliasesembedtemplate: ["mbdtemp"], // Embedtemplate
  aliasesevent: [], // Event
  aliasesgithub: ["gh"], // Github
  aliaseshelpst1: ["support"], // Help
  aliasesmcserver: ["mc", "mccheck", "mcserver"], // Minecraftserver
  aliasesprofile: ["prof"], // Profile
  aliasesrules: ["rule", "rl"], // Rules
  aliasesserverip: ["server"], // Serverip
  aliasesbotstats: ["botstat", "botstats"], // Botstatistics
  aliasesleave: ["musicstop", "stop"], // Leave
  aliasesplay: ["music", "song"], // Play
  aliasesapply: ["form"], // Apply
  aliasescommandtemplate: ["cmdtemp"], // Commandtemplate
  aliasesflipacoinen: ["fac"], // Flipacoin
  aliasesflipacoinnl: ["facnl", "kopmunt"], // Kopofmunt
  aliasesimage: ["img"], // Image
  aliasesmath: ["math", "calc", "calculate"], // Math
  aliasesrpsen: ["rps"], //Rock Paper Scissor
  aliasesrpsnl: ["rpsnl", "spsnl", "sps"], //Steen Papier Schaar
  aliasessrpsen: ["srps"], // Stake Rock Paper Scissor
  aliasesticket: ["tkt"], // Ticket
  aliasescirkelvergelijking: ["circle"], // Cirkel
  aliaseshoeklijn: ["hkli"], // Hoeklijn
  aliasespunttotlijn: ["lijntotpunt", "puntlijn", "lijnpunt"], // Punttotlijn
  aliasessubstitutie: ["substitueren", "subst"], // Substitutie
  aliasestitreernormaal: ["titnorm", "titnormaal"], // Titratienormaal
  aliasestitreerverdunning: ["titverdun", "titverdunning"], // Titratieverdunning
};

const A = 84000; // Daily
// const B = 0; // Admin. Line 11  ^
const C = 10; // Music             |
const D = 300; // Extreme
const E = 60; // Hard
const F = 30; // Medium
const G = 10; // Soft
const H = 0; // No cooldown
exports.cooldown = {
  cooldownban: B,
  cooldownblind: B,
  cooldownclear: B,
  cooldownkick: B,
  cooldownmute: B,
  cooldownping: B,
  cooldownunblind: B,
  cooldownunmute: B,
  cooldownuptime: B,
  cooldowncolor: B,
  cooldowncolorremove: B,
  cooldownrolecolor1: B,
  cooldownrolecolor2: B,
  cooldownrolecolor3: B,
  cooldownbalance: G,
  cooldownbalancebank: G,
  cooldownbalancewallet: G,
  cooldowndailyreward: A,
  cooldowndeposit: G,
  cooldowngivebank: G,
  cooldowngivefulleco: B,
  cooldowngivewallet: B,
  cooldownminusbank: B,
  cooldownminusfulleco: B,
  cooldownminuswallet: B,
  cooldownsearch: A,
  cooldownsetbank: B,
  cooldownsetfulleco: B,
  cooldownsetwallet: B,
  cooldownwithdraw: E,
  cooldownexperience: G,
  cooldowngiveexperience: B,
  cooldowngivefulllevel: B,
  cooldowngivelevel: B,
  cooldownlevel: G,
  cooldownlevelstats: G,
  cooldownminusexperience: B,
  cooldownminusfulllevel: B,
  cooldownminuslevel: B,
  cooldownsetexperience: B,
  cooldownsetfulllevel: B,
  cooldownsetlevel: B,
  cooldowndonate: G,
  cooldownembedtemplate: B,
  cooldownevent: B,
  cooldowngithub: E,
  cooldownhelpst1: E,
  cooldownmcserver: E,
  cooldownprofile: E,
  cooldownrules: F,
  cooldownserverip: E,
  cooldownbotstats: E,
  cooldownleave: C,
  cooldownplay: C,
  cooldownapply: E,
  cooldowncommandtemplate: B,
  cooldownflipacoinen: H,
  cooldownflipacoinnl: H,
  cooldownimage: G,                               // Temporary
  cooldownmath: G,
  cooldownrpsen: H,
  cooldownrpsnl: H,
  cooldownsrpsen: H,
  cooldownticket: D,
  cooldowncirkelvergelijking: E,
  cooldownhoeklijn: E,
  cooldownpunttotlijn: E,
  cooldownsubstitutie: E,
  cooldowntitreernormaal: E,
  cooldowntitreerverdunning: E,
};

exports.descriptions = {
  // Not implemented.
  // Command Descriptions
  descriptionban: "Ban a naughty Member",
  descriptionblind: "Completly blind a member. Target cannot do anything.",
  descriptionclear: "Bulk delete messages.",
  descriptionkick:
    "Kick a irritating person, that you don't hate enough to ban.",
  descriptionmute:
    "This silences spamming or naughty people. Can only read stuff.",
  descriptionping:
    "This silences spamming or naughty people. Can only read stuff.",
  descriptionunblind: "This command unblinds members.",
  descriptionunmute: "This command unmutes members.",
  descriptionuptime: "Check the uptime of the bot.",
  descriptioncolor: "Choose a color by ID or name.",
  descriptioncolorremove: "Remove a color role by ID or name.",
  descriptionrolecolor1: "Role color choose page 1.",
  descriptionrolecolor2: "Role color choose page 2.",
  descriptionrolecolor3: "Role color choose page 3.",
  descriptionbalance: "Display both your wallet and bank balance.",
  descriptionbalancebank: "Display your bank account balance.",
  descriptionbalancewallet: "Display your wallet balance.",
  descriptiondailyreward: "Random amount of coins, as a daily reward.",
  descriptiondeposit: "Deposit coins from your wallet to your bank.",
  descriptiongivebank: "Increase the bank account balance of a member.",
  descriptiongivefulleco:
    "Increase the balance of both the bank and wallet account.",
  descriptiongivewallet: "Increase the balance of a member.",
  descriptionminusbank: "Decreases the balance of the bank account.",
  descriptionminusfulleco:
    "Decreases the balance of both the wallet and the bank account.",
  descriptionminuswallet: "Decreases the balance of the wallet.",
  descriptionsearch: "Search for some coins. Kinda a second daily reward.",
  descriptionsetbank: "Reset the balance of a member.",
  descriptionsetwallet: "Reset the balance of both accounts of a member.",
  descriptionsetfulleco: "Reset the balance of a member.",
  descriptionwithdraw: "Transfer coins from your bank account to your wallet.",
  descriptionexperience: "Displays your current server experience.",
  descriptiongiveexperience: "Give a player extra levels.",
  descriptiongivefulllevel: "Give a player extra levels and experience.",
  descriptiongivelevel: "Give a player extra levels.",
  descriptionlevel: "Displays your current server level.",
  descriptionlevelstats: "Displays your current server level and experience.",
  descriptionminusexperience: "Decreases the amount of experience.",
  descriptionminusfulllevel:
    "Decreases the amount of both your experience and levels.",
  descriptionminuslevel: "Decreases the amount of levels.",
  descriptionsetexperience: "Reset the amount of experience of a member.",
  descriptionsetfulllevel: "Reset the level and experience of a member.",
  descriptionsetlevel: "Reset the level of a member.",
  descriptiondonate: "Support our project by donating to us.",
  descriptionembedtemplate:
    "Embed template for bot developers. Isn't meant to be used.",
  descriptionevent: "Set up a event with teams.",
  descriptiongithub: "Displays all import links to our GitHub repository.",
  descriptionhelpst1: "Advanced Help - Stage 1",
  descriptionmcserver: "Displays some Minecraft server statistics.",
  descriptionprofile: "Displays all information we have about you.",
  descriptionrules: "Displays an embed with our active server rules.",
  descriptionserverip: "Display the server IP and information for MultiCube.",
  descriptionbotstats: "Displays all stats of the bot.",
  descriptionleave: "Stop the music, and let the bot leave the call.",
  descriptionplay:
    "Music Bot via YouTube links. You must be in a call for it to work.",
  descriptionapply:
    "Sends you the link where you can apply to one of our roles/ranks.",
  descriptioncommandtemplate:
    "Command template for bot developers. Isn't meant to be used.",
  descriptionflipacoinen: "Flip a coin!",
  descriptionflipacoinnl: "Kop of munt!", // Dutch version of Flip a Coin. Same command, different language.
  descriptionimage: "This sends the best google result for an image.",
  descriptionmath: "Basic calculation.",
  descriptionrpsnl: "Speel steen, papier, schaar met de bot!",
  descriptionrpsnl: "Play some rock, paper, scissor with the bot!",
  descriptionticket: "Open a support ticket!",
  descriptioncirkelvergelijking: "Calculate a circle equation.",
  descriptionhoeklijn:
    "calculate the angle between 2 lines crossing each other.",
  descriptionpunttotlijn: "Calculate distance between a point and a line.",
  descriptionsubstitutie: "Tutorial thing on how to substitute.",
  descriptiontitreernormaal: "Calculate some science math.",
  descriptiontitreerverdunning: "Calculate some advanced science math.",
};

// const I = "ADMINISTRATOR"; // Permission for admin commands. Line:12 ^
const J = ["SEND_MESSAGES"]; // Permission for general commands.          |
exports.permissions = {
  // Command Permissions
  permissionban: I,
  permissionblind: I,
  permissionclear: I,
  permissionkick: I,
  permissionmute: I,
  permissionping: I,
  permissionunblind: I,
  permissionunmute: I,
  permissionuptime: I,
  permissioncolor: J,
  permissioncolorremove: J,
  permissionrolecolor1: I,
  permissionrolecolor2: I,
  permissionrolecolor3: I,
  permissionbalance: J,
  permissionbalancebank: J,
  permissionbalancewallet: J,
  permissiondailyreward: J,
  permissiondeposit: J,
  permissiongivebank: I,
  permissiongivefulleco: I,
  permissiongivewallet: I,
  permissionminusbank: I,
  permissionminusfulleco: I,
  permissionminuswallet: I,
  permissionsearch: J,
  permissionsetbank: I,
  permissionsetfulleco: I,
  permissionsetwallet: I,
  permissionwithdraw: J,
  permissionexperience: J,
  permissiongiveexperience: I,
  permissiongivefulllevel: I,
  permissiongivelevel: I,
  permissionlevel: J,
  permissionlevelstats: J,
  permissionminusexperience: I,
  permissionminusfulllevel: I,
  permissionminuslevel: I,
  permissionsetexperience: I,
  permissionsetfulllevel: I,
  permissionsetlevel: I,
  permissiondonate: J,
  permissionembedtemplate: I,
  permissionevent: I,
  permissiongithub: J,
  permissionhelpst1: J,
  permissionmcserver: J,
  permissionprofile: J,
  permissionrules: J,
  permissionserverip: J,
  permissionbotstats: J,
  permissionleave: J,
  permissionplay: J,
  permissionapply: J,
  permissioncommandtemplate: J,
  permissionflipacoinen: J,
  permissionflipacoinnl: J,
  permissionimage: J,
  permissionmath: J,
  permissionrpsen: J,
  permissionrpsnl: J,
  permissionsrpsen: J,
  permissionticket: J,
  permissioncirkelvergelijking: J,
  permissionhoeklijn: J,
  permissionpunttotlijn: J,
  permissionsubstitutie: J,
  permissiontitreernormaal: J,
  permissiontitreerverdunning: J,
};

  // Message Dependencies
// const banrequire = require("../Commands/admin-ban.js");
// const { target } = banrequire;
// const { username } = banrequire;
// const { reason1 } = banrequire;
// const { reason2 } = banrequire;
// const { memberTarget } = banrequire;

// const blindrequire = require("../Commands/admin-blind.js");
// const clearrequire = require("../Commands/admin-clear.js");
// const kickrequire = require("../Commands/admin-kick.js");
// const muterequire = require("../Commands/admin-mute.js");
// const pingrequire = require("../Commands/admin-ping.js");
// const unblindrequire = require("../Commands/admin-unblind.js");
// const unmuterequire = require("../Commands/admin-unmute.js");
// const uptimerequire = require("../Commands/admin-uptime.js");
// const rolecolor1require = require("../Commands/cos-rolecolor1.js");
// const rolecolor2require = require("../Commands/cos-rolecolor2.js");
// const rolecolor3require = require("../Commands/cos-rolecolor3.js");
// const balancerequire = require("../Commands/eco-balance.js");
// const balancebankrequire = require("../Commands/eco-balancebank");
// const balancewalletrequire = require("../Commands/eco-balancewallet.js");
// const dailyrewardrequire = require("../Commands/eco-dailyreward.js");
// const depositrequire = require("../Commands/eco-deposit.js");
// const givebankrequire = require("../Commands/eco-givebank.js");

exports.basemessages = {
  // General Messages
  messagesfinderror: "Could not find the specified variable.",
  messagesvcrequired: "You need to be in a voice channel in order to use this command.",
  messagesmembermention: "You need to mention someone to execute this command.",
  messagesaccountmissing: "This user does not have an account in our database.",
  messageserror: "There was an error sending the command.",
  messagesgreaternegaone: "Amount must be larger then \`-1\`",
  messagesgreaterone: "Amount must be greater then \`0\`",
  messagescoinsmissing: "You do not have that amount of coins to perform this command.",
  messagesrealnumber: "Please enter a real number.",
  messagesamountmissing: "You are missing the amount to clear."
}

// 9ban : "",
// 9blind : "",
// 9clear : "",
// 9kick : "",
// 9mute : "",
// 9ping : "",
// 9unblind : "",
// 9unmute : "",
// 9uptime : "",
// 9rolecolor1 : "",
// 9rolecolor2 : "",
// 9rolecolor3 : "",
// 9balance : "",
// 9balancebank : "",
// 9balancewallet : "",
// 9dailyreward : "",
// 9deposit : "",
// 9givebank : "",
// 9givefulleco : "",
// 9givewallet : "",
// 9minusbank : "",
// 9minusfulleco : "",
// 9minuswallet : "",
// 9search : "",
// 9setbank : "",
// 9setfulleco : "",
// 9setwallet : "",
// 9withdraw : "",
// 9experience : "",
// 9giveexperience : "",
// 9givefulllevel : "",
// 9givelevel : "",
// 9level : "",
// 9levelstats : "",
// 9minusexperience : "",
// 9minusfulllevel : "",
// 9minuslevel : "",
// 9setexperience : "",
// 9setfulllevel : "",
// 9setlevel : "",
// 9donate : "",
// 9embedtemplate : "",
// 9event : "",
// 9github : "",
// 9helpst1 : "",
// 9mcserver : "",
// 9profile : "",
// 9rules : "",
// 9serverip : "",
// 9botstats : "",
// 9leave : "",
// 9play : "",
// 9apply : "",
// 9commandtemplate : "",
// 9flipacoinen : "",
// 9flipacoinnl : "",
// 9image : "",
// 9math : "",
// 9ticket : "",
// 9cirkelvergelijking : "",
// 9hoeklijn : "",
// 9punttotlijn : "",
// 9substitutie : "",
// 9titreernormaal : "",
// 9titreerverdunning : "",
