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
const version = require("../package.json").version;

exports.base = {
  basecolor: "#76b3e1",
  baseguildid: "820580469757313025",

  basewalletdefault: "0",
  basebankdefault: "0",
  baseleveldefault: "0",
  baseexperiencedefault: "0",

  basewelcomechannelid: "850753468927049798",
  baseannouncementschannelid: "944956465733586974",

  basemusicroleid: "940616347900076073",

  basemusicchannelid: "942842677932720148",
  basecolorchannelid: "942842691828457512",
  baseimagechannelid: "942380437148409916",
  basesuggechannelid: "944949197612924928",
  baseeventchannelid: "942438431282323487",

  basebottestingthreechannelid: "944963774157299814",

  basemembercounterhz: '1500000',
  basemembercounterchannelid: "873925840096886784",

  baseticketgroupid: "852178171305525258",
  baseticketdeletetime: "5000", //ms -> sec * 1000

  basemuterole: "851141747424886794",
  baseblindrole: "852934692696358952",
};

exports.colorcost = { // 16 types
  metallic: 500,
  exotic: 500,
  plusexotic: 650,

  base: 150,
  light: 300,
  medium: 300,
  dark: 250,

  really: 350,
  bright: 300,
  deep: 350,

  tr: 200,
  pastel: 250,
  earth: 450,
  sand: 350,
  reddish: 350,
  extra: 400,
}

exports.embed = {
  embedfooter: "Statistics and Bot provided by Complex.",
  embedimage: "https://i.imgur.com/neCyTDH.png",
  embedlink: "https://github.com/PuffinKwadraat/MultiCube-Public",
};

exports.basemessages = {
  // General Messages
  messagesfinderror: "Could not find the specified variable.",
  messagesvcrequired: "You need to be in a voice channel in order to use this command.",
  messagesmembermention: "You need to mention someone to execute this command.",
  messagesaccountmissing: "This user does not have an account in our database.",
  messageserror: "There was an error sending the command.",
  messagesgreaternegaone: "Amount must be larger than \`-1\`.",
  messagesgreaterone: "Amount must be greater than \`0\`.",
  messagescoinsmissing: "You do not have that amount of coins to perform this command.",
  messagesrealnumber: "Please enter a real number.",
  messagesamountmissing: "You are missing the amount to clear.",
  messageemojierr: "There was an error with the emoji.",
}

exports.commandclear = {
  commandclearmissing: "You are missing the amount that you want to clear!",
  commandclearmax: 50,
  commandclearmin: 1,
}

exports.commandsearch = {
  commandsearchtimestop: "You have ran out of time!",
}

exports.commandevent = {
  teamoneid: "851901208016846848", // Blue
  teamtwoid: "851900697511329854", // Green
  teamthreeid: "851900638308728893", // Red
  teamfourid: "851901124973428786", // Yellow
}

exports.commandmcserver = {
  commandmcserverip: "Please enter a valid Minecraft server IP!",
  commandmcserverport: "Please enter a valid Minecraft server port!",
}

exports.commandleave = {
  commandleavemsg: "Leaving the voice channel."
}

exports.commandplay = {
  commandplayurl: "You are missing the link to the music video!",
  commandplayconnecterr: "There was an error while connecting to your voice channel!",
  commandplayskip: "Skipped the current song!",
  commandplaystop: "Stopped the current song!",
  commandplayqueueempty: "The music queue is empty!",
}

exports.commandapply = {
  commandapply: "If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8",
}

exports.commandcommandtemplate = {
  commandcommandtemplate: "Template Message",
}

exports.commandimage = {
  commandimagemissing: "What image would you like to look up?",
}

