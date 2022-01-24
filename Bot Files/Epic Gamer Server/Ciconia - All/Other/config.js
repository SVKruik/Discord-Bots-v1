require("console-stamp")(console, "[HH:MM]");
const ms = require("ms");
const profileModel = require("../models/profileSchema");
const util = require("minecraft-server-util");
var Scraper = require("images-scraper");
const math = require("mathjs");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const queue = new Map();

const B = 0;
const I = ["ADMINISTRATOR"];
exports.test = {
  testmessage: "If you see this, something you are trying worked I guess.",
  testaliases: ["test1", "test2"],
  testcooldown: B,
  testpermission: I,
};

exports.base = {
  baseprefix: "$",
  basecolor: "#76b3e1",
  basewalletdefault: "0",
  basebankdefault: "0",
  baseleveldefault: "0",
  baseexperiencedefault: "0",
  basewelcomechannelid: "850753468927049798",
  basemembercounterhz: '90000',
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
  cooldownimage: B,                               // Temporary
  cooldownmath: G,
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
  permissionimage: I,
  permissionmath: J,
  permissionticket: J,
  permissioncirkelvergelijking: J,
  permissionhoeklijn: J,
  permissionpunttotlijn: J,
  permissionsubstitutie: J,
  permissiontitreernormaal: J,
  permissiontitreerverdunning: J,
};

exports.basemesssages = {
  // Command Messages
    // Base
  messagesfinderror: "Could not find the specified variable.",
  messagesvcrequired: "You need to be in a voice channel in order to use this command.",
  messagesmembermention: "You need to mention someone to execute this command.",
  messagesaccountmissing: "This user does not have an account in our database.",
  messagesgreaternegaone: "Set amount must be larger then \`-1\`",
  messagesgreaterone: "The reduce amount must be greater then \`0\`",
  messagescoinsmissing: "You do not have that amount of coins to perform this command.",
  messagesrealnumber: "Please enter a real number.",
    // Core files - message.js
  // invalidpermissions: `Invalid Permissions ${perm}`,
  // missingpermissions: `You are missing the following permissions to use this command: \`${invalidPerms}\``,
  // cooldownwait: `Please wait ${time_left.toFixed(1)} more seconds before using the specified command: \`${command.name}\`.`,
  // intersenderror: "There was an error trying to execute the specified command! Something ain't right. Check the console.",

  // messagesban1 : `${memberTarget.user.username} got banned because of: ${reason2}. This was done by ${message.author.username} using ${username}.`,
  // messageban2 : `<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason2}.`,
};

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
