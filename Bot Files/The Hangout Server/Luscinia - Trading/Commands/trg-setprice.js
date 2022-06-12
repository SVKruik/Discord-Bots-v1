// Recalculate the standard price.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "setprice",
    aliases: config.aliases.aliasessetprice,
    cooldown: config.cooldown.cooldownsetprice,
    permissions: config.permissions.permissionsetprice,
    description: "Recalculate the standard price.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Received, check console.`)
        let file = editJsonFile(`./marketpricemax.json`); // target file
        const filedata1 = require('./../formula-a.json')
        const filedata2 = require('./../formula-b.json')

        // Y = Ax + B
        // Setprice = Slope * Stock + Cross

        const woodplank = (filedata1.woodplank * 1000) + filedata2.woodplank;
        const woodpart = (filedata1.woodpart * 1000) + filedata2.woodpart;
        const log = (filedata1.log * 1000) + filedata2.log;
        const bamboo = (filedata1.bamboo * 1000) + filedata2.bamboo;
        const cedar = (filedata1.cedar * 1000) + filedata2.cedar;
        const fir = (filedata1.fir * 1000) + filedata2.fir;
        const pine = (filedata1.pine * 1000) + filedata2.pine;
        const redwood = (filedata1.redwood * 1000) + filedata2.redwood;
        const ash = (filedata1.ash * 1000) + filedata2.ash;
        const birch = (filedata1.birch * 1000) + filedata2.birch;
        const cherrywood = (filedata1.cherrywood * 1000) + filedata2.cherrywood;
        const mahogany = (filedata1.mahogany * 1000) + filedata2.mahogany;
        const maple = (filedata1.maple * 1000) + filedata2.maple;
        const oak = (filedata1.oak * 1000) + filedata2.oak;
        const poplar = (filedata1.poplar * 1000) + filedata2.poplar;
        const teak = (filedata1.teak * 1000) + filedata2.teak;
        const compositewood = (filedata1.compositewood * 1000) + filedata2.compositewood;
        const pipe = (filedata1.pipe * 1000) + filedata2.pipe;
        const plasticpart = (filedata1.plasticpart * 1000) + filedata2.plasticpart;
        const plastic = (filedata1.plastic * 1000) + filedata2.plastic;
        const glass = (filedata1.glass * 1000) + filedata2.glass;
        const sand = (filedata1.sand * 1000) + filedata2.sand;
        const plexiglass = (filedata1.plexiglass * 1000) + filedata2.plexiglass;
        const granite = (filedata1.granite * 1000) + filedata2.granite;
        const marble = (filedata1.marble * 1000) + filedata2.marble;
        const quartz = (filedata1.quartz * 1000) + filedata2.quartz;
        const chalk = (filedata1.chalk * 1000) + filedata2.chalk;
        const slate = (filedata1.slate * 1000) + filedata2.slate;
        const basalt = (filedata1.basalt * 1000) + filedata2.basalt;
        const pebble = (filedata1.pebble * 1000) + filedata2.pebble;
        const limestone = (filedata1.limestone * 1000) + filedata2.limestone;
        const flint = (filedata1.flint * 1000) + filedata2.flint;
        const onyx = (filedata1.onyx * 1000) + filedata2.onyx;
        const travertine = (filedata1.travertine * 1000) + filedata2.travertine;
        const oil = (filedata1.oil * 1000) + filedata2.oil;
        const coal = (filedata1.coal * 1000) + filedata2.coal;
        const ironore = (filedata1.ironore * 1000) + filedata2.ironore;
        const copperore = (filedata1.copperore * 1000) + filedata2.copperore;
        const goldore = (filedata1.goldore * 1000) + filedata2.goldore;
        const gas = (filedata1.gas * 1000) + filedata2.gas;
        const ceramic = (filedata1.ceramic * 1000) + filedata2.ceramic;
        const cork = (filedata1.cork * 1000) + filedata2.cork;
        const mesh = (filedata1.mesh * 1000) + filedata2.mesh;
        const rubber = (filedata1.rubber * 1000) + filedata2.rubber;
        const uranium = (filedata1.uranium * 1000) + filedata2.uranium;
        const resin = (filedata1.resin * 1000) + filedata2.resin;
        const carbon = (filedata1.carbon * 1000) + filedata2.carbon;
        const clay = (filedata1.clay * 1000) + filedata2.clay;
        const soil = (filedata1.soil * 1000) + filedata2.soil;
        const water = (filedata1.water * 1000) + filedata2.water;
        const cement = (filedata1.cement * 1000) + filedata2.cement;
        const concrete = (filedata1.concrete * 1000) + filedata2.concrete;
        const steelsheet = (filedata1.steelsheet * 1000) + filedata2.steelsheet;
        const tape = (filedata1.tape * 1000) + filedata2.tape;
        const brick = (filedata1.brick * 1000) + filedata2.brick;
        const steel = (filedata1.steel * 1000) + filedata2.steel;
        const steelpart = (filedata1.steelpart * 1000) + filedata2.steelpart;
        const glue = (filedata1.glue * 1000) + filedata2.glue;
        const paper = (filedata1.paper * 1000) + filedata2.paper;
        const salt = (filedata1.salt * 1000) + filedata2.salt;
        const flower = (filedata1.flower * 1000) + filedata2.flower;
        const bakingpowder = (filedata1.bakingpowder * 1000) + filedata2.bakingpowder;
        const bread = (filedata1.bread * 1000) + filedata2.bread;
        const rice = (filedata1.rice * 1000) + filedata2.rice;
        const rye = (filedata1.rye * 1000) + filedata2.rye;
        const oats = (filedata1.oats * 1000) + filedata2.oats;
        const corn = (filedata1.corn * 1000) + filedata2.corn;
        const barley = (filedata1.barley * 1000) + filedata2.barley;
        const cassava = (filedata1.cassava * 1000) + filedata2.cassava;
        const soybean = (filedata1.soybean * 1000) + filedata2.soybean;
        const sorghum = (filedata1.sorghum * 1000) + filedata2.sorghum;
        const wheat = (filedata1.wheat * 1000) + filedata2.wheat;
        const cocoabean = (filedata1.cocoabean * 1000) + filedata2.cocoabean;
        const coffeebean = (filedata1.coffeebean * 1000) + filedata2.coffeebean;
        const sugar = (filedata1.sugar * 1000) + filedata2.sugar;
        const asparagus = (filedata1.asparagus * 1000) + filedata2.asparagus;
        const eggplant = (filedata1.eggplant * 1000) + filedata2.eggplant;
        const broccoli = (filedata1.broccoli * 1000) + filedata2.broccoli;
        const cabbage = (filedata1.cabbage * 1000) + filedata2.cabbage;
        const avocado = (filedata1.avocado * 1000) + filedata2.avocado;
        const brusselssprout = (filedata1.brusselssprout * 1000) + filedata2.brusselssprout;
        const carrot = (filedata1.carrot * 1000) + filedata2.carrot;
        const beetroot = (filedata1.beetroot * 1000) + filedata2.beetroot;
        const garlic = (filedata1.garlic * 1000) + filedata2.garlic;
        const celery = (filedata1.celery * 1000) + filedata2.celery;
        const cucumber = (filedata1.cucumber * 1000) + filedata2.cucumber;
        const greenbean = (filedata1.greenbean * 1000) + filedata2.greenbean;
        const leek = (filedata1.leek * 1000) + filedata2.leek;
        const lettuce = (filedata1.lettuce * 1000) + filedata2.lettuce;
        const mushroom = (filedata1.mushroom * 1000) + filedata2.mushroom;
        const onion = (filedata1.onion * 1000) + filedata2.onion;
        const pea = (filedata1.pea * 1000) + filedata2.pea;
        const pumpkin = (filedata1.pumpkin * 1000) + filedata2.pumpkin;
        const radish = (filedata1.radish * 1000) + filedata2.radish;
        const rhubarb = (filedata1.rhubarb * 1000) + filedata2.rhubarb;
        const sweetpepper = (filedata1.sweetpepper * 1000) + filedata2.sweetpepper;
        const spinach = (filedata1.spinach * 1000) + filedata2.spinach;
        const tomato = (filedata1.tomato * 1000) + filedata2.tomato;
        const sweetpotato = (filedata1.sweetpotato * 1000) + filedata2.sweetpotato;
        const yam = (filedata1.yam * 1000) + filedata2.yam;
        const potato = (filedata1.potato * 1000) + filedata2.potato;
        const acerola = (filedata1.acerola * 1000) + filedata2.acerola;
        const apple = (filedata1.apple * 1000) + filedata2.apple;
        const apricot = (filedata1.apricot * 1000) + filedata2.apricot;
        const banana = (filedata1.banana * 1000) + filedata2.banana;
        const blackberry = (filedata1.blackberry * 1000) + filedata2.blackberry;
        const blackcurrant = (filedata1.blackcurrant * 1000) + filedata2.blackcurrant;
        const blueberry = (filedata1.blueberry * 1000) + filedata2.blueberry;
        const breadfruit = (filedata1.breadfruit * 1000) + filedata2.breadfruit;
        const cantaloupe = (filedata1.cantaloupe * 1000) + filedata2.cantaloupe;
        const cherry = (filedata1.cherry * 1000) + filedata2.cherry;
        const clementine = (filedata1.clementine * 1000) + filedata2.clementine;
        const coconut = (filedata1.coconut * 1000) + filedata2.coconut;
        const cranberry = (filedata1.cranberry * 1000) + filedata2.cranberry;
        const datefruit = (filedata1.datefruit * 1000) + filedata2.datefruit;
        const fig = (filedata1.fig * 1000) + filedata2.fig;
        const gooseberry = (filedata1.gooseberry * 1000) + filedata2.gooseberry;
        const grapefruit = (filedata1.grapefruit * 1000) + filedata2.grapefruit;
        const grape = (filedata1.grape * 1000) + filedata2.grape;
        const guava = (filedata1.guava * 1000) + filedata2.guava;
        const honeydewmelon = (filedata1.honeydewmelon * 1000) + filedata2.honeydewmelon;
        const jackfruit = (filedata1.jackfruit * 1000) + filedata2.jackfruit;
        const jujubefruit = (filedata1.jujubefruit * 1000) + filedata2.jujubefruit;
        const kiwi = (filedata1.kiwi * 1000) + filedata2.kiwi;
        const kumquat = (filedata1.kumquat * 1000) + filedata2.kumquat;
        const lemon = (filedata1.lemon * 1000) + filedata2.lemon;
        const lime = (filedata1.lime * 1000) + filedata2.lime;
        const lychee = (filedata1.lychee * 1000) + filedata2.lychee;
        const mandarin = (filedata1.mandarin * 1000) + filedata2.mandarin;
        const mango = (filedata1.mango * 1000) + filedata2.mango;
        const mulberry = (filedata1.mulberry * 1000) + filedata2.mulberry;
        const olive = (filedata1.olive * 1000) + filedata2.olive;
        const orange = (filedata1.orange * 1000) + filedata2.orange;
        const papaya = (filedata1.papaya * 1000) + filedata2.papaya;
        const passionfruit = (filedata1.passionfruit * 1000) + filedata2.passionfruit;
        const peach = (filedata1.peach * 1000) + filedata2.peach;
        const pear = (filedata1.pear * 1000) + filedata2.pear;
        const dragonfruit = (filedata1.dragonfruit * 1000) + filedata2.dragonfruit;
        const pineapple = (filedata1.pineapple * 1000) + filedata2.pineapple;
        const plum = (filedata1.plum * 1000) + filedata2.plum;
        const pomegranate = (filedata1.pomegranate * 1000) + filedata2.pomegranate;
        const prune = (filedata1.prune * 1000) + filedata2.prune;
        const raspberry = (filedata1.raspberry * 1000) + filedata2.raspberry;
        const strawberry = (filedata1.strawberry * 1000) + filedata2.strawberry;
        const tangerine = (filedata1.tangerine * 1000) + filedata2.tangerine;
        const watermelon = (filedata1.watermelon * 1000) + filedata2.watermelon;
        const blackbean = (filedata1.blackbean * 1000) + filedata2.blackbean;
        const blackeyedpea = (filedata1.blackeyedpea * 1000) + filedata2.blackeyedpea;
        const cannellinibean = (filedata1.cannellinibean * 1000) + filedata2.cannellinibean;
        const chickpea = (filedata1.chickpea * 1000) + filedata2.chickpea;
        const greatnorthernbean = (filedata1.greatnorthernbean * 1000) + filedata2.greatnorthernbean;
        const kidneybean = (filedata1.kidneybean * 1000) + filedata2.kidneybean;
        const limabean = (filedata1.limabean * 1000) + filedata2.limabean;
        const pintobean = (filedata1.pintobean * 1000) + filedata2.pintobean;
        const favabean = (filedata1.favabean * 1000) + filedata2.favabean;
        const navybean = (filedata1.navybean * 1000) + filedata2.navybean;
        const adzukibean = (filedata1.adzukibean * 1000) + filedata2.adzukibean;
        const edamame = (filedata1.edamame * 1000) + filedata2.edamame;
        const mungbean = (filedata1.mungbean * 1000) + filedata2.mungbean;
        const cranberrybean = (filedata1.cranberrybean * 1000) + filedata2.cranberrybean;
        const acorn = (filedata1.acorn * 1000) + filedata2.acorn;
        const almond = (filedata1.almond * 1000) + filedata2.almond;
        const beech = (filedata1.beech * 1000) + filedata2.beech;
        const brazilnut = (filedata1.brazilnut * 1000) + filedata2.brazilnut;
        const candlenut = (filedata1.candlenut * 1000) + filedata2.candlenut;
        const cashew = (filedata1.cashew * 1000) + filedata2.cashew;
        const chestnut = (filedata1.chestnut * 1000) + filedata2.chestnut;
        const chileanhazel = (filedata1.chileanhazel * 1000) + filedata2.chileanhazel;
        const egusi = (filedata1.egusi * 1000) + filedata2.egusi;
        const guineapeanut = (filedata1.guineapeanut * 1000) + filedata2.guineapeanut;
        const hazelnut = (filedata1.hazelnut * 1000) + filedata2.hazelnut;
        const hickory = (filedata1.hickory * 1000) + filedata2.hickory;
        const kolanut = (filedata1.kolanut * 1000) + filedata2.kolanut;
        const macadamia = (filedata1.macadamia * 1000) + filedata2.macadamia;
        const malabaralmond = (filedata1.malabaralmond * 1000) + filedata2.malabaralmond;
        const malabarchestnut = (filedata1.malabarchestnut * 1000) + filedata2.malabarchestnut;
        const mamoncillo = (filedata1.mamoncillo * 1000) + filedata2.mamoncillo;
        const mongongo = (filedata1.mongongo * 1000) + filedata2.mongongo;
        const ogbono = (filedata1.ogbono * 1000) + filedata2.ogbono;
        const paradisenut = (filedata1.paradisenut * 1000) + filedata2.paradisenut;
        const pili = (filedata1.pili * 1000) + filedata2.pili;
        const pistachio = (filedata1.pistachio * 1000) + filedata2.pistachio;
        const sheanut = (filedata1.sheanut * 1000) + filedata2.sheanut;
        const walnut = (filedata1.walnut * 1000) + filedata2.walnut;
        const cycads = (filedata1.cycads * 1000) + filedata2.cycads;
        const ginkgo = (filedata1.ginkgo * 1000) + filedata2.ginkgo;
        const gnetum = (filedata1.gnetum * 1000) + filedata2.gnetum;
        const juniper = (filedata1.juniper * 1000) + filedata2.juniper;
        const pinenut = (filedata1.pinenut * 1000) + filedata2.pinenut;
        const podocarps = (filedata1.podocarps * 1000) + filedata2.podocarps;
        const fingermillet = (filedata1.fingermillet * 1000) + filedata2.fingermillet;
        const teff = (filedata1.teff * 1000) + filedata2.teff;
        const fonio = (filedata1.fonio * 1000) + filedata2.fonio;
        const prosomillet = (filedata1.prosomillet * 1000) + filedata2.prosomillet;
        const pearlmillet = (filedata1.pearlmillet * 1000) + filedata2.pearlmillet;
        const foxtailmillet = (filedata1.foxtailmillet * 1000) + filedata2.foxtailmillet;
        const triticale = (filedata1.triticale * 1000) + filedata2.triticale;
        const durum = (filedata1.durum * 1000) + filedata2.durum;
        const einkorn = (filedata1.einkorn * 1000) + filedata2.einkorn;
        const spelt = (filedata1.spelt * 1000) + filedata2.spelt;
        const kamut = (filedata1.kamut * 1000) + filedata2.kamut;
        const emmer = (filedata1.emmer * 1000) + filedata2.emmer;
        const kernza = (filedata1.kernza * 1000) + filedata2.kernza;
        const amaranth = (filedata1.amaranth * 1000) + filedata2.amaranth;
        const kaniwa = (filedata1.kaniwa * 1000) + filedata2.kaniwa;
        const quinoa = (filedata1.quinoa * 1000) + filedata2.quinoa;
        const hanza = (filedata1.hanza * 1000) + filedata2.hanza;
        const chia = (filedata1.chia * 1000) + filedata2.chia;
        const flax = (filedata1.flax * 1000) + filedata2.flax;
        const breadnut = (filedata1.breadnut * 1000) + filedata2.breadnut;
        const sesame = (filedata1.sesame * 1000) + filedata2.sesame;
        const buckwheat = (filedata1.buckwheat * 1000) + filedata2.buckwheat;
        const thyme = (filedata1.thyme * 1000) + filedata2.thyme;
        const basil = (filedata1.basil * 1000) + filedata2.basil;
        const oregano = (filedata1.oregano * 1000) + filedata2.oregano;
        const rosemary = (filedata1.rosemary * 1000) + filedata2.rosemary;
        const fennelseed = (filedata1.fennelseed * 1000) + filedata2.fennelseed;
        const bayleaf = (filedata1.bayleaf * 1000) + filedata2.bayleaf;
        const chilipowder = (filedata1.chilipowder * 1000) + filedata2.chilipowder;
        const smokedpaprika = (filedata1.smokedpaprika * 1000) + filedata2.smokedpaprika;
        const cayenne = (filedata1.cayenne * 1000) + filedata2.cayenne;
        const cumin = (filedata1.cumin * 1000) + filedata2.cumin;
        const groundcardamom = (filedata1.groundcardamom * 1000) + filedata2.groundcardamom;
        const currypowder = (filedata1.currypowder * 1000) + filedata2.currypowder;
        const onionpowder = (filedata1.onionpowder * 1000) + filedata2.onionpowder;
        const garlicpowder = (filedata1.garlicpowder * 1000) + filedata2.garlicpowder;
        const groundmustard = (filedata1.groundmustard * 1000) + filedata2.groundmustard;
        const clove = (filedata1.clove * 1000) + filedata2.clove;
        const nutmeg = (filedata1.nutmeg * 1000) + filedata2.nutmeg;
        const cinnamon = (filedata1.cinnamon * 1000) + filedata2.cinnamon;
        const groundginger = (filedata1.groundginger * 1000) + filedata2.groundginger;
        const mace = (filedata1.mace * 1000) + filedata2.mace;
        const pepper = (filedata1.pepper * 1000) + filedata2.pepper;
        const cow = (filedata1.cow * 1000) + filedata2.cow;
        const pig = (filedata1.pig * 1000) + filedata2.pig;
        const horse = (filedata1.horse * 1000) + filedata2.horse;
        const chicken = (filedata1.chicken * 1000) + filedata2.chicken;
        const sheep = (filedata1.sheep * 1000) + filedata2.sheep;
        const goat = (filedata1.goat * 1000) + filedata2.goat;
        const llama = (filedata1.llama * 1000) + filedata2.llama;
        const rabbit = (filedata1.rabbit * 1000) + filedata2.rabbit;
        const egg = (filedata1.egg * 1000) + filedata2.egg;
        const fish = (filedata1.fish * 1000) + filedata2.fish;
        const meat = (filedata1.meat * 1000) + filedata2.meat;
        const phenolicfoam = (filedata1.phenolicfoam * 1000) + filedata2.phenolicfoam;
        const polyurethane = (filedata1.polyurethane * 1000) + filedata2.polyurethane;
        const xps = (filedata1.xps * 1000) + filedata2.xps;
        const rockwool = (filedata1.rockwool * 1000) + filedata2.rockwool;
        const foamglass = (filedata1.foamglass * 1000) + filedata2.foamglass;
        const glasswool = (filedata1.glasswool * 1000) + filedata2.glasswool;
        const doubleglass = (filedata1.doubleglass * 1000) + filedata2.doubleglass;
        const tripleglass = (filedata1.tripleglass * 1000) + filedata2.tripleglass;
        const fabric = (filedata1.fabric * 1000) + filedata2.fabric;
        const cotton = (filedata1.cotton * 1000) + filedata2.cotton;
        const fibre = (filedata1.fibre * 1000) + filedata2.fibre;
        const carbonfibre = (filedata1.carbonfibre * 1000) + filedata2.carbonfibre;
        const chemical = (filedata1.chemical * 1000) + filedata2.chemical;
        const polymaterial = (filedata1.polymaterial * 1000) + filedata2.polymaterial;
        const acid = (filedata1.acid * 1000) + filedata2.acid;
        const catalyst = (filedata1.catalyst * 1000) + filedata2.catalyst;
        const chromepart = (filedata1.chromepart * 1000) + filedata2.chromepart;
        const chrome = (filedata1.chrome * 1000) + filedata2.chrome;
        const brasspart = (filedata1.brasspart * 1000) + filedata2.brasspart;
        const brass = (filedata1.brass * 1000) + filedata2.brass;
        const diamond = (filedata1.diamond * 1000) + filedata2.diamond;
        const gold = (filedata1.gold * 1000) + filedata2.gold;
        const platinum = (filedata1.platinum * 1000) + filedata2.platinum;
        const silver = (filedata1.silver * 1000) + filedata2.silver;
        const copper = (filedata1.copper * 1000) + filedata2.copper;
        const iron = (filedata1.iron * 1000) + filedata2.iron;
        const lithium = (filedata1.lithium * 1000) + filedata2.lithium;
        const cobalt = (filedata1.cobalt * 1000) + filedata2.cobalt;
        const titanium = (filedata1.titanium * 1000) + filedata2.titanium;
        const tungsten = (filedata1.tungsten * 1000) + filedata2.tungsten;
        const nickel = (filedata1.nickel * 1000) + filedata2.nickel;
        const magnesium = (filedata1.magnesium * 1000) + filedata2.magnesium;
        const lead = (filedata1.lead * 1000) + filedata2.lead;
        const tin = (filedata1.tin * 1000) + filedata2.tin;
        const mercury = (filedata1.mercury * 1000) + filedata2.mercury;
        const bismuth = (filedata1.bismuth * 1000) + filedata2.bismuth;
        const rodium = (filedata1.rodium * 1000) + filedata2.rodium;
        const osmium = (filedata1.osmium * 1000) + filedata2.osmium;
        const palladium = (filedata1.palladium * 1000) + filedata2.palladium;
        const iridium = (filedata1.iridium * 1000) + filedata2.iridium;
        const ruthenium = (filedata1.ruthenium * 1000) + filedata2.ruthenium;
        const plutonium = (filedata1.plutonium * 1000) + filedata2.plutonium;
        const componentelectric = (filedata1.componentelectric * 1000) + filedata2.componentelectric;
        const componentinterior = (filedata1.componentinterior * 1000) + filedata2.componentinterior;
        const componentclothing = (filedata1.componentclothing * 1000) + filedata2.componentclothing;
        const componentstarting = (filedata1.componentstarting * 1000) + filedata2.componentstarting;

        file.set("woodplank", woodplank)
        file.set("woodpart", woodpart)
        file.set("log", log)
        file.set("bamboo", bamboo)
        file.set("cedar", cedar)
        file.set("fir", fir)
        file.set("pine", pine)
        file.set("redwood", redwood)
        file.set("ash", ash)
        file.set("birch", birch)
        file.set("cherrywood", cherrywood)
        file.set("mahogany", mahogany)
        file.set("maple", maple)
        file.set("oak", oak)
        file.set("poplar", poplar)
        file.set("teak", teak)
        file.set("compositewood", compositewood)
        file.set("pipe", pipe)
        file.set("plasticpart", plasticpart)
        file.set("plastic", plastic)
        file.set("glass", glass)
        file.set("sand", sand)
        file.set("plexiglass", plexiglass)
        file.set("granite", granite)
        file.set("marble", marble)
        file.set("quartz", quartz)
        file.set("chalk", chalk)
        file.set("slate", slate)
        file.set("basalt", basalt)
        file.set("pebble", pebble)
        file.set("limestone", limestone)
        file.set("flint", flint)
        file.set("onyx", onyx)
        file.set("travertine", travertine)
        file.set("oil", oil)
        file.set("coal", coal)
        file.set("ironore", ironore)
        file.set("copperore", copperore)
        file.set("goldore", goldore)
        file.set("gas", gas)
        file.set("ceramic", ceramic)
        file.set("cork", cork)
        file.set("mesh", mesh)
        file.set("rubber", rubber)
        file.set("uranium", uranium)
        file.set("resin", resin)
        file.set("carbon", carbon)
        file.set("clay", clay)
        file.set("soil", soil)
        file.set("water", water)
        file.set("cement", cement)
        file.set("concrete", concrete)
        file.set("steelsheet", steelsheet)
        file.set("tape", tape)
        file.set("brick", brick)
        file.set("steel", steel)
        file.set("steelpart", steelpart)
        file.set("glue", glue);
        file.set("paper", paper);
        file.set("salt", salt)
        file.set("flower", flower)
        file.set("bakingpowder", bakingpowder)
        file.set("bread", bread)
        file.set("rice", rice)
        file.set("rye", rye)
        file.set("oats", oats)
        file.set("corn", corn)
        file.set("barley", barley)
        file.set("cassava", cassava)
        file.set("soybean", soybean)
        file.set("sorghum", sorghum)
        file.set("wheat", wheat)
        file.set("cocoabean", cocoabean)
        file.set("coffeebean", coffeebean)
        file.set("sugar", sugar)
        file.set("asparagus", asparagus)
        file.set("eggplant", eggplant)
        file.set("broccoli", broccoli)
        file.set("cabbage", cabbage)
        file.set("avocado", avocado)
        file.set("brusselssprout", brusselssprout)
        file.set("carrot", carrot)
        file.set("beetroot", beetroot)
        file.set("garlic", garlic)
        file.set("celery", celery)
        file.set("cucumber", cucumber)
        file.set("greenbean", greenbean)
        file.set("leek", leek)
        file.set("lettuce", lettuce)
        file.set("mushroom", mushroom)
        file.set("onion", onion)
        file.set("pea", pea)
        file.set("pumpkin", pumpkin)
        file.set("radish", radish)
        file.set("rhubarb", rhubarb)
        file.set("sweetpepper", sweetpepper)
        file.set("spinach", spinach)
        file.set("tomato", tomato)
        file.set("sweetpotato", sweetpotato)
        file.set("yam", yam)
        file.set("potato", potato)
        file.set("acerola", acerola)
        file.set("apple", apple)
        file.set("apricot", apricot)
        file.set("banana", banana)
        file.set("blackberry", blackberry)
        file.set("blackcurrant", blackcurrant)
        file.set("blueberry", blueberry)
        file.set("breadfruit", breadfruit)
        file.set("cantaloupe", cantaloupe)
        file.set("cherry", cherry)
        file.set("clementine", clementine)
        file.set("coconut", coconut)
        file.set("cranberry", cranberry)
        file.set("datefruit", datefruit)
        file.set("fig", fig)
        file.set("gooseberry", gooseberry)
        file.set("grapefruit", grapefruit)
        file.set("grape", grape)
        file.set("guava", guava)
        file.set("honeydewmelon", honeydewmelon)
        file.set("jackfruit", jackfruit)
        file.set("jujubefruit", jujubefruit)
        file.set("kiwi", kiwi)
        file.set("kumquat", kumquat)
        file.set("lemon", lemon)
        file.set("lime", lime)
        file.set("lychee", lychee)
        file.set("mandarin", mandarin)
        file.set("mango", mango)
        file.set("mulberry", mulberry)
        file.set("olive", olive)
        file.set("orange", orange)
        file.set("papaya", papaya)
        file.set("passionfruit", passionfruit)
        file.set("peach", peach)
        file.set("pear", pear)
        file.set("dragonfruit", dragonfruit)
        file.set("pineapple", pineapple)
        file.set("plum", plum)
        file.set("pomegranate", pomegranate)
        file.set("prune", prune)
        file.set("raspberry", raspberry)
        file.set("strawberry", strawberry)
        file.set("tangerine", tangerine)
        file.set("watermelon", watermelon)
        file.set("blackbean", blackbean)
        file.set("blackeyedpea", blackeyedpea)
        file.set("cannellinibean", cannellinibean)
        file.set("chickpea", chickpea)
        file.set("greatnorthernbean", greatnorthernbean)
        file.set("kidneybean", kidneybean)
        file.set("limabean", limabean)
        file.set("pintobean", pintobean)
        file.set("favabean", favabean)
        file.set("navybean", navybean)
        file.set("adzukibean", adzukibean)
        file.set("edamame", edamame)
        file.set("mungbean", mungbean)
        file.set("cranberrybean", cranberrybean)
        file.set("acorn", acorn)
        file.set("almond", almond)
        file.set("beech", beech)
        file.set("brazilnut", brazilnut)
        file.set("candlenut", candlenut)
        file.set("cashew", cashew)
        file.set("chestnut", chestnut)
        file.set("chileanhazel", chileanhazel)
        file.set("egusi", egusi)
        file.set("guineapeanut", guineapeanut)
        file.set("hazelnut", hazelnut)
        file.set("hickory", hickory)
        file.set("kolanut", kolanut)
        file.set("macadamia", macadamia)
        file.set("malabaralmond", malabaralmond)
        file.set("malabarchestnut", malabarchestnut)
        file.set("mamoncillo", mamoncillo)
        file.set("mongongo", mongongo)
        file.set("ogbono", ogbono)
        file.set("paradisenut", paradisenut)
        file.set("pili", pili)
        file.set("pistachio", pistachio)
        file.set("sheanut", sheanut)
        file.set("walnut", walnut)
        file.set("cycads", cycads)
        file.set("ginkgo", ginkgo)
        file.set("gnetum", gnetum)
        file.set("juniper", juniper)
        file.set("pinenut", pinenut)
        file.set("podocarps", podocarps)
        file.set("fingermillet", fingermillet)
        file.set("teff", teff)
        file.set("fonio", fonio)
        file.set("prosomillet", prosomillet)
        file.set("pearlmillet", pearlmillet)
        file.set("foxtailmillet", foxtailmillet)
        file.set("triticale", triticale)
        file.set("durum", durum)
        file.set("einkorn", einkorn)
        file.set("spelt", spelt)
        file.set("kamut", kamut)
        file.set("emmer", emmer)
        file.set("kernza", kernza)
        file.set("amaranth", amaranth)
        file.set("kaniwa", kaniwa)
        file.set("quinoa", quinoa)
        file.set("hanza", hanza)
        file.set("chia", chia)
        file.set("flax", flax)
        file.set("breadnut", breadnut)
        file.set("sesame", sesame)
        file.set("buckwheat", buckwheat)
        file.set("thyme", thyme)
        file.set("basil", basil)
        file.set("oregano", oregano)
        file.set("rosemary", rosemary)
        file.set("fennelseed", fennelseed)
        file.set("bayleaf", bayleaf)
        file.set("chilipowder", chilipowder)
        file.set("smokedpaprika", smokedpaprika)
        file.set("cayenne", cayenne)
        file.set("cumin", cumin)
        file.set("groundcardamom", groundcardamom)
        file.set("currypowder", currypowder)
        file.set("onionpowder", onionpowder)
        file.set("garlicpowder", garlicpowder)
        file.set("groundmustard", groundmustard)
        file.set("clove", clove)
        file.set("nutmeg", nutmeg)
        file.set("cinnamon", cinnamon)
        file.set("groundginger", groundginger)
        file.set("mace", mace)
        file.set("pepper", pepper)
        file.set("cow", cow)
        file.set("pig", pig)
        file.set("horse", horse)
        file.set("chicken", chicken)
        file.set("sheep", sheep)
        file.set("goat", goat)
        file.set("llama", llama)
        file.set("rabbit", rabbit)
        file.set("egg", egg)
        file.set("fish", fish)
        file.set("meat", meat)
        file.set("phenolicfoam", phenolicfoam)
        file.set("polyurethane", polyurethane)
        file.set("xps", xps)
        file.set("rockwool", rockwool)
        file.set("foamglass", foamglass)
        file.set("glasswool", glasswool)
        file.set("doubleglass", doubleglass)
        file.set("tripleglass", tripleglass)
        file.set("fabric", fabric)
        file.set("cotton", cotton)
        file.set("fibre", fibre)
        file.set("carbonfibre", carbonfibre)
        file.set("chemical", chemical)
        file.set("polymaterial", polymaterial)
        file.set("acid", acid)
        file.set("catalyst", catalyst)
        file.set("chromepart", chromepart)
        file.set("chrome", chrome)
        file.set("brasspart", brasspart)
        file.set("brass", brass)
        file.set("diamond", diamond)
        file.set("gold", gold)
        file.set("platinum", platinum)
        file.set("silver", silver)
        file.set("copper", copper)
        file.set("iron", iron)
        file.set("lithium", lithium)
        file.set("cobalt", cobalt)
        file.set("titanium", titanium)
        file.set("tungsten", tungsten)
        file.set("nickel", nickel)
        file.set("magnesium", magnesium)
        file.set("lead", lead)
        file.set("tin", tin)
        file.set("mercury", mercury)
        file.set("bismuth", bismuth)
        file.set("rodium", rodium)
        file.set("osmium", osmium)
        file.set("palladium", palladium)
        file.set("iridium", iridium)
        file.set("ruthenium", ruthenium)
        file.set("plutonium", plutonium)
        file.set("componentelectric", componentelectric)
        file.set("componentinterior", componentinterior)
        file.set("componentclothing", componentclothing)
        file.set("componentstarting", componentstarting)
        file.save()
    },
};