exports.commandticket = {
  commandticketpending: "Thank you for contacting support, we will be right with you!",
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
  titleserverip: "MultiCube Community",
  titlehaversine: "GPS Coordinate Calculation",
  titlecircle: "Cirkel Vergelijking",
  titlehoeklijn: "Hoek Tussen 2 Lijnen",
  titlepuntlijn: "Afstand Tussen Punt En Lijn",
  titlesubstitutie: "Substitutie Vergelijking",
  titletitreernormaal: "Titreer Berekening",
  titletitreerverdunning: "Titreer Verdunning Berekening",

  //Descriptions
  descriptionbotstats: "These are my current stats.",
  descriptiondonate: "Support our project by donating to us! Your funds will be used to improve our project. You can also help fund new hardware/software we need.",
  descriptionembedtemplate: "Template",
  descriptionevent: "Choosing a team will allow you to interact with your teammates while in a event! When a event starts with for example Bed Wars, you can choose your team here. Be aware though that teams will be balanced, and your pick is not always available.",
  descriptiongithub: "This is our GitHub repository. You can find a lot of information about anything there, so check it out!",
  descriptionhelp: "What topic can I help you with?",
  descriptionmcserver: "Here is some data about the server you asked for.",
  descriptionprofile: "Here is the data we have stored about you.",
  descriptionrules: "These are our house rules.",
  descriptionserverip: "Here is the Server IP for our Minecraft server, MultiCube.",
  descriptionhaversine: "Calculate the distance between two GPS coordinates using the Haversine Formula.",
  descriptioncircle: "Een cirkelvergelijking oplossen.",
  descriptionhoeklijn: "De hoek tussen 2 lijnen berekenen.",
  descriptionpuntlijn: "De afstand tussen een punt en een lijn berekenen.",
  descriptionsubstitutie: "Een substitutie vergelijking oplossen.",
  descriptiontitreernormaal: "Een normale titreer berekening maken.",
  descriptiontitreerverdunning: "Een titreer berekening met verdunning maken.",

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
  nameembedtemplate2: "Name: B",
  namegithub1: "Main link:", // GitHub
  namegithub2: "---",
  namegithub3: "Child Servers:",
  namegithub4: "Issues:",
  namegithub5: "Update Log:",
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
  nameprofile12: "---",
  nameprofile13: "Document ID:",
  nameprofile14: "Document Version:",
  namerules1: "Rule 1:",
  namerules2: "Rule 2:",
  namerules3: "Rule 3:",
  namerules4: "Rule 4:",
  namerules5: "Rule 5:",
  nameserverip1: "Server IP:",
  nameserverip2: "Game Version:",
  nameserverip3: "Mods:",
  namehaversine1: "Your A:",
  namehaversine2: "Your B:",
  namehaversine3: "Distances:",
  namehaversine4: "> **------**",
  namehaversine5: "> **------**",
  namehaversine6: "> **------**",
  namehaversine7: "> **------**",
  namehaversine8: "> **------**",
  namesuggestions1: "**New Suggestion:**",

  //Values
  // valuebotstats1: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`, // Botstats
  // valuebotstats2: `${Math.round(client.ws.ping)} ms`,
  // valuebotstats3: `${Date.now() - message.createdTimestamp} ms`,
  // valuebotstats4: `${message.guild.id}`,
  // valuebotstats5: `${commands}`,
  valuebotstats6: `${version}`,
  valuebotstats7: `<@422704748488163332>`,
  valuedonate1: "https://ko-fi.com/multicubecommunity", // Donate
  valuedonate2: "https://ko-fi.com/multicubecommunity/tiers",
  valueembedtemplate1: "value: X", // Embed Template
  valueembedtemplate2: "value: Y",
  valuegithub1: "https://github.com/PuffinKwadraat/MultiCube-Public", // GitHub
  valuegithub2: "More links:",
  valuegithub3: "https://github.com/PuffinKwadraat/MultiCube-Public/tree/main/Minecraft%20Servers/Child%20Servers",
  valuegithub4: "https://github.com/PuffinKwadraat/MultiCube-Public/issues",
  valuegithub5: "https://github.com/PuffinKwadraat/MultiCube-Public/blob/main/Update%20Log.md",
  valueprofile1: "> **General:**", // Profile
  // valueprofile2: `${message.author.username}`,
  // valueprofile3: `#${tag}`,
  // valueprofile4: `${profileData.userID}`,
  // valueprofile5: `${profileData.serverID}`,
  valueprofile6: "> **Economy:**",
  // valueprofile7: `${profileData.coins}`,
  // valueprofile8: `${profileData.bank}`,
  valueprofile9: "> **Level:**",
  // valueprofile10: `${profileData.level}`,
  // valueprofile11: `${profileData.experience}`,
  valueprofile12: "> **Technical:**",
  // valueprofile13: `${profileData._id}`,
  // valueprofile14: `${profileData.__v}`,
  valuerules1: "Treat everyone with respect.",
  valuerules2: "Do not spam.",
  valuerules3: "Do not advertise yourself.",
  valuerules4: "Do not post NSFW or inappropriate content.",
  valuerules5: "Do not beg for a role/rank.",
  valueserverip1: "multicube.aternos.me",
  valueserverip2: "1.16.5",
  valueserverip3: "None",
  // valuehaversine1: `Latitude: ${args[0]}, Latitude ${args[1]}.`,
  // valuehaversine2: `Latitude: ${args[2]}, Longitude ${args[3]}.`,
  // valuehaversine3: `\`${haverroundkmr}\` kilometers.`,
  // valuehaversine4: `\`${haverroundmir}\` miles.`,
  // valuehaversine5: `\`${haverroundnmr}\` nautical miles.`,
  // valuehaversine6: `\`${haverroundydr}\` yards.`,
  // valuehaversine7: `\`${haverroundftr}\` feet.`,
  // valuehaversine8: `\`${haverroundmr}\` meters.`,
  // valuesuggestions1: `${messageArgs}`
}

