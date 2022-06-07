// Het database profiel. Bij wijzigen de database resetten voor implementatie.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  bot: { type: Boolean },
  uni: { type: Number, unique: true },
  warnings: { type: Number, default: 0 },

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

  // Valuta
  xi: { type: Number, default: 0 }, // Euro
  pi: { type: Number, default: 0 }, // Cent

  tradesaccepted: { type: Number, default: 0 },
  tradescancelled: { type: Number, default: 0 },
  actions: { type: Number, default: 0 },
  amountbought: { type: Number, default: 0 },
  amountsold: { type: Number, default: 0 },

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

  // Materials
  granite: { type: Number, default: 0 },
  marble: { type: Number, default: 0 },
  quartz: { type: Number, default: 0 },
  chalk: { type: Number, default: 0 },
  slate: { type: Number, default: 0 },
  basalt: { type: Number, default: 0 },
  oil: { type: Number, default: 0 },
  gas: { type: Number, default: 0 },
  rice: { type: Number, default: 0 },
  rye: { type: Number, default: 0 },
  oats: { type: Number, default: 0 },
  corn: { type: Number, default: 0 },
  barley: { type: Number, default: 0 },
  cassava: { type: Number, default: 0 },
  soybean: { type: Number, default: 0 },
  potato: { type: Number, default: 0 },
  sorghum: { type: Number, default: 0 },
  yam: { type: Number, default: 0 },
  bamboo: { type: Number, default: 0 },
  cocoa: { type: Number, default: 0 },
  coffeebeans: { type: Number, default: 0 },

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
  titanium: { type: Number, default: 0 },
  tungsten: { type: Number, default: 0 },
  nickel: { type: Number, default: 0 },
  magnesium: { type: Number, default: 0 },
  lead: { type: Number, default: 0 },

  // Components
  componentelectric: { type: Number, default: 0 },
  componentinterior: { type: Number, default: 0 },
  componentclothing: { type: Number, default: 0 },
  componentstarting: { type: Number, default: 0 },

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
  infrastructuretier: { type: Number, default: 1 }, // More happiness + lower cost import/export
  landfilltier: { type: Number, default: 0 }, // More happiness

  interiorshoptier: { type: Number, default: 0 }, // Housetier unlock 2+
  clothingshoptier: { type: Number, default: 0 }, // Housetier unlock 3+
  drugstoretier: { type: Number, default: 0 }, // Housetier unlock 3+
  conveniencestore: { type: Number, default: 0 }, // Housetier unlock 2+
  devicestore: { type: Number, default: 0 }, // Housetier unlock 4+

  // Statistics
  happinesspercentage: { type: Number, default: 0 },
  crimerate: { type: Number, default: 0 },
  population: { type: Number, default: 0 },

  // Factory
  reactortier: { type: Number, default: 0 }, // Advanced Products
  factorytier: { type: Number, default: 0 }, // Normal Products
  energyplanttier: { type: Number, default: 0 }, // More energy capacity
  waterplanttier: { type: Number, default: 0 }, // More clean water capacity
  gasplanttier: { type: Number, default: 0 }, // More gas for cooking + warmth capacity

  // Board
  a1: { type: String, default: "Empty" },
  a2: { type: String, default: "Empty" },
  a3: { type: String, default: "Empty" },
  a4: { type: String, default: "Empty" },
  a5: { type: String, default: "Empty" },
  a6: { type: String, default: "Empty" },
  a7: { type: String, default: "Empty" },
  a8: { type: String, default: "Empty" },
  a9: { type: String, default: "Empty" },
  a10: { type: String, default: "Empty" },
  a11: { type: String, default: "Empty" },
  a12: { type: String, default: "Empty" },
  a13: { type: String, default: "Empty" },
  a14: { type: String, default: "Empty" },
  a15: { type: String, default: "Empty" },
  b1: { type: String, default: "Empty" },
  b2: { type: String, default: "Empty" },
  b3: { type: String, default: "Empty" },
  b4: { type: String, default: "Empty" },
  b5: { type: String, default: "Empty" },
  b6: { type: String, default: "Empty" },
  b7: { type: String, default: "Empty" },
  b8: { type: String, default: "Empty" },
  b9: { type: String, default: "Empty" },
  b10: { type: String, default: "Empty" },
  b11: { type: String, default: "Empty" },
  b12: { type: String, default: "Empty" },
  b13: { type: String, default: "Empty" },
  b14: { type: String, default: "Empty" },
  b15: { type: String, default: "Empty" },
  c1: { type: String, default: "Empty" },
  c2: { type: String, default: "Empty" },
  c3: { type: String, default: "Empty" },
  c4: { type: String, default: "Empty" },
  c5: { type: String, default: "Empty" },
  c6: { type: String, default: "Empty" },
  c7: { type: String, default: "Empty" },
  c8: { type: String, default: "Empty" },
  c9: { type: String, default: "Empty" },
  c10: { type: String, default: "Empty" },
  c11: { type: String, default: "Empty" },
  c12: { type: String, default: "Empty" },
  c13: { type: String, default: "Empty" },
  c14: { type: String, default: "Empty" },
  c15: { type: String, default: "Empty" },
  d1: { type: String, default: "Empty" },
  d2: { type: String, default: "Empty" },
  d3: { type: String, default: "Empty" },
  d4: { type: String, default: "Empty" },
  d5: { type: String, default: "Empty" },
  d6: { type: String, default: "Empty" },
  d7: { type: String, default: "Empty" },
  d8: { type: String, default: "Empty" },
  d9: { type: String, default: "Empty" },
  d10: { type: String, default: "Empty" },
  d11: { type: String, default: "Empty" },
  d12: { type: String, default: "Empty" },
  d13: { type: String, default: "Empty" },
  d14: { type: String, default: "Empty" },
  d15: { type: String, default: "Empty" },
  e1: { type: String, default: "Empty" },
  e2: { type: String, default: "Empty" },
  e3: { type: String, default: "Empty" },
  e4: { type: String, default: "Empty" },
  e5: { type: String, default: "Empty" },
  e6: { type: String, default: "Empty" },
  e7: { type: String, default: "Empty" },
  e8: { type: String, default: "Empty" },
  e9: { type: String, default: "Empty" },
  e10: { type: String, default: "Empty" },
  e11: { type: String, default: "Empty" },
  e12: { type: String, default: "Empty" },
  e13: { type: String, default: "Empty" },
  e14: { type: String, default: "Empty" },
  e15: { type: String, default: "Empty" },
  f1: { type: String, default: "Empty" },
  f2: { type: String, default: "Empty" },
  f3: { type: String, default: "Empty" },
  f4: { type: String, default: "Empty" },
  f5: { type: String, default: "Empty" },
  f6: { type: String, default: "Empty" },
  f7: { type: String, default: "Empty" },
  f8: { type: String, default: "Empty" },
  f9: { type: String, default: "Empty" },
  f10: { type: String, default: "Empty" },
  f11: { type: String, default: "Empty" },
  f12: { type: String, default: "Empty" },
  f13: { type: String, default: "Empty" },
  f14: { type: String, default: "Empty" },
  f15: { type: String, default: "Empty" },
  g1: { type: String, default: "Empty" },
  g2: { type: String, default: "Empty" },
  g3: { type: String, default: "Empty" },
  g4: { type: String, default: "Empty" },
  g5: { type: String, default: "Empty" },
  g6: { type: String, default: "Empty" },
  g7: { type: String, default: "Empty" },
  g8: { type: String, default: "Empty" },
  g9: { type: String, default: "Empty" },
  g10: { type: String, default: "Empty" },
  g11: { type: String, default: "Empty" },
  g12: { type: String, default: "Empty" },
  g13: { type: String, default: "Empty" },
  g14: { type: String, default: "Empty" },
  g15: { type: String, default: "Empty" },
  h1: { type: String, default: "Empty" },
  h2: { type: String, default: "Empty" },
  h3: { type: String, default: "Empty" },
  h4: { type: String, default: "Empty" },
  h5: { type: String, default: "Empty" },
  h6: { type: String, default: "Empty" },
  h7: { type: String, default: "Empty" },
  h8: { type: String, default: "Empty" },
  h9: { type: String, default: "Empty" },
  h10: { type: String, default: "Empty" },
  h11: { type: String, default: "Empty" },
  h12: { type: String, default: "Empty" },
  h13: { type: String, default: "Empty" },
  h14: { type: String, default: "Empty" },
  h15: { type: String, default: "Empty" },
  i1: { type: String, default: "Empty" },
  i2: { type: String, default: "Empty" },
  i3: { type: String, default: "Empty" },
  i4: { type: String, default: "Empty" },
  i5: { type: String, default: "Empty" },
  i6: { type: String, default: "Empty" },
  i7: { type: String, default: "Empty" },
  i8: { type: String, default: "Empty" },
  i9: { type: String, default: "Empty" },
  i10: { type: String, default: "Empty" },
  i11: { type: String, default: "Empty" },
  i12: { type: String, default: "Empty" },
  i13: { type: String, default: "Empty" },
  i14: { type: String, default: "Empty" },
  i15: { type: String, default: "Empty" },
  j1: { type: String, default: "Empty" },
  j2: { type: String, default: "Empty" },
  j3: { type: String, default: "Empty" },
  j4: { type: String, default: "Empty" },
  j5: { type: String, default: "Empty" },
  j6: { type: String, default: "Empty" },
  j7: { type: String, default: "Empty" },
  j8: { type: String, default: "Empty" },
  j9: { type: String, default: "Empty" },
  j10: { type: String, default: "Empty" },
  j11: { type: String, default: "Empty" },
  j12: { type: String, default: "Empty" },
  j13: { type: String, default: "Empty" },
  j14: { type: String, default: "Empty" },
  j15: { type: String, default: "Empty" },
  k1: { type: String, default: "Empty" },
  k2: { type: String, default: "Empty" },
  k3: { type: String, default: "Empty" },
  k4: { type: String, default: "Empty" },
  k5: { type: String, default: "Empty" },
  k6: { type: String, default: "Empty" },
  k7: { type: String, default: "Empty" },
  k8: { type: String, default: "Empty" },
  k9: { type: String, default: "Empty" },
  k10: { type: String, default: "Empty" },
  k11: { type: String, default: "Empty" },
  k12: { type: String, default: "Empty" },
  k13: { type: String, default: "Empty" },
  k14: { type: String, default: "Empty" },
  k15: { type: String, default: "Empty" },
  l1: { type: String, default: "Empty" },
  l2: { type: String, default: "Empty" },
  l3: { type: String, default: "Empty" },
  l4: { type: String, default: "Empty" },
  l5: { type: String, default: "Empty" },
  l6: { type: String, default: "Empty" },
  l7: { type: String, default: "Empty" },
  l8: { type: String, default: "Empty" },
  l9: { type: String, default: "Empty" },
  l10: { type: String, default: "Empty" },
  l11: { type: String, default: "Empty" },
  l12: { type: String, default: "Empty" },
  l13: { type: String, default: "Empty" },
  l14: { type: String, default: "Empty" },
  l15: { type: String, default: "Empty" },
  m1: { type: String, default: "Empty" },
  m2: { type: String, default: "Empty" },
  m3: { type: String, default: "Empty" },
  m4: { type: String, default: "Empty" },
  m5: { type: String, default: "Empty" },
  m6: { type: String, default: "Empty" },
  m7: { type: String, default: "Empty" },
  m8: { type: String, default: "Empty" },
  m9: { type: String, default: "Empty" },
  m10: { type: String, default: "Empty" },
  m11: { type: String, default: "Empty" },
  m12: { type: String, default: "Empty" },
  m13: { type: String, default: "Empty" },
  m14: { type: String, default: "Empty" },
  m15: { type: String, default: "Empty" },
  n1: { type: String, default: "Empty" },
  n2: { type: String, default: "Empty" },
  n3: { type: String, default: "Empty" },
  n4: { type: String, default: "Empty" },
  n5: { type: String, default: "Empty" },
  n6: { type: String, default: "Empty" },
  n7: { type: String, default: "Empty" },
  n8: { type: String, default: "Empty" },
  n9: { type: String, default: "Empty" },
  n10: { type: String, default: "Empty" },
  n11: { type: String, default: "Empty" },
  n12: { type: String, default: "Empty" },
  n13: { type: String, default: "Empty" },
  n14: { type: String, default: "Empty" },
  n15: { type: String, default: "Empty" },
  o1: { type: String, default: "Empty" },
  o2: { type: String, default: "Empty" },
  o3: { type: String, default: "Empty" },
  o4: { type: String, default: "Empty" },
  o5: { type: String, default: "Empty" },
  o6: { type: String, default: "Empty" },
  o7: { type: String, default: "Empty" },
  o8: { type: String, default: "Empty" },
  o9: { type: String, default: "Empty" },
  o10: { type: String, default: "Empty" },
  o11: { type: String, default: "Empty" },
  o12: { type: String, default: "Empty" },
  o13: { type: String, default: "Empty" },
  o14: { type: String, default: "Empty" },
  o15: { type: String, default: "Empty" },
});
mongoose.pluralize(null);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;