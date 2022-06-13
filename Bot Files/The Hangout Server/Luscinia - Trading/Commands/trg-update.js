// Bulk update de hele lijst.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "update",
    aliases: config.aliases.aliasestradingupdate,
    cooldown: config.cooldown.cooldowntradingupdate,
    permissions: config.permissions.permissiontradingupdate,
    description: "Bulk update data.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Received, check console.`)
        let file = editJsonFile(`./marketpricemax.json`); // target file
        const filedata = require('./../marketdynprice.json') // current data

        const woodplank = 4 * filedata.woodplank;
        const woodpart = 4 * filedata.woodpart;
        const log = 4 * filedata.log;
        const bamboo = 4 * filedata.bamboo;
        const cedar = 4 * filedata.cedar;
        const fir = 4 * filedata.fir;
        const pine = 4 * filedata.pine;
        const redwood = 4 * filedata.redwood;
        const ash = 4 * filedata.ash;
        const birch = 4 * filedata.birch;
        const cherrywood = 4 * filedata.cherrywood;
        const mahogany = 4 * filedata.mahogany;
        const maple = 4 * filedata.maple;
        const oak = 4 * filedata.oak;
        const poplar = 4 * filedata.poplar;
        const teak = 4 * filedata.teak;
        const compositewood = 4 * filedata.compositewood;
        const pipe = 4 * filedata.pipe;
        const plasticpart = 4 * filedata.plasticpart;
        const plastic = 4 * filedata.plastic;
        const glass = 4 * filedata.glass;
        const sand = 4 * filedata.sand;
        const plexiglass = 4 * filedata.plexiglass;
        const granite = 4 * filedata.granite;
        const marble = 4 * filedata.marble;
        const quartz = 4 * filedata.quartz;
        const chalk = 4 * filedata.chalk;
        const slate = 4 * filedata.slate;
        const basalt = 4 * filedata.basalt;
        const pebble = 4 * filedata.pebble;
        const limestone = 4 * filedata.limestone;
        const flint = 4 * filedata.flint;
        const onyx = 4 * filedata.onyx;
        const travertine = 4 * filedata.travertine;
        const oil = 4 * filedata.oil;
        const coal = 4 * filedata.coal;
        const ironore = 4 * filedata.ironore;
        const copperore = 4 * filedata.copperore;
        const goldore = 4 * filedata.goldore;
        const gas = 4 * filedata.gas;
        const ceramic = 4 * filedata.ceramic;
        const cork = 4 * filedata.cork;
        const mesh = 4 * filedata.mesh;
        const rubber = 4 * filedata.rubber;
        const uranium = 4 * filedata.uranium;
        const resin = 4 * filedata.resin;
        const carbon = 4 * filedata.carbon;
        const clay = 4 * filedata.clay;
        const soil = 4 * filedata.soil;
        const water = 4 * filedata.water;
        const cement = 4 * filedata.cement;
        const concrete = 4 * filedata.concrete;
        const steelsheet = 4 * filedata.steelsheet;
        const tape = 4 * filedata.tape;
        const brick = 4 * filedata.brick;
        const steel = 4 * filedata.steel;
        const steelpart = 4 * filedata.steelpart;
        const glue = 4 * filedata.glue;
        const paper = 4 * filedata.paper;
        const salt = 4 * filedata.salt;
        const flower = 4 * filedata.flower;
        const bakingpowder = 4 * filedata.bakingpowder;
        const bread = 4 * filedata.bread;
        const rice = 4 * filedata.rice;
        const rye = 4 * filedata.rye;
        const oats = 4 * filedata.oats;
        const corn = 4 * filedata.corn;
        const barley = 4 * filedata.barley;
        const cassava = 4 * filedata.cassava;
        const soybean = 4 * filedata.soybean;
        const sorghum = 4 * filedata.sorghum;
        const wheat = 4 * filedata.wheat;
        const cocoabean = 4 * filedata.cocoabean;
        const coffeebean = 4 * filedata.coffeebean;
        const sugar = 4 * filedata.sugar;
        const asparagus = 4 * filedata.asparagus;
        const eggplant = 4 * filedata.eggplant;
        const broccoli = 4 * filedata.broccoli;
        const cabbage = 4 * filedata.cabbage;
        const avocado = 4 * filedata.avocado;
        const brusselssprout = 4 * filedata.brusselssprout;
        const carrot = 4 * filedata.carrot;
        const beetroot = 4 * filedata.beetroot;
        const garlic = 4 * filedata.garlic;
        const celery = 4 * filedata.celery;
        const cucumber = 4 * filedata.cucumber;
        const greenbean = 4 * filedata.greenbean;
        const leek = 4 * filedata.leek;
        const lettuce = 4 * filedata.lettuce;
        const mushroom = 4 * filedata.mushroom;
        const onion = 4 * filedata.onion;
        const pea = 4 * filedata.pea;
        const pumpkin = 4 * filedata.pumpkin;
        const radish = 4 * filedata.radish;
        const rhubarb = 4 * filedata.rhubarb;
        const sweetpepper = 4 * filedata.sweetpepper;
        const spinach = 4 * filedata.spinach;
        const tomato = 4 * filedata.tomato;
        const sweetpotato = 4 * filedata.sweetpotato;
        const yam = 4 * filedata.yam;
        const potato = 4 * filedata.potato;
        const acerola = 4 * filedata.acerola;
        const apple = 4 * filedata.apple;
        const apricot = 4 * filedata.apricot;
        const banana = 4 * filedata.banana;
        const blackberry = 4 * filedata.blackberry;
        const blackcurrant = 4 * filedata.blackcurrant;
        const blueberry = 4 * filedata.blueberry;
        const breadfruit = 4 * filedata.breadfruit;
        const cantaloupe = 4 * filedata.cantaloupe;
        const cherry = 4 * filedata.cherry;
        const clementine = 4 * filedata.clementine;
        const coconut = 4 * filedata.coconut;
        const cranberry = 4 * filedata.cranberry;
        const datefruit = 4 * filedata.datefruit;
        const fig = 4 * filedata.fig;
        const gooseberry = 4 * filedata.gooseberry;
        const grapefruit = 4 * filedata.grapefruit;
        const grape = 4 * filedata.grape;
        const guava = 4 * filedata.guava;
        const honeydewmelon = 4 * filedata.honeydewmelon;
        const jackfruit = 4 * filedata.jackfruit;
        const jujubefruit = 4 * filedata.jujubefruit;
        const kiwi = 4 * filedata.kiwi;
        const kumquat = 4 * filedata.kumquat;
        const lemon = 4 * filedata.lemon;
        const lime = 4 * filedata.lime;
        const lychee = 4 * filedata.lychee;
        const mandarin = 4 * filedata.mandarin;
        const mango = 4 * filedata.mango;
        const mulberry = 4 * filedata.mulberry;
        const olive = 4 * filedata.olive;
        const orange = 4 * filedata.orange;
        const papaya = 4 * filedata.papaya;
        const passionfruit = 4 * filedata.passionfruit;
        const peach = 4 * filedata.peach;
        const pear = 4 * filedata.pear;
        const dragonfruit = 4 * filedata.dragonfruit;
        const pineapple = 4 * filedata.pineapple;
        const plum = 4 * filedata.plum;
        const pomegranate = 4 * filedata.pomegranate;
        const prune = 4 * filedata.prune;
        const raspberry = 4 * filedata.raspberry;
        const strawberry = 4 * filedata.strawberry;
        const tangerine = 4 * filedata.tangerine;
        const watermelon = 4 * filedata.watermelon;
        const blackbean = 4 * filedata.blackbean;
        const blackeyedpea = 4 * filedata.blackeyedpea;
        const cannellinibean = 4 * filedata.cannellinibean;
        const chickpea = 4 * filedata.chickpea;
        const greatnorthernbean = 4 * filedata.greatnorthernbean;
        const kidneybean = 4 * filedata.kidneybean;
        const limabean = 4 * filedata.limabean;
        const pintobean = 4 * filedata.pintobean;
        const favabean = 4 * filedata.favabean;
        const navybean = 4 * filedata.navybean;
        const adzukibean = 4 * filedata.adzukibean;
        const edamame = 4 * filedata.edamame;
        const mungbean = 4 * filedata.mungbean;
        const cranberrybean = 4 * filedata.cranberrybean;
        const acorn = 4 * filedata.acorn
        const almond = 4 * filedata.almond
        const beech = 4 * filedata.beech
        const brazilnut = 4 * filedata.brazilnut
        const candlenut = 4 * filedata.candlenut
        const cashew = 4 * filedata.cashew
        const chestnut = 4 * filedata.chestnut
        const chileanhazel = 4 * filedata.chileanhazel
        const egusi = 4 * filedata.egusi
        const guineapeanut = 4 * filedata.guineapeanut
        const hazelnut = 4 * filedata.hazelnut
        const hickory = 4 * filedata.hickory
        const kolanut = 4 * filedata.kolanut
        const macadamia = 4 * filedata.macadamia
        const malabaralmond = 4 * filedata.malabaralmond
        const malabarchestnut = 4 * filedata.malabarchestnut
        const mamoncillo = 4 * filedata.mamoncillo
        const mongongo = 4 * filedata.mongongo
        const ogbono = 4 * filedata.ogbono
        const paradisenut = 4 * filedata.paradisenut
        const pili = 4 * filedata.pili
        const pistachio = 4 * filedata.pistachio
        const sheanut = 4 * filedata.sheanut
        const walnut = 4 * filedata.walnut
        const cycads = 4 * filedata.cycads
        const ginkgo = 4 * filedata.ginkgo
        const gnetum = 4 * filedata.gnetum
        const juniper = 4 * filedata.juniper
        const pinenut = 4 * filedata.pinenut
        const podocarps = 4 * filedata.podocarps
        const fingermillet = 4 * filedata.fingermillet
        const teff = 4 * filedata.teff
        const fonio = 4 * filedata.fonio
        const prosomillet = 4 * filedata.prosomillet
        const pearlmillet = 4 * filedata.pearlmillet
        const foxtailmillet = 4 * filedata.foxtailmillet
        const triticale = 4 * filedata.triticale
        const durum = 4 * filedata.durum
        const einkorn = 4 * filedata.einkorn
        const spelt = 4 * filedata.spelt
        const kamut = 4 * filedata.kamut
        const emmer = 4 * filedata.emmer
        const kernza = 4 * filedata.kernza
        const amaranth = 4 * filedata.amaranth
        const kaniwa = 4 * filedata.kaniwa
        const quinoa = 4 * filedata.quinoa
        const hanza = 4 * filedata.hanza
        const chia = 4 * filedata.chia
        const flax = 4 * filedata.flax
        const breadnut = 4 * filedata.breadnut
        const sesame = 4 * filedata.sesame
        const buckwheat = 4 * filedata.buckwheat
        const thyme = 4 * filedata.thyme;
        const basil = 4 * filedata.basil;
        const oregano = 4 * filedata.oregano;
        const rosemary = 4 * filedata.rosemary;
        const fennelseed = 4 * filedata.fennelseed;
        const bayleaf = 4 * filedata.bayleaf;
        const chilipowder = 4 * filedata.chilipowder;
        const smokedpaprika = 4 * filedata.smokedpaprika;
        const cayenne = 4 * filedata.cayenne;
        const cumin = 4 * filedata.cumin;
        const groundcardamom = 4 * filedata.groundcardamom;
        const currypowder = 4 * filedata.currypowder;
        const onionpowder = 4 * filedata.onionpowder;
        const garlicpowder = 4 * filedata.garlicpowder;
        const groundmustard = 4 * filedata.groundmustard;
        const clove = 4 * filedata.clove;
        const nutmeg = 4 * filedata.nutmeg;
        const cinnamon = 4 * filedata.cinnamon;
        const groundginger = 4 * filedata.groundginger;
        const mace = 4 * filedata.mace;
        const pepper = 4 * filedata.pepper;
        const cow = 4 * filedata.cow;
        const pig = 4 * filedata.pig;
        const horse = 4 * filedata.horse;
        const chicken = 4 * filedata.chicken;
        const sheep = 4 * filedata.sheep;
        const goat = 4 * filedata.goat;
        const llama = 4 * filedata.llama;
        const rabbit = 4 * filedata.rabbit;
        const egg = 4 * filedata.egg;
        const fish = 4 * filedata.fish;
        const meat = 4 * filedata.meat;
        const phenolicfoam = 4 * filedata.phenolicfoam;
        const polyurethane = 4 * filedata.polyurethane;
        const xps = 4 * filedata.xps;
        const rockwool = 4 * filedata.rockwool;
        const foamglass = 4 * filedata.foamglass;
        const glasswool = 4 * filedata.glasswool;
        const doubleglass = 4 * filedata.doubleglass;
        const tripleglass = 4 * filedata.tripleglass;
        const fabric = 4 * filedata.fabric;
        const cotton = 4 * filedata.cotton;
        const fibre = 4 * filedata.fibre;
        const carbonfibre = 4 * filedata.carbonfibre;
        const chemical = 4 * filedata.chemical;
        const polymaterial = 4 * filedata.polymaterial;
        const acid = 4 * filedata.acid;
        const catalyst = 4 * filedata.catalyst;
        const chromepart = 4 * filedata.chromepart;
        const chrome = 4 * filedata.chrome;
        const brasspart = 4 * filedata.brasspart;
        const brass = 4 * filedata.brass;
        const diamond = 4 * filedata.diamond;
        const gold = 4 * filedata.gold;
        const platinum = 4 * filedata.platinum;
        const silver = 4 * filedata.silver;
        const iron = 4 * filedata.iron;
        const copper = 4 * filedata.copper;
        const lithium = 4 * filedata.lithium;
        const cobalt = 4 * filedata.cobalt;
        const titanium = 4 * filedata.titanium;
        const tungsten = 4 * filedata.tungsten;
        const nickel = 4 * filedata.nickel;
        const magnesium = 4 * filedata.magnesium;
        const lead = 4 * filedata.lead;
        const tin = 4 * filedata.tin;
        const mercury = 4 * filedata.mercury;
        const bismuth = 4 * filedata.bismuth;
        const rhodium = 4 * filedata.rhodium;
        const osmium = 4 * filedata.osmium;
        const palladium = 4 * filedata.palladium;
        const iridium = 4 * filedata.iridium;
        const ruthenium = 4 * filedata.ruthenium;
        const plutonium = 4 * filedata.plutonium;
        const componentelectric = 4 * filedata.componentelectric;
        const componentinterior = 4 * filedata.componentinterior;
        const componentclothing = 4 * filedata.componentclothing;
        const componentstarting = 4 * filedata.componentstarting;

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
        file.set("rhodium", rhodium)
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