exports.aliases = {
  // Command Aliases
  aliasesabannouncements: ["bigannouncement", "bigannounce", "bigann", "bannouncement", "bannounce", "banno"], // Big Announcement (dedicated channel)
  aliasesasannouncements: ["smallannouncement", "smallannounce", "smallann", "sannouncement", "sannounce", "sanno"], // Small Announcement (direct channel)
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
  aliasestemplatecommand: ["cmdtemp"], // Template Command
  aliasestemplateembed: ["mbdtemp"], // Template Embed
  aliasestestabannouncements: ["testbigannouncement", "testbigannounce", "testbigann", "testbannouncement", "testbannounce", "testbanno"], // Test Big Announcement
  aliasestestasannouncements: ["testsmallannouncement", "testsmallannounce", "testsmallann", "testsannouncement", "testsannounce", "testsanno"], // Test Small Announcement
  aliasestestsuggest: ["testsuggest", "testsuggestion", "tsuggest", "tsuggestion"], // Test Suggestions
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
  ], // Minus Full Eco
  aliasesminuswallet: ["minwal"], // Minus Wallet
  aliasessearch: ["srch"], // Search
  aliasessetbank: [], // Set Bank
  aliasessetfulleco: [
    "setwalbank",
    "setwalletbank",
    "setbankwallet",
    "setbankwal",
  ], // Set Full Eco
  aliasessetwallet: ["setwal"], // Set Wallet
  aliaseswithdraw: ["with", "wit"], // Withdraw
  aliasesexperience: ["exp", "xp"], // Experience
  aliasesgiveexperience: ["givexp", "giveexp"], // Give Experience
  aliasesgivefulllevel: [
    "givelvlxp",
    "givexplvl",
    "givelvlexp",
    "giveexplvl",
    "givefullevel",
  ], // Give Full Level
  aliasesgivelevel: ["givelvl"], // Give Level
  aliaseslevel: ["lvl"], // Level
  aliaseslevelstats: ["levelstats", "levelstat", "lvlstat", "lvlstats"], // Level Statistics
  aliasesminusexperience: ["minusexp", "minusxp", "minxp", "minexp"], // Minus Experience
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
  ], // Minus Full Level
  aliasesminuslevel: ["minuslvl", "minlvl"], // Minus Level
  aliasessetexperience: ["setxp", "setexp"], // Set Experience
  aliasessetfulllevel: ["setlvlexp", "setlvlxp", "setfullevel"], // Set Full Level
  aliasessetlevel: ["setlvl"], // Set Level
  aliasesdonate: ["dnte"], // Donate
  aliasesevent: [], // Event
  aliasesgithub: ["gh"], // Github
  aliaseshelpst1: ["support"], // Help
  aliasesmcserver: ["mc", "mccheck", "mcserver"], // Minecraft Server Stats
  aliasesprofile: ["prof"], // Profile
  aliasesrules: ["rule", "rl"], // Rules
  aliasesserverip: ["server"], // Server IP
  aliasesbotstats: ["botstat", "botstats"], // Bot Statistics
  aliasesleave: ["musicstop", "stop"], // Leave
  aliasesplay: ["music", "song"], // Play
  aliasesskip: ["jump"], // Skip
  aliasesstop: ["terminate"], // Stop
  aliasesapply: ["form"], // Apply
  aliasesdice: ["roll"], // Dice
  aliaseserrorcode: ["error", "errorcode", "errcode"], // Error Code
  aliasesflipacoinen: ["fac", "facen"], // Flip A Coin
  aliasesflipacoinnl: ["facnl", "kopmunt", "kom"], // Kop Of Munt
  aliaseshaversine: ["haver", "gps", "coordinates", "coords", "coord"], // Haversine
  aliasesimage: ["img"], // Image
  aliasesmath: ["math", "calc", "calculate"], // Math
  aliasesrpsen: ["rps"], // Rock Paper Scissor
  aliasesrpsnl: ["rpsnl", "spsnl", "sps"], //Steen Papier Schaar
  aliasessrpsen: ["srps"], // Stake Rock Paper Scissor
  aliasessuggestions: ["suggest", "suggestion"], // Suggestions
  aliasesticket: ["tkt"], // Ticket
  aliasescirkelvergelijking: ["circle"], // Cirkel
  aliaseshoeklijn: ["hkli"], // Hoek Lijn
  aliasespunttotlijn: ["lijntotpunt", "puntlijn", "lijnpunt"], // Punt Tot Lijn
  aliasessubstitutie: ["substitueren", "subst"], // Substitutie
  aliasestitreernormaal: ["titnorm", "titnormaal"], // Titratie Normaal
  aliasestitreerverdunning: ["titverdun", "titverdunning"], // Titratie Verdunning
};

