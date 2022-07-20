// Kern van de bot. Dit is de listener naar berichten die beginnen met de prefix. 
// Verder zitten hier ook de cooldown, permission en aliases module in.
// Vele variabelen zitten in de config.
// Veel kern spulletjes die eenmaal geschreven niet meer aangeraakt hoeven te worden. 

require("dotenv").config();
const config = require("../../Other/config.js");
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  //Core

  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const profileModel = require("../../models/profileSchema");

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);

  const rndIntmax = 10000000000000
  const rndIntmin = 1
  const rndInt = Math.round(Math.floor(Math.random() * rndIntmax) + rndIntmin)

  //Database profile
  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      message.channel.send("It looks like you didn't have an account with us. I have created one for you. This was an one time thing. You can now use all Economy and Level commands.")
      let profile = await profileModel.create({
        userID: message.author.id,
        name: message.author.username,
        avatar: message.author.avatar,
        bot: message.author.bot,
        tag: tag,
        uni: rndInt,
        warnings: 0,

        scrapexotic: 0,
        scraplegendary: 0,
        scrapepic: 0,
        scraprare: 0,
        scrapuncommon: 0,
        scrapcommon: 0,

        music1: "https://www.youtube.com/",
        music2: "https://www.youtube.com/",
        music3: "https://www.youtube.com/",
        music4: "https://www.youtube.com/",
        music5: "https://www.youtube.com/",
        music6: "https://www.youtube.com/",

        level: 0,
        experience: 0,

        wallet: 0,
        bank: 0,

        boxesultra: 0,
        boxessuper: 0,
        boxesnormal: 0,

        shardsdiamond: 0,
        shardsplatinum: 0,
        shardsgold: 0,
        shardssilver: 0,
        shardsbronze: 0,
        shardsiron: 0,

        //// Trading Game

        // Valuta
        shard: 30000,

        // Game Statistics
        prestige: 1,
        tradesaccepted: 0,
        tradesrejected: 0,
        traderecvamount: 0,
        tradexmitamount: 0,
        actions: 0,
        amountbuy: 0,
        amountsell: 0,
        timesbuy: 0,
        timessell: 0,
        timesbuilt: 0,
        timesdemolished: 0,

        // Wood
        woodplank: 0,
        woodpart: 0,
        log: 0,
        bamboo: 0,
        cedar: 0,
        fir: 0,
        pine: 0,
        redwood: 0,
        ash: 0,
        birch: 0,
        cherrywood: 0,
        mahogany: 0,
        maple: 0,
        oak: 0,
        poplar: 0,
        teak: 0,
        compositewood: 0,

        // Plastic
        pipe: 0,
        plasticpart: 0,
        plastic: 0,

        // Glass
        glass: 0,
        sand: 0,
        plexiglass: 0,

        // Stone
        granite: 0,
        marble: 0,
        quartz: 0,
        chalk: 0,
        slate: 0,
        basalt: 0,
        pebble: 0,
        limestone: 0,

        // Raw Materials
        oil: 0,
        coal: 0,
        ironore: 0,
        copperore: 0,
        goldore: 0,
        gas: 0,
        ceramic: 0,
        cork: 0,
        mesh: 0,
        rubber: 0,
        uranium: 0,
        resin: 0,
        carbon: 0,
        clay: 0,
        soil: 0,
        water: 0,
        flint: 0,
        onyx: 0,
        travertine: 0,

        // Building Materials
        cement: 0,
        concrete: 0,
        steelsheet: 0,
        tape: 0,
        brick: 0,
        steel: 0,
        steelpart: 0,

        // Semi Products
        glue: 0,
        paper: 0,
        salt: 0,
        flower: 0,
        bakingpowder: 0,
        bread: 0,

        // Crops
        rice: 0,
        rye: 0,
        oats: 0,
        corn: 0,
        barley: 0,
        cassava: 0,
        soybean: 0,
        sorghum: 0,
        wheat: 0,
        cocoabean: 0,
        coffeebean: 0,
        sugar: 0,

        // Vegetables
        asparagus: 0,
        eggplant: 0,
        broccoli: 0,
        cabbage: 0,
        avocado: 0,
        brusselssprout: 0,
        carrot: 0,
        beetroot: 0,
        garlic: 0,
        celery: 0,
        cucumber: 0,
        greenbean: 0,
        leek: 0,
        lettuce: 0,
        mushroom: 0,
        onion: 0,
        pea: 0,
        pumpkin: 0,
        radish: 0,
        rhubarb: 0,
        sweetpepper: 0,
        spinach: 0,
        tomato: 0,
        sweetpotato: 0,
        yam: 0,
        potato: 0,

        // Fruit
        acerola: 0,
        apple: 0,
        apricot: 0,
        banana: 0,
        blackberry: 0,
        blackcurrant: 0,
        blueberry: 0,
        breadfruit: 0,
        cantaloupe: 0,
        cherry: 0,
        clementine: 0,
        coconut: 0,
        cranberry: 0,
        datefruit: 0,
        fig: 0,
        gooseberry: 0,
        grapefruit: 0,
        grape: 0,
        guava: 0,
        honeydewmelon: 0,
        jackfruit: 0,
        jujubefruit: 0,
        kiwi: 0,
        kumquat: 0,
        lemon: 0,
        lime: 0,
        lychee: 0,
        mandarin: 0,
        mango: 0,
        mulberry: 0,
        olive: 0,
        orange: 0,
        papaya: 0,
        passionfruit: 0,
        peach: 0,
        pear: 0,
        dragonfruit: 0,
        pineapple: 0,
        plum: 0,
        pomegranate: 0,
        prune: 0,
        raspberry: 0,
        strawberry: 0,
        tangerine: 0,
        watermelon: 0,

        // Beans
        blackbean: 0,
        blackeyedpea: 0,
        cannellinibean: 0,
        chickpea: 0,
        greatnorthernbean: 0,
        kidneybean: 0,
        limabean: 0,
        pintobean: 0,
        favabean: 0,
        navybean: 0,
        adzukibean: 0,
        edamame: 0,
        mungbean: 0,
        cranberrybean: 0,

        // Nuts
        acorn: 0,
        almond: 0,
        beech: 0,
        brazilnut: 0,
        candlenut: 0,
        cashew: 0,
        chestnut: 0,
        chileanhazel: 0,
        egusi: 0,
        guineapeanut: 0,
        hazelnut: 0,
        hickory: 0,
        kolanut: 0,
        macadamia: 0,
        malabaralmond: 0,
        malabarchestnut: 0,
        mamoncillo: 0,
        mongongo: 0,
        ogbono: 0,
        paradisenut: 0,
        pili: 0,
        pistachio: 0,
        sheanut: 0,
        walnut: 0,
        cycads: 0,
        ginkgo: 0,
        gnetum: 0,
        juniper: 0,
        pinenut: 0,
        podocarps: 0,

        // Seeds
        fingermillet: 0,
        teff: 0,
        fonio: 0,
        prosomillet: 0,
        pearlmillet: 0,
        foxtailmillet: 0,
        triticale: 0,
        durum: 0,
        einkorn: 0,
        spelt: 0,
        kamut: 0,
        emmer: 0,
        kernza: 0,
        amaranth: 0,
        kaniwa: 0,
        quinoa: 0,
        hanza: 0,
        chia: 0,
        flax: 0,
        breadnut: 0,
        sesame: 0,
        buckwheat: 0,

        // Spices and Herbs
        thyme: 0,
        basil: 0,
        oregano: 0,
        rosemary: 0,
        fennelseed: 0,
        bayleaf: 0,
        chilipowder: 0,
        smokedpaprika: 0,
        cayenne: 0,
        cumin: 0,
        groundcardamom: 0,
        currypowder: 0,
        onionpowder: 0,
        garlicpowder: 0,
        groundmustard: 0,
        clove: 0,
        nutmeg: 0,
        cinnamon: 0,
        groundginger: 0,
        mace: 0,
        pepper: 0,

        // Animals
        cow: 0,
        pig: 0,
        horse: 0,
        chicken: 0,
        sheep: 0,
        goat: 0,
        llama: 0,
        rabbit: 0,
        egg: 0,
        fish: 0,
        meat: 0,

        // Insulation
        phenolicfoam: 0,
        polyurethane: 0,
        xps: 0,
        rockwool: 0,
        foamglass: 0,
        glasswool: 0,
        doubleglass: 0,
        tripleglass: 0,

        // Fabric
        fabric: 0,
        cotton: 0,
        fibre: 0,
        carbonfibre: 0,

        // Reactor Material
        chemical: 0,
        polymaterial: 0,
        acid: 0,
        catalyst: 0,

        // Metals
        chromepart: 0,
        chrome: 0,
        brasspart: 0,
        brass: 0,
        diamond: 0,
        gold: 0,
        platinum: 0,
        silver: 0,
        copper: 0,
        iron: 0,
        lithium: 0,
        cobalt: 0,
        titanium: 0,
        tungsten: 0,
        nickel: 0,
        magnesium: 0,
        lead: 0,
        tin: 0,
        mercury: 0,
        bismuth: 0,
        rhodium: 0,
        osmium: 0,
        palladium: 0,
        iridium: 0,
        ruthenium: 0,
        plutonium: 0,

        // Components
        componentelectric: 0,
        componentinterior: 0,
        componentclothing: 0,
        componentstarting: 0,

        // Statistics
        happinesspercentage: 0,
        crimerate: 0,
        population: 0,
        powerusage: 0,
        waterusage: 0,
        gasusage: 0,
        taxincome: 5000,

        // House
        housetier1: 0,
        housetier2: 0,
        housetier3: 0,
        housetier4: 0,
        housetier5: 0,

        // Nature
        river: 0,
        forest: 0,
        beach: 0,
        mine: 0,
        field: 0,
        oilwell: 0,

        // Services
        park: 0,
        school: 0,
        cinema: 0,
        restaurant: 0,
        hotel: 0,

        // Warehouse
        warehousetier1: 1,
        warehousetier2: 0,
        warehousetier3: 0,
        warehousetier4: 0,
        warehousetier5: 0,

        // Police
        policetier1: 0,
        policetier2: 0,
        policetier3: 0,

        // Fire Department
        firedepartmenttier1: 0,
        firedepartmenttier2: 0,
        firedepartmenttier3: 0,

        // Hospital
        hospitaltier1: 0,
        hosptialtier2: 0,
        hospitaltier3: 0,

        // Mall
        malltier1: 0,
        malltier2: 0,

        // Cityhall
        cityhalltier1: 1,
        cityhalltier2: 0,

        // Landfill
        landfilltier1: 0,
        landfilltier2: 0,
        landfilltier3: 0,

        // Energy
        nuclearreactortier1: 0,
        nuclearreactortier2: 0,
        windmill: 0,
        sonarpanel: 0,

        // Refinement
        sawmilltier1: 0,
        sawmilltier2: 0,
        refinerytier1: 0,
        refinerytier2: 0,

        // Store
        interiorshoptier1: 0,
        interiorshoptier2: 0,
        clothingshoptier1: 0,
        clothingshoptier2: 0,
        drugstoretier1: 0,
        drugstoretier2: 0,
        conveniencestoretier1: 0,
        conveniencestoretier2: 0,
        conveniencestoretier3: 0,
        devicestoretier1: 0,
        devicestoretier2: 0,
        devicestoretier3: 0,

        // Production
        reactortier1: 0,
        reactortier2: 0,
        factorytier1: 0,
        factorytier2: 0,

        // Plant
        energyplanttier1: 0,
        energyplanttier2: 0,
        energyplanttier3: 0,
        waterplanttier1: 0,
        waterplanttier2: 0,
        waterplanttier3: 0,
        gasplanttier1: 0,
        gasplanttier2: 0,
        gasplanttier3: 0,

        // Board
        a1: "Empty",
        a2: "Empty",
        a3: "Empty",
        a4: "Empty",
        a5: "Empty",
        a6: "Empty",
        a7: "Empty",
        a8: "Empty",
        a9: "Empty",
        a10: "Empty",
        a11: "Empty",
        a12: "Empty",
        a13: "Empty",
        a14: "Empty",
        a15: "Empty",
        b1: "Empty",
        b2: "Empty",
        b3: "Empty",
        b4: "Empty",
        b5: "Empty",
        b6: "Empty",
        b7: "Empty",
        b8: "Empty",
        b9: "Empty",
        b10: "Empty",
        b11: "Empty",
        b12: "Empty",
        b13: "Empty",
        b14: "Empty",
        b15: "Empty",
        c1: "Empty",
        c2: "Empty",
        c3: "Empty",
        c4: "Empty",
        c5: "Empty",
        c6: "Empty",
        c7: "Empty",
        c8: "Empty",
        c9: "Empty",
        c10: "Empty",
        c11: "Empty",
        c12: "Empty",
        c13: "Empty",
        c14: "Empty",
        c15: "Empty",
        d1: "Empty",
        d2: "Empty",
        d3: "Empty",
        d4: "Empty",
        d5: "Empty",
        d6: "Empty",
        d7: "Empty",
        d8: "Empty",
        d9: "Empty",
        d10: "Empty",
        d11: "Empty",
        d12: "Empty",
        d13: "Empty",
        d14: "Empty",
        d15: "Empty",
        e1: "Empty",
        e2: "Empty",
        e3: "Empty",
        e4: "Empty",
        e5: "Empty",
        e6: "Empty",
        e7: "Empty",
        e8: "Empty",
        e9: "Empty",
        e10: "Empty",
        e11: "Empty",
        e12: "Empty",
        e13: "Empty",
        e14: "Empty",
        e15: "Empty",
        f1: "Empty",
        f2: "Empty",
        f3: "Empty",
        f4: "Empty",
        f5: "Empty",
        f6: "Empty",
        f7: "Empty",
        f8: "Empty",
        f9: "Empty",
        f10: "Empty",
        f11: "Empty",
        f12: "Empty",
        f13: "Empty",
        f14: "Empty",
        f15: "Empty",
        g1: "Empty",
        g2: "Empty",
        g3: "Empty",
        g4: "Empty",
        g5: "Empty",
        g6: "Empty",
        g7: "Empty",
        g8: "Empty",
        g9: "Empty",
        g10: "Empty",
        g11: "Empty",
        g12: "Empty",
        g13: "Empty",
        g14: "Empty",
        g15: "Empty",
        h1: "Empty",
        h2: "Empty",
        h3: "Empty",
        h4: "Empty",
        h5: "Empty",
        h6: "Empty",
        h7: "Empty",
        h8: "Empty",
        h9: "Empty",
        h10: "Empty",
        h11: "Empty",
        h12: "Empty",
        h13: "Empty",
        h14: "Empty",
        h15: "Empty",
        i1: "Empty",
        i2: "Empty",
        i3: "Empty",
        i4: "Empty",
        i5: "Empty",
        i6: "Empty",
        i7: "Empty",
        i8: "Empty",
        i9: "Empty",
        i10: "Empty",
        i11: "Empty",
        i12: "Empty",
        i13: "Empty",
        i14: "Empty",
        i15: "Empty",
        j1: "Empty",
        j2: "Empty",
        j3: "Empty",
        j4: "Empty",
        j5: "Empty",
        j6: "Empty",
        j7: "Empty",
        j8: "Empty",
        j9: "Empty",
        j10: "Empty",
        j11: "Empty",
        j12: "Empty",
        j13: "Empty",
        j14: "Empty",
        j15: "Empty",
        k1: "Empty",
        k2: "Empty",
        k3: "Empty",
        k4: "Empty",
        k5: "Empty",
        k6: "Empty",
        k7: "Empty",
        k8: "Empty",
        k9: "Empty",
        k10: "Empty",
        k11: "Empty",
        k12: "Empty",
        k13: "Empty",
        k14: "Empty",
        k15: "Empty",
        l1: "Empty",
        l2: "Empty",
        l3: "Empty",
        l4: "Empty",
        l5: "Empty",
        l6: "Empty",
        l7: "Empty",
        l8: "Empty",
        l9: "Empty",
        l10: "Empty",
        l11: "Empty",
        l12: "Empty",
        l13: "Empty",
        l14: "Empty",
        l15: "Empty",
        m1: "Empty",
        m2: "Empty",
        m3: "Empty",
        m4: "Empty",
        m5: "Empty",
        m6: "Empty",
        m7: "Empty",
        m8: "Empty",
        m9: "Empty",
        m10: "Empty",
        m11: "Empty",
        m12: "Empty",
        m13: "Empty",
        m14: "Empty",
        m15: "Empty",
        n1: "Empty",
        n2: "Empty",
        n3: "Empty",
        n4: "Empty",
        n5: "Empty",
        n6: "Empty",
        n7: "Empty",
        n8: "Empty",
        n9: "Empty",
        n10: "Empty",
        n11: "Empty",
        n12: "Empty",
        n13: "Empty",
        n14: "Empty",
        n15: "Empty",
        o1: "Empty",
        o2: "Empty",
        o3: "Empty",
        o4: "Empty",
        o5: "Empty",
        o6: "Empty",
        o7: "Empty",
        o8: "Empty",
        o9: "Empty",
        o10: "Empty",
        o11: "Empty",
        o12: "Empty",
        o13: "Empty",
        o14: "Empty",
        o15: "Empty",
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err5}\`.`)
  }

  //Aliases
  try {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
  } catch (err) {
    console.log(`${message.author.username} used an invalid command.`)
    return message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
  }
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  //Message Permissions
  // https://discord.com/developers/docs/topics/permissions
  // Keep updated in order to use new permissions.
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS_AND_STICKERS",
    "USE_APPLICATION_COMMANDS",
    "REQUEST_TO_SPEAK",
    "MANAGE_EVENTS",
    "MANAGE_THREADS",
    "CREATE_PUBLIC_THREADS",
    "CREATE_PRIVATE_THREADS",
    "USE_EXTERNAL_STICKERS",
    "SEND_MESSAGES_IN_THREADS",
    "USE_EMBEDDED_ACTIVITIES",
    "MODERATE_MEMBERS"
  ];
  if (command.permissions.length) {
    let invalidPerms = [];
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!message.member.permissions.has(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.channel.send(
        `You are missing the following permissions to use this command: \`${invalidPerms}\`.`
      );
    }
  }

  //Cooldown
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = command.cooldown * 1000;

  if (time_stamps.has(message.author.id)) {
    const expiration_time =
      time_stamps.get(message.author.id) + cooldown_amount;

    if (current_time < expiration_time) {
      const time_left = (expiration_time - current_time) / 1000;

      return message.reply(
        `Please wait \`${time_left.toFixed(
          1
        )}\` more seconds before using the command: \`${command.name}\`.`
      );
    }
  }

  time_stamps.set(message.author.id, current_time);
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

  //Error Checking
  try {
    command.execute(message, args, cmd, client, Discord, profileData);
  } catch (err) {
    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err1}\`.`)
    console.log(err);
  }
};
