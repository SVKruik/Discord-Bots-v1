// Het database profiel. Bij wijzigen de database resetten voor implementatie.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  bot: { type: Boolean },
  uni: { type: Number, unique: true },
  warnings: { type: Number},

  scrapexotic: { type: Number, default: 0 },
  scraplegendary: { type: Number, default: 0 },
  scrapepic: { type: Number, default: 0 },
  scraprare: { type: Number, default: 0 },
  scrapuncommon: { type: Number, default: 0 },
  scrapcommon: { type: Number, default: 0 },

  music1: { type: String, default: "https://www.youtube.com/" },
  music2: { type: String, default: "https://www.youtube.com/" },
  music3: { type: String, default: "https://www.youtube.com/" },
  music4: { type: String, default: "https://www.youtube.com/" },
  music5: { type: String, default: "https://www.youtube.com/" },
  music6: { type: String, default: "https://www.youtube.com/" },

  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },

  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },

  boxesultra: { type: Number, default: 0 },
  boxessuper: { type: Number, default: 0 },
  boxesnormal: { type: Number, default: 0 },

  shardsdiamond: { type: Number, default: 0 },
  shardsplatinum: { type: Number, default: 0 },
  shardsgold: { type: Number, default: 0 },
  shardssilver: { type: Number, default: 0 },
  shardsbronze: { type: Number, default: 0 },
  shardsiron: { type: Number, default: 0 },

  //// Trading Game

  coins: { type: Number, default: 0 },

  // Metal
  steel: { type: Number, default: 0 },
  steelpart: { type: Number, default: 0 },
  iron: { type: Number, default: 0 },
  carbon: { type: Number, default: 0 },
  rawiron: { type: Number, default: 0 },

  // Brick
  brick: { type: Number, default: 0 },
  clay: { type: Number, default: 0 },

  // Wood
  woodplank: { type: Number, default: 0 },
  woodpart: { type: Number, default: 0 },
  wood: { type: Number, default: 0 },
  logs: { type: Number, default: 0 },

  // Plastic
  pipe: { type: Number, default: 0 },
  plasticpart: { type: Number, default: 0 },
  plastic: { type: Number, default: 0 },

  // Glass
  glass: { type: Number, default: 0 },
  limestone: { type: Number, default: 0 },
  sand: { type: Number, default: 0 },

  // Mine
  granite: { type: Number, default: 0 },
  marble: { type: Number, default: 0 },
  quartz: { type: Number, default: 0 },
  chalk: { type: Number, default: 0 },
  slate: { type: Number, default: 0 },
  basalt: { type: Number, default: 0 },

  // Insulation
  phenolicfoam: { type: Number, default: 0 }, // resin
  polyurethane: { type: Number, default: 0 }, // reactor
  xps: { type: Number, default: 0 }, // oil
  rockwool: { type: Number, default: 0 }, // basalt
  foamglass: { type: Number, default: 0 }, // sand + limestone
  glasswool: { type: Number, default: 0 }, // reactor
  doubleglass: { type: Number, default: 0 },
  tripleglass: { type: Number, default: 0 },

  // Fabric
  fabric: { type: Number, default: 0 },
  cotton: { type: Number, default: 0 },
  fibre: { type: Number, default: 0 },

  // Food
  bread: { type: Number, default: 0 },
  wheat: { type: Number, default: 0 }, // Farm
  flower: { type: Number, default: 0 }, // Farm

  meat: { type: Number, default: 0 },
  animal: { type: Number, default: 0 }, // Farm

  vegetable: { type: Number, default: 0 },
  plant: { type: Number, default: 0 }, // Greenhouse

  // Reactor material
  polymaterial: { type: Number, default: 0 },
  acid: { type: Number, default: 0 },
  catalyst: { type: Number, default: 0 }, // Faster production time + lower production cost

  // Chrome
  chromepart: { type: Number, default: 0 }, // Brass + Chrome
  chrome: { type: Number, default: 0 },
  brasspart: { type: Number, default: 0 },
  brass: { type: Number, default: 0 }, // Zinc + Copper

  // Rare Materials
  diamond: { type: Number, default: 0 },
  gold: { type: Number, default: 0 },
  platinum: { type: Number, default: 0 },
  silver: { type: Number, default: 0 },
  copper: { type: Number, default: 0 },
  lithium: { type: Number, default: 0 },
  cobalt: { type: Number, default: 0 },

  // House
  housetier1: { type: Number, default: 0 },
  housetier2: { type: Number, default: 0 },
  housetier3: { type: Number, default: 0 },
  housetier4: { type: Number, default: 0 }, // Requires interiorshop tier 3
  housetier5: { type: Number, default: 0 }, // more people +  happiness + energy consumption + water consumption + gas consumption

  // Buildings Tier
  warehousetier: { type: Number, default: 1 }, // More storage
  policetier: { type: Number, default: 0 }, // Less crime rate
  firedepartmenttier: { type: Number, default: 0 }, // Less fire
  hospitaltier: { type: Number, default: 0 }, // More happiness
  malltier: { type: Number, default: 0 }, // More happiness + tax
  cityhalltier: { type: Number, default: 1 }, // More happiness
  infrastructuretier: { type: Number, default: 0 }, // More happiness + lower cost import/export
  landfilltier: { type: Number, default: 1 }, // More happiness
  interiorshoptier: { type: Number, default: 0 }, // Housetier unlock 2+

  // Statistics
  happinesslevel: { type: Number, default: 0 },
  crimerate: { type: Number, default: 0 },
  population: { type: Number, default: 0 },

  // Factory
  reactortier: { type: Number, default: 0 }, // Advanced Products
  factorytier: { type: Number, default: 0 }, // Normal Products
  energyplanttier: { type: Number, default: 0 }, // More energy capacity
  waterpurificationtier: { type: Number, default: 0 }, // More clean water capacity
  gasplant: { type: Number, default: 0 }, // More gas for cooking + warmth capacity
});
mongoose.pluralize(null);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;