const A = 84000; // Daily
const B = 0; // Admin
const C = 10; // Music
const D = 300; // Extreme
const E = 60; // Hard
const F = 30; // Medium
const G = 10; // Soft
const H = 0; // No cooldown
exports.cooldown = {
  cooldownannouncements: B,
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
  cooldowntemplatecommand: B,
  cooldowntemplateembed: B,
  cooldowntestannouncements: B,
  cooldowntestsuggest: B,
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
  cooldownbotstats: B,
  cooldowndonate: B,
  cooldownevent: B,
  cooldowngithub: B,
  cooldownhelpst1: E,
  cooldownmcserver: B,
  cooldownprofile: E,
  cooldownrules: B,
  cooldownserverip: B,
  cooldownleave: C,
  cooldownmusic: C, // All music cmds
  cooldownapply: E,
  cooldowndice: G,
  cooldownerrorcode: G,
  cooldownflipacoinen: H,
  cooldownflipacoinnl: H,
  cooldownhaversine: G,
  cooldownimage: G,
  cooldownmath: G,
  cooldownrpsen: H,
  cooldownrpsnl: H,
  cooldownsrpsen: H,
  cooldownsuggestions: F,
  cooldownticket: D,
  cooldowncirkelvergelijking: G,
  cooldownhoeklijn: G,
  cooldownpunttotlijn: G,
  cooldownsubstitutie: G,
  cooldowntitreernormaal: G,
  cooldowntitreerverdunning: G,
};

const I = ["ADMINISTRATOR"]; // Permission for admin commands.
const J = ["SEND_MESSAGES"]; // Permission for general commands.
exports.permissions = {
  // Command Permissions
  permissionannouncements: I,
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
  permissiontemplatecommand: I,
  permissiontemplateembed: I,
  permissiontestannouncements: I,
  permissiontestsuggest: I,
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
  permissionbotstats: I,
  permissiondonate: I,
  permissionevent: I,
  permissiongithub: I,
  permissionhelpst1: J,
  permissionmcserver: I,
  permissionprofile: J,
  permissionrules: I,
  permissionserverip: I,
  permissionleave: J,
  permissionmusic: J, // All music cmds
  permissionapply: J,
  permissiondice: J,
  permissionerrorcode: J,
  permissionflipacoinen: J,
  permissionflipacoinnl: J,
  permissionhaversine: J,
  permissionimage: J,
  permissionmath: J,
  permissionrpsen: J,
  permissionrpsnl: J,
  permissionsrpsen: J,
  permissionsuggestions: J,
  permissionticket: J,
  permissioncirkelvergelijking: J,
  permissionhoeklijn: J,
  permissionpunttotlijn: J,
  permissionsubstitutie: J,
  permissiontitreernormaal: J,
  permissiontitreerverdunning: J,
};
