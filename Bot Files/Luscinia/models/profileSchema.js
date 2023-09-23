// Het database profiel. Bij wijzigen de database resetten voor implementatie.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen
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
    shard: { type: Number, default: 30000 },

    // Game Statistics - 12
    prestige: { type: Number, default: 1 },
    tradesaccepted: { type: Number, default: 0 },
    tradesrejected: { type: Number, default: 0 },
    traderecvamount: { type: Number, default: 0 },
    tradexmitamount: { type: Number, default: 0 },
    actions: { type: Number, default: 0 },
    amountbuy: { type: Number, default: 0 },
    amountsell: { type: Number, default: 0 },
    timesbuy: { type: Number, default: 0 },
    timessell: { type: Number, default: 0 },
    timesbuilt: { type: Number, default: 0 },
    timesdemolished: { type: Number, default: 0 },

    // Wood - 17
    woodplank: { type: Number, default: 0 },
    woodpart: { type: Number, default: 0 },
    log: { type: Number, default: 0 },
    bamboo: { type: Number, default: 0 },
    cedar: { type: Number, default: 0 },
    fir: { type: Number, default: 0 },
    pine: { type: Number, default: 0 },
    redwood: { type: Number, default: 0 },
    ash: { type: Number, default: 0 },
    birch: { type: Number, default: 0 },
    cherrywood: { type: Number, default: 0 },
    mahogany: { type: Number, default: 0 },
    maple: { type: Number, default: 0 },
    oak: { type: Number, default: 0 },
    poplar: { type: Number, default: 0 },
    teak: { type: Number, default: 0 },
    compositewood: { type: Number, default: 0 },

    // Plastic - 3
    pipe: { type: Number, default: 0 },
    plasticpart: { type: Number, default: 0 },
    plastic: { type: Number, default: 0 },

    // Glass - 3
    glass: { type: Number, default: 0 },
    sand: { type: Number, default: 0 },
    plexiglass: { type: Number, default: 0 },

    // Stone - 11
    granite: { type: Number, default: 0 },
    marble: { type: Number, default: 0 },
    quartz: { type: Number, default: 0 },
    chalk: { type: Number, default: 0 },
    slate: { type: Number, default: 0 },
    basalt: { type: Number, default: 0 },
    pebble: { type: Number, default: 0 },
    limestone: { type: Number, default: 0 },
    flint: { type: Number, default: 0 },
    onyx: { type: Number, default: 0 },
    travertine: { type: Number, default: 0 },

    // Raw Materials 16
    oil: { type: Number, default: 0 },
    coal: { type: Number, default: 0 },
    ironore: { type: Number, default: 0 },
    copperore: { type: Number, default: 0 },
    goldore: { type: Number, default: 0 },
    gas: { type: Number, default: 0 },
    ceramic: { type: Number, default: 0 },
    cork: { type: Number, default: 0 },
    mesh: { type: Number, default: 0 },
    rubber: { type: Number, default: 0 },
    uranium: { type: Number, default: 0 },
    resin: { type: Number, default: 0 },
    carbon: { type: Number, default: 0 },
    clay: { type: Number, default: 0 },
    soil: { type: Number, default: 0 },
    water: { type: Number, default: 0 },

    // Building Materials - 7
    cement: { type: Number, default: 0 },
    concrete: { type: Number, default: 0 }, // cement + water + pebble
    steelsheet: { type: Number, default: 0 },
    tape: { type: Number, default: 0 },
    brick: { type: Number, default: 0 },
    steel: { type: Number, default: 0 },
    steelpart: { type: Number, default: 0 },

    // Semi Products - 6
    glue: { type: Number, default: 0 },
    paper: { type: Number, default: 0 },
    salt: { type: Number, default: 0 },
    flower: { type: Number, default: 0 },
    bakingpowder: { type: Number, default: 0 },
    bread: { type: Number, default: 0 },

    // Crops - 12
    rice: { type: Number, default: 0 },
    rye: { type: Number, default: 0 },
    oats: { type: Number, default: 0 },
    corn: { type: Number, default: 0 },
    barley: { type: Number, default: 0 },
    cassava: { type: Number, default: 0 },
    soybean: { type: Number, default: 0 },
    sorghum: { type: Number, default: 0 },
    wheat: { type: Number, default: 0 },
    cocoabean: { type: Number, default: 0 },
    coffeebean: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 },

    // Vegetables - 26
    asparagus: { type: Number, default: 0 },
    eggplant: { type: Number, default: 0 },
    broccoli: { type: Number, default: 0 },
    cabbage: { type: Number, default: 0 },
    avocado: { type: Number, default: 0 },
    brusselssprout: { type: Number, default: 0 },
    carrot: { type: Number, default: 0 },
    beetroot: { type: Number, default: 0 },
    garlic: { type: Number, default: 0 },
    celery: { type: Number, default: 0 },
    cucumber: { type: Number, default: 0 },
    greenbean: { type: Number, default: 0 },
    leek: { type: Number, default: 0 },
    lettuce: { type: Number, default: 0 },
    mushroom: { type: Number, default: 0 },
    onion: { type: Number, default: 0 },
    pea: { type: Number, default: 0 },
    pumpkin: { type: Number, default: 0 },
    radish: { type: Number, default: 0 },
    rhubarb: { type: Number, default: 0 },
    sweetpepper: { type: Number, default: 0 },
    spinach: { type: Number, default: 0 },
    tomato: { type: Number, default: 0 },
    sweetpotato: { type: Number, default: 0 },
    yam: { type: Number, default: 0 },
    potato: { type: Number, default: 0 },

    // Fruits - 45
    acerola: { type: Number, default: 0 },
    apple: { type: Number, default: 0 },
    apricot: { type: Number, default: 0 },
    banana: { type: Number, default: 0 },
    blackberry: { type: Number, default: 0 },
    blackcurrant: { type: Number, default: 0 },
    blueberry: { type: Number, default: 0 },
    breadfruit: { type: Number, default: 0 },
    cantaloupe: { type: Number, default: 0 },
    cherry: { type: Number, default: 0 },
    clementine: { type: Number, default: 0 },
    coconut: { type: Number, default: 0 },
    cranberry: { type: Number, default: 0 },
    datefruit: { type: Number, default: 0 },
    fig: { type: Number, default: 0 },
    gooseberry: { type: Number, default: 0 },
    grapefruit: { type: Number, default: 0 },
    grape: { type: Number, default: 0 },
    guava: { type: Number, default: 0 },
    honeydewmelon: { type: Number, default: 0 },
    jackfruit: { type: Number, default: 0 },
    jujubefruit: { type: Number, default: 0 },
    kiwi: { type: Number, default: 0 },
    kumquat: { type: Number, default: 0 },
    lemon: { type: Number, default: 0 },
    lime: { type: Number, default: 0 },
    lychee: { type: Number, default: 0 },
    mandarin: { type: Number, default: 0 },
    mango: { type: Number, default: 0 },
    mulberry: { type: Number, default: 0 },
    olive: { type: Number, default: 0 },
    orange: { type: Number, default: 0 },
    papaya: { type: Number, default: 0 },
    passionfruit: { type: Number, default: 0 },
    peach: { type: Number, default: 0 },
    pear: { type: Number, default: 0 },
    dragonfruit: { type: Number, default: 0 },
    pineapple: { type: Number, default: 0 },
    plum: { type: Number, default: 0 },
    pomegranate: { type: Number, default: 0 },
    prune: { type: Number, default: 0 },
    raspberry: { type: Number, default: 0 },
    strawberry: { type: Number, default: 0 },
    tangerine: { type: Number, default: 0 },
    watermelon: { type: Number, default: 0 },

    // Beans - 14
    blackbean: { type: Number, default: 0 },
    blackeyedpea: { type: Number, default: 0 },
    cannellinibean: { type: Number, default: 0 },
    chickpea: { type: Number, default: 0 },
    greatnorthernbean: { type: Number, default: 0 },
    kidneybean: { type: Number, default: 0 },
    limabean: { type: Number, default: 0 },
    pintobean: { type: Number, default: 0 },
    favabean: { type: Number, default: 0 },
    navybean: { type: Number, default: 0 },
    adzukibean: { type: Number, default: 0 },
    edamame: { type: Number, default: 0 },
    mungbean: { type: Number, default: 0 },
    cranberrybean: { type: Number, default: 0 },

    // Nuts - 30
    acorn: { type: Number, default: 0 },
    almond: { type: Number, default: 0 },
    beech: { type: Number, default: 0 },
    brazilnut: { type: Number, default: 0 },
    candlenut: { type: Number, default: 0 },
    cashew: { type: Number, default: 0 },
    chestnut: { type: Number, default: 0 },
    chileanhazel: { type: Number, default: 0 },
    egusi: { type: Number, default: 0 },
    guineapeanut: { type: Number, default: 0 },
    hazelnut: { type: Number, default: 0 },
    hickory: { type: Number, default: 0 },
    kolanut: { type: Number, default: 0 },
    macadamia: { type: Number, default: 0 },
    malabaralmond: { type: Number, default: 0 },
    malabarchestnut: { type: Number, default: 0 },
    mamoncillo: { type: Number, default: 0 },
    mongongo: { type: Number, default: 0 },
    ogbono: { type: Number, default: 0 },
    paradisenut: { type: Number, default: 0 },
    pili: { type: Number, default: 0 },
    pistachio: { type: Number, default: 0 },
    sheanut: { type: Number, default: 0 },
    walnut: { type: Number, default: 0 },
    cycads: { type: Number, default: 0 },
    ginkgo: { type: Number, default: 0 },
    gnetum: { type: Number, default: 0 },
    juniper: { type: Number, default: 0 },
    pinenut: { type: Number, default: 0 },
    podocarps: { type: Number, default: 0 },

    // Seeds - 22
    fingermillet: { type: Number, default: 0 },
    teff: { type: Number, default: 0 },
    fonio: { type: Number, default: 0 },
    prosomillet: { type: Number, default: 0 },
    pearlmillet: { type: Number, default: 0 },
    foxtailmillet: { type: Number, default: 0 },
    triticale: { type: Number, default: 0 },
    durum: { type: Number, default: 0 },
    einkorn: { type: Number, default: 0 },
    spelt: { type: Number, default: 0 },
    kamut: { type: Number, default: 0 },
    emmer: { type: Number, default: 0 },
    kernza: { type: Number, default: 0 },
    amaranth: { type: Number, default: 0 },
    kaniwa: { type: Number, default: 0 },
    quinoa: { type: Number, default: 0 },
    hanza: { type: Number, default: 0 },
    chia: { type: Number, default: 0 },
    flax: { type: Number, default: 0 },
    breadnut: { type: Number, default: 0 },
    sesame: { type: Number, default: 0 },
    buckwheat: { type: Number, default: 0 },

    // Spices and Herbs - 21
    thyme: { type: Number, default: 0 },
    basil: { type: Number, default: 0 },
    oregano: { type: Number, default: 0 },
    rosemary: { type: Number, default: 0 },
    fennelseed: { type: Number, default: 0 },
    bayleaf: { type: Number, default: 0 },
    chilipowder: { type: Number, default: 0 },
    smokedpaprika: { type: Number, default: 0 },
    cayenne: { type: Number, default: 0 },
    cumin: { type: Number, default: 0 },
    groundcardamom: { type: Number, default: 0 },
    currypowder: { type: Number, default: 0 },
    onionpowder: { type: Number, default: 0 },
    garlicpowder: { type: Number, default: 0 },
    groundmustard: { type: Number, default: 0 },
    clove: { type: Number, default: 0 },
    nutmeg: { type: Number, default: 0 },
    cinnamon: { type: Number, default: 0 },
    groundginger: { type: Number, default: 0 },
    mace: { type: Number, default: 0 },
    pepper: { type: Number, default: 0 },

    // Animals - 11
    cow: { type: Number, default: 0 },
    pig: { type: Number, default: 0 },
    horse: { type: Number, default: 0 },
    chicken: { type: Number, default: 0 },
    sheep: { type: Number, default: 0 },
    goat: { type: Number, default: 0 },
    llama: { type: Number, default: 0 },
    rabbit: { type: Number, default: 0 },
    egg: { type: Number, default: 0 },
    fish: { type: Number, default: 0 },
    meat: { type: Number, default: 0 },

    // Insulation - 8
    phenolicfoam: { type: Number, default: 0 }, // resin
    polyurethane: { type: Number, default: 0 }, // reactor
    xps: { type: Number, default: 0 }, // oil
    rockwool: { type: Number, default: 0 }, // basalt
    foamglass: { type: Number, default: 0 }, // sand + limestone
    glasswool: { type: Number, default: 0 }, // reactor
    doubleglass: { type: Number, default: 0 },
    tripleglass: { type: Number, default: 0 },

    // Fabric - 4
    fabric: { type: Number, default: 0 },
    cotton: { type: Number, default: 0 },
    fibre: { type: Number, default: 0 },
    carbonfibre: { type: Number, default: 0 },

    // Reactor Materials - 4
    chemical: { type: Number, default: 0 },
    polymaterial: { type: Number, default: 0 },
    acid: { type: Number, default: 0 },
    catalyst: { type: Number, default: 0 }, // Faster production time + lower production cost

    // Metals - 26
    chromepart: { type: Number, default: 0 }, // Brass + Chrome
    chrome: { type: Number, default: 0 },
    brasspart: { type: Number, default: 0 },
    brass: { type: Number, default: 0 }, // Zinc + Copper
    diamond: { type: Number, default: 0 },
    gold: { type: Number, default: 0 },
    platinum: { type: Number, default: 0 },
    silver: { type: Number, default: 0 },
    copper: { type: Number, default: 0 },
    iron: { type: Number, default: 0 },
    lithium: { type: Number, default: 0 },
    cobalt: { type: Number, default: 0 },
    titanium: { type: Number, default: 0 },
    tungsten: { type: Number, default: 0 },
    nickel: { type: Number, default: 0 },
    magnesium: { type: Number, default: 0 },
    lead: { type: Number, default: 0 },
    tin: { type: Number, default: 0 },
    mercury: { type: Number, default: 0 },
    bismuth: { type: Number, default: 0 },
    rhodium: { type: Number, default: 0 },
    osmium: { type: Number, default: 0 },
    palladium: { type: Number, default: 0 },
    iridium: { type: Number, default: 0 },
    ruthenium: { type: Number, default: 0 },
    plutonium: { type: Number, default: 0 },

    // Components - 4
    componentelectric: { type: Number, default: 0 },
    componentinterior: { type: Number, default: 0 },
    componentclothing: { type: Number, default: 0 },
    componentstarting: { type: Number, default: 0 },

    // City Statistics - 7
    happinesspercentage: { type: Number, default: 0 },
    crimerate: { type: Number, default: 0 },
    population: { type: Number, default: 0 },
    powerusage: { type: Number, default: 0 },
    waterusage: { type: Number, default: 0 },
    gasusage: { type: Number, default: 0 },
    taxincome: { type: Number, default: 5000 },

    // House - 5
    housetier1: { type: Number, default: 0 },
    housetier2: { type: Number, default: 0 },
    housetier3: { type: Number, default: 0 },
    housetier4: { type: Number, default: 0 },
    housetier5: { type: Number, default: 0 },

    // Nature - 6
    river: { type: Number, default: 0 },
    forest: { type: Number, default: 0 },
    beach: { type: Number, default: 0 },
    mine: { type: Number, default: 0 },
    field: { type: Number, default: 0 },
    oilwell: { type: Number, default: 0 },

    // Services - 5
    park: { type: Number, default: 0 },
    school: { type: Number, default: 0 },
    cinema: { type: Number, default: 0 },
    restaurant: { type: Number, default: 0 },
    hotel: { type: Number, default: 0 },

    // Warehouse - 5
    warehousetier1: { type: Number, default: 1 },
    warehousetier2: { type: Number, default: 0 },
    warehousetier3: { type: Number, default: 0 },
    warehousetier4: { type: Number, default: 0 },
    warehousetier5: { type: Number, default: 0 },

    // Police - 3
    policetier1: { type: Number, default: 0 },
    policetier2: { type: Number, default: 0 },
    policetier3: { type: Number, default: 0 },

    // Fire Department - 3
    firedepartmenttier1: { type: Number, default: 0 },
    firedepartmenttier2: { type: Number, default: 0 },
    firedepartmenttier3: { type: Number, default: 0 },

    // Hospital - 3
    hospitaltier1: { type: Number, default: 0 },
    hosptialtier2: { type: Number, default: 0 },
    hospitaltier3: { type: Number, default: 0 },

    // Mall - 2
    malltier1: { type: Number, default: 0 },
    malltier2: { type: Number, default: 0 },

    // Cityhall - 2
    cityhalltier1: { type: Number, default: 1 },
    cityhalltier2: { type: Number, default: 0 },

    // Landfill - 3
    landfilltier1: { type: Number, default: 0 },
    landfilltier2: { type: Number, default: 0 },
    landfilltier3: { type: Number, default: 0 },

    // Energy - 4
    nuclearreactortier1: { type: Number, default: 0 },
    nuclearreactortier1: { type: Number, default: 0 },
    windmill: { type: Number, default: 0 },
    sonarpanel: { type: Number, default: 0 },

    // Refinement - 4
    sawmilltier1: { type: Number, default: 0 },
    sawmilltier2: { type: Number, default: 0 },
    refinerytier1: { type: Number, default: 0 },
    refinerytier2: { type: Number, default: 0 },

    // Store - 12
    interiorshoptier1: { type: Number, default: 0 },
    interiorshoptier2: { type: Number, default: 0 },
    clothingshoptier1: { type: Number, default: 0 },
    clothingshoptier2: { type: Number, default: 0 },
    drugstoretier1: { type: Number, default: 0 },
    drugstoretier2: { type: Number, default: 0 },
    conveniencestoretier1: { type: Number, default: 0 },
    conveniencestoretier2: { type: Number, default: 0 },
    conveniencestoretier3: { type: Number, default: 0 },
    devicestoretier1: { type: Number, default: 0 },
    devicestoretier2: { type: Number, default: 0 },
    devicestoretier3: { type: Number, default: 0 },

    // Production - 4
    reactortier1: { type: Number, default: 0 },
    reactortier2: { type: Number, default: 0 },
    factorytier1: { type: Number, default: 0 },
    factorytier2: { type: Number, default: 0 },

    // Plant - 9
    energyplanttier1: { type: Number, default: 0 },
    energyplanttier2: { type: Number, default: 0 },
    energyplanttier3: { type: Number, default: 0 },
    waterplanttier1: { type: Number, default: 0 },
    waterplanttier2: { type: Number, default: 0 },
    waterplanttier3: { type: Number, default: 0 },
    gasplanttier1: { type: Number, default: 0 },
    gasplanttier2: { type: Number, default: 0 },
    gasplanttier3: { type: Number, default: 0 },

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