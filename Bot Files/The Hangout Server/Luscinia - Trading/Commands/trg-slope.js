// Bereken rico

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "slope",
    aliases: config.aliases.aliasesslope,
    cooldown: config.cooldown.cooldownslope,
    permissions: config.permissions.permissionslope,
    description: "Calculate the slope.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Received, check console.`);
        let file = editJsonFile(`./formula-a.json`) // target file
        const filedata1 = require('./../marketpricemin.json') // y
        const filedata2 = require('./../marketpricemax.json') // y
        const filedata3 = require('./../marketstockmin.json') // x
        const filedata4 = require('./../marketstockmax.json') // x

        const steel = (filedata2.steel - filedata1.steel) / (filedata4.steel - filedata3.steel) * -1;
        const steelpart = (filedata2.steelpart - filedata1.steelpart) / (filedata4.steelpart - filedata3.steelpart) * -1;
        const iron = (filedata2.iron - filedata1.iron) / (filedata4.iron - filedata3.iron) * -1;
        const carbon = (filedata2.carbon - filedata1.carbon) / (filedata4.carbon - filedata3.carbon) * -1;
        const brick = (filedata2.brick - filedata1.brick) / (filedata4.brick - filedata3.brick) * -1;
        const clay = (filedata2.clay - filedata1.clay) / (filedata4.clay - filedata3.clay) * -1;
        const soil = (filedata2.soil - filedata1.soil) / (filedata4.soil - filedata3.soil) * -1;
        const water = (filedata2.water - filedata1.water) / (filedata4.water - filedata3.water) * -1;
        const woodplank = (filedata2.woodplank - filedata1.woodplank) / (filedata4.woodplank - filedata3.woodplank) * -1;
        const woodpart = (filedata2.woodpart - filedata1.woodpart) / (filedata4.woodpart - filedata3.woodpart) * -1;
        const wood = (filedata2.wood - filedata1.wood) / (filedata4.wood - filedata3.wood) * -1;
        const log = (filedata2.log - filedata1.log) / (filedata4.log - filedata3.log) * -1;
        const bamboo = (filedata2.bamboo - filedata1.bamboo) / (filedata4.bamboo - filedata3.bamboo) * -1;
        const pipe = (filedata2.pipe - filedata1.pipe) / (filedata4.pipe - filedata3.pipe) * -1;
        const plasticpart = (filedata2.plasticpart - filedata1.plasticpart) / (filedata4.plasticpart - filedata3.plasticpart) * -1;
        const plastic = (filedata2.plastic - filedata1.plastic) / (filedata4.plastic - filedata3.plastic) * -1;
        const glass = (filedata2.glass - filedata1.glass) / (filedata4.glass - filedata3.glass) * -1;
        const limestone = (filedata2.limestone - filedata1.limestone) / (filedata4.limestone - filedata3.limestone) * -1;
        const sand = (filedata2.sand - filedata1.sand) / (filedata4.sand - filedata3.sand) * -1;
        const plexiglass = (filedata2.plexiglass - filedata1.plexiglass) / (filedata4.plexiglass - filedata3.plexiglass) * -1;
        const granite = (filedata2.granite - filedata1.granite) / (filedata4.granite - filedata3.granite) * -1;
        const marble = (filedata2.marble - filedata1.marble) / (filedata4.marble - filedata3.marble) * -1;
        const quartz = (filedata2.quartz - filedata1.quartz) / (filedata4.quartz - filedata3.quartz) * -1;
        const chalk = (filedata2.chalk - filedata1.chalk) / (filedata4.chalk - filedata3.chalk) * -1;
        const slate = (filedata2.slate - filedata1.slate) / (filedata4.slate - filedata3.slate) * -1;
        const basalt = (filedata2.basalt - filedata1.basalt) / (filedata4.basalt - filedata3.basalt) * -1;
        const oil = (filedata2.oil - filedata1.oil) / (filedata4.oil - filedata3.oil) * -1;
        const coal = (filedata2.coal - filedata1.coal) / (filedata4.coal - filedata3.coal) * -1;
        const ironore = (filedata2.ironore - filedata1.ironore) / (filedata4.ironore - filedata3.ironore) * -1;
        const copperore = (filedata2.copperore - filedata1.copperore) / (filedata4.copperore - filedata3.copperore) * -1;
        const goldore = (filedata2.goldore - filedata1.goldore) / (filedata4.goldore - filedata3.goldore) * -1;
        const gas = (filedata2.gas - filedata1.gas) / (filedata4.gas - filedata3.gas) * -1;
        const ceramic = (filedata2.ceramic - filedata1.ceramic) / (filedata4.ceramic - filedata3.ceramic) * -1;
        const cork = (filedata2.cork - filedata1.cork) / (filedata4.cork - filedata3.cork) * -1;
        const mesh = (filedata2.mesh - filedata1.mesh) / (filedata4.mesh - filedata3.mesh) * -1;
        const rubber = (filedata2.rubber - filedata1.rubber) / (filedata4.rubber - filedata3.rubber) * -1;
        const uranium = (filedata2.uranium - filedata1.uranium) / (filedata4.uranium - filedata3.uranium) * -1;
        const rice = (filedata2.rice - filedata1.rice) / (filedata4.rice - filedata3.rice) * -1;
        const rye = (filedata2.rye - filedata1.rye) / (filedata4.rye - filedata3.rye) * -1;
        const oats = (filedata2.oats - filedata1.oats) / (filedata4.oats - filedata3.oats) * -1;
        const corn = (filedata2.corn - filedata1.corn) / (filedata4.corn - filedata3.corn) * -1;
        const barley = (filedata2.barley - filedata1.barley) / (filedata4.barley - filedata3.barley) * -1;
        const cassava = (filedata2.cassava - filedata1.cassava) / (filedata4.cassava - filedata3.cassava) * -1;
        const soybean = (filedata2.soybean - filedata1.soybean) / (filedata4.soybean - filedata3.soybean) * -1;
        const sorghum = (filedata2.sorghum - filedata1.sorghum) / (filedata4.sorghum - filedata3.sorghum) * -1;
        const wheat = (filedata2.wheat - filedata1.wheat) / (filedata4.wheat - filedata3.wheat) * -1;
        const resin = (filedata2.resin - filedata1.resin) / (filedata4.resin - filedata3.resin) * -1;
        const tape = (filedata2.tape - filedata1.tape) / (filedata4.tape - filedata3.tape) * -1;
        const steelsheet = (filedata2.steelsheet - filedata1.steelsheet) / (filedata4.steelsheet - filedata3.steelsheet) * -1;
        const cocoabean = (filedata2.cocoabean - filedata1.cocoabean) / (filedata4.cocoabean - filedata3.cocoabean) * -1;
        const coffeebean = (filedata2.coffeebean - filedata1.coffeebean) / (filedata4.coffeebean - filedata3.coffeebean) * -1;
        const sugar = (filedata2.sugar - filedata1.sugar) / (filedata4.sugar - filedata3.sugar) * -1;
        const salt = (filedata2.salt - filedata1.salt) / (filedata4.salt - filedata3.salt) * -1;
        const flower = (filedata2.flower - filedata1.flower) / (filedata4.flower - filedata3.flower) * -1;
        const bakingpowder = (filedata2.bakingpowder - filedata1.bakingpowder) / (filedata4.bakingpowder - filedata3.bakingpowder) * -1;
        const egg = (filedata2.egg - filedata1.egg) / (filedata4.egg - filedata3.egg) * -1;
        const fish = (filedata2.fish - filedata1.fish) / (filedata4.fish - filedata3.fish) * -1;
        const meat = (filedata2.meat - filedata1.meat) / (filedata4.meat - filedata3.meat) * -1;
        const bread = (filedata2.bread - filedata1.bread) / (filedata4.bread - filedata3.bread) * -1;
        const asparagus = (filedata2.asparagus - filedata1.asparagus) / (filedata4.asparagus - filedata3.asparagus) * -1;
        const eggplant = (filedata2.eggplant - filedata1.eggplant) / (filedata4.eggplant - filedata3.eggplant) * -1;
        const broccoli = (filedata2.broccoli - filedata1.broccoli) / (filedata4.broccoli - filedata3.broccoli) * -1;
        const cabbage = (filedata2.cabbage - filedata1.cabbage) / (filedata4.cabbage - filedata3.cabbage) * -1;
        const avocado = (filedata2.avocado - filedata1.avocado) / (filedata4.avocado - filedata3.avocado) * -1;
        const brusselssprout = (filedata2.brusselssprout - filedata1.brusselssprout) / (filedata4.brusselssprout - filedata3.brusselssprout) * -1;
        const carrot = (filedata2.carrot - filedata1.carrot) / (filedata4.carrot - filedata3.carrot) * -1;
        const beetroot = (filedata2.beetroot - filedata1.beetroot) / (filedata4.beetroot - filedata3.beetroot) * -1;
        const garlic = (filedata2.garlic - filedata1.garlic) / (filedata4.garlic - filedata3.garlic) * -1;
        const celery = (filedata2.celery - filedata1.celery) / (filedata4.celery - filedata3.celery) * -1;
        const cucumber = (filedata2.cucumber - filedata1.cucumber) / (filedata4.cucumber - filedata3.cucumber) * -1;
        const greenbean = (filedata2.greenbean - filedata1.greenbean) / (filedata4.greenbean - filedata3.greenbean) * -1;
        const leek = (filedata2.leek - filedata1.leek) / (filedata4.leek - filedata3.leek) * -1;
        const lettuce = (filedata2.lettuce - filedata1.lettuce) / (filedata4.lettuce - filedata3.lettuce) * -1;
        const mushroom = (filedata2.mushroom - filedata1.mushroom) / (filedata4.mushroom - filedata3.mushroom) * -1;
        const onion = (filedata2.onion - filedata1.onion) / (filedata4.onion - filedata3.onion) * -1;
        const pea = (filedata2.pea - filedata1.pea) / (filedata4.pea - filedata3.pea) * -1;
        const pumpkin = (filedata2.pumpkin - filedata1.pumpkin) / (filedata4.pumpkin - filedata3.pumpkin) * -1;
        const radish = (filedata2.radish - filedata1.radish) / (filedata4.radish - filedata3.radish) * -1;
        const rhubarb = (filedata2.rhubarb - filedata1.rhubarb) / (filedata4.rhubarb - filedata3.rhubarb) * -1;
        const sweetpepper = (filedata2.sweetpepper - filedata1.sweetpepper) / (filedata4.sweetpepper - filedata3.sweetpepper) * -1;
        const spinach = (filedata2.spinach - filedata1.spinach) / (filedata4.spinach - filedata3.spinach) * -1;
        const tomato = (filedata2.tomato - filedata1.tomato) / (filedata4.tomato - filedata3.tomato) * -1;
        const sweetpotato = (filedata2.sweetpotato - filedata1.sweetpotato) / (filedata4.sweetpotato - filedata3.sweetpotato) * -1;
        const yam = (filedata2.yam - filedata1.yam) / (filedata4.yam - filedata3.yam) * -1;
        const potato = (filedata2.potato - filedata1.potato) / (filedata4.potato - filedata3.potato) * -1;
        const acerola = (filedata2.acerola - filedata1.acerola) / (filedata4.acerola - filedata3.acerola) * -1;
        const apple = (filedata2.apple - filedata1.apple) / (filedata4.apple - filedata3.apple) * -1;
        const apricot = (filedata2.apricot - filedata1.apricot) / (filedata4.apricot - filedata3.apricot) * -1;
        const banana = (filedata2.banana - filedata1.banana) / (filedata4.banana - filedata3.banana) * -1;
        const blackberry = (filedata2.blackberry - filedata1.blackberry) / (filedata4.blackberry - filedata3.blackberry) * -1;
        const blackcurrant = (filedata2.blackcurrant - filedata1.blackcurrant) / (filedata4.blackcurrant - filedata3.blackcurrant) * -1;
        const blueberry = (filedata2.blueberry - filedata1.blueberry) / (filedata4.blueberry - filedata3.blueberry) * -1;
        const breadfruit = (filedata2.breadfruit - filedata1.breadfruit) / (filedata4.breadfruit - filedata3.breadfruit) * -1;
        const cantaloupe = (filedata2.cantaloupe - filedata1.cantaloupe) / (filedata4.cantaloupe - filedata3.cantaloupe) * -1;
        const cherry = (filedata2.cherry - filedata1.cherry) / (filedata4.cherry - filedata3.cherry) * -1;
        const clementine = (filedata2.clementine - filedata1.clementine) / (filedata4.clementine - filedata3.clementine) * -1;
        const coconut = (filedata2.coconut - filedata1.coconut) / (filedata4.coconut - filedata3.coconut) * -1;
        const cranberry = (filedata2.cranberry - filedata1.cranberry) / (filedata4.cranberry - filedata3.cranberry) * -1;
        const datefruit = (filedata2.datefruit - filedata1.datefruit) / (filedata4.datefruit - filedata3.datefruit) * -1;
        const fig = (filedata2.fig - filedata1.fig) / (filedata4.fig - filedata3.fig) * -1;
        const gooseberry = (filedata2.gooseberry - filedata1.gooseberry) / (filedata4.gooseberry - filedata3.gooseberry) * -1;
        const grapefruit = (filedata2.grapefruit - filedata1.grapefruit) / (filedata4.grapefruit - filedata3.grapefruit) * -1;
        const grape = (filedata2.grape - filedata1.grape) / (filedata4.grape - filedata3.grape) * -1;
        const guava = (filedata2.guava - filedata1.guava) / (filedata4.guava - filedata3.guava) * -1;
        const honeydewmelon = (filedata2.honeydewmelon - filedata1.honeydewmelon) / (filedata4.honeydewmelon - filedata3.honeydewmelon) * -1;
        const jackfruit = (filedata2.jackfruit - filedata1.jackfruit) / (filedata4.jackfruit - filedata3.jackfruit) * -1;
        const jujubefruit = (filedata2.jujubefruit - filedata1.jujubefruit) / (filedata4.jujubefruit - filedata3.jujubefruit) * -1;
        const kiwifruit = (filedata2.kiwifruit - filedata1.kiwifruit) / (filedata4.kiwifruit - filedata3.kiwifruit) * -1;
        const kumquat = (filedata2.kumquat - filedata1.kumquat) / (filedata4.kumquat - filedata3.kumquat) * -1;
        const lemon = (filedata2.lemon - filedata1.lemon) / (filedata4.lemon - filedata3.lemon) * -1;
        const lime = (filedata2.lime - filedata1.lime) / (filedata4.lime - filedata3.lime) * -1;
        const lychee = (filedata2.lychee - filedata1.lychee) / (filedata4.lychee - filedata3.lychee) * -1;
        const mandarin = (filedata2.mandarin - filedata1.mandarin) / (filedata4.mandarin - filedata3.mandarin) * -1;
        const mango = (filedata2.mango - filedata1.mango) / (filedata4.mango - filedata3.mango) * -1;
        const mulberry = (filedata2.mulberry - filedata1.mulberry) / (filedata4.mulberry - filedata3.mulberry) * -1;
        const olive = (filedata2.olive - filedata1.olive) / (filedata4.olive - filedata3.olive) * -1;
        const orange = (filedata2.orange - filedata1.orange) / (filedata4.orange - filedata3.orange) * -1;
        const papaya = (filedata2.papaya - filedata1.papaya) / (filedata4.papaya - filedata3.papaya) * -1;
        const passionfruit = (filedata2.passionfruit - filedata1.passionfruit) / (filedata4.passionfruit - filedata3.passionfruit) * -1;
        const peach = (filedata2.peach - filedata1.peach) / (filedata4.peach - filedata3.peach) * -1;
        const pear = (filedata2.pear - filedata1.pear) / (filedata4.pear - filedata3.pear) * -1;
        const dragonfruit = (filedata2.dragonfruit - filedata1.dragonfruit) / (filedata4.dragonfruit - filedata3.dragonfruit) * -1;
        const pineapple = (filedata2.pineapple - filedata1.pineapple) / (filedata4.pineapple - filedata3.pineapple) * -1;
        const plum = (filedata2.plum - filedata1.plum) / (filedata4.plum - filedata3.plum) * -1;
        const pomegranate = (filedata2.pomegranate - filedata1.pomegranate) / (filedata4.pomegranate - filedata3.pomegranate) * -1;
        const prune = (filedata2.prune - filedata1.prune) / (filedata4.prune - filedata3.prune) * -1;
        const raspberry = (filedata2.raspberry - filedata1.raspberry) / (filedata4.raspberry - filedata3.raspberry) * -1;
        const strawberry = (filedata2.strawberry - filedata1.strawberry) / (filedata4.strawberry - filedata3.strawberry) * -1;
        const tangerine = (filedata2.tangerine - filedata1.tangerine) / (filedata4.tangerine - filedata3.tangerine) * -1;
        const watermelon = (filedata2.watermelon - filedata1.watermelon) / (filedata4.watermelon - filedata3.watermelon) * -1;
        const blackbean = (filedata2.blackbean - filedata1.blackbean) / (filedata4.blackbean - filedata3.blackbean) * -1;
        const blackeyedpea = (filedata2.blackeyedpea - filedata1.blackeyedpea) / (filedata4.blackeyedpea - filedata3.blackeyedpea) * -1;
        const cannellinibean = (filedata2.cannellinibean - filedata1.cannellinibean) / (filedata4.cannellinibean - filedata3.cannellinibean) * -1;
        const chickpea = (filedata2.chickpea - filedata1.chickpea) / (filedata4.chickpea - filedata3.chickpea) * -1;
        const greatnorthernbean = (filedata2.greatnorthernbean - filedata1.greatnorthernbean) / (filedata4.greatnorthernbean - filedata3.greatnorthernbean) * -1;
        const kidneybean = (filedata2.kidneybean - filedata1.kidneybean) / (filedata4.kidneybean - filedata3.kidneybean) * -1;
        const limabean = (filedata2.limabean - filedata1.limabean) / (filedata4.limabean - filedata3.limabean) * -1;
        const pintobean = (filedata2.pintobean - filedata1.pintobean) / (filedata4.pintobean - filedata3.pintobean) * -1;
        const favabean = (filedata2.favabean - filedata1.favabean) / (filedata4.favabean - filedata3.favabean) * -1;
        const navybean = (filedata2.navybean - filedata1.navybean) / (filedata4.navybean - filedata3.navybean) * -1;
        const adzukibean = (filedata2.adzukibean - filedata1.adzukibean) / (filedata4.adzukibean - filedata3.adzukibean) * -1;
        const edamame = (filedata2.edamame - filedata1.edamame) / (filedata4.edamame - filedata3.edamame) * -1;
        const mungbean = (filedata2.mungbean - filedata1.mungbean) / (filedata4.mungbean - filedata3.mungbean) * -1;
        const cranberrybean = (filedata2.cranberrybean - filedata1.cranberrybean) / (filedata4.cranberrybean - filedata3.cranberrybean) * -1;
        const thyme = (filedata2.thyme - filedata1.thyme) / (filedata4.thyme - filedata3.thyme) * -1;
        const basil = (filedata2.basil - filedata1.basil) / (filedata4.basil - filedata3.basil) * -1;
        const oregano = (filedata2.oregano - filedata1.oregano) / (filedata4.oregano - filedata3.oregano) * -1;
        const rosemary = (filedata2.rosemary - filedata1.rosemary) / (filedata4.rosemary - filedata3.rosemary) * -1;
        const fennelseed = (filedata2.fennelseed - filedata1.fennelseed) / (filedata4.fennelseed - filedata3.fennelseed) * -1;
        const bayleaf = (filedata2.bayleaf - filedata1.bayleaf) / (filedata4.bayleaf - filedata3.bayleaf) * -1;
        const chilipowder = (filedata2.chilipowder - filedata1.chilipowder) / (filedata4.chilipowder - filedata3.chilipowder) * -1;
        const smokedpaprika = (filedata2.smokedpaprika - filedata1.smokedpaprika) / (filedata4.smokedpaprika - filedata3.smokedpaprika) * -1;
        const cayenne = (filedata2.cayenne - filedata1.cayenne) / (filedata4.cayenne - filedata3.cayenne) * -1;
        const cumin = (filedata2.cumin - filedata1.cumin) / (filedata4.cumin - filedata3.cumin) * -1;
        const groundcardamom = (filedata2.groundcardamom - filedata1.groundcardamom) / (filedata4.groundcardamom - filedata3.groundcardamom) * -1;
        const currypowder = (filedata2.currypowder - filedata1.currypowder) / (filedata4.currypowder - filedata3.currypowder) * -1;
        const onionpowder = (filedata2.onionpowder - filedata1.onionpowder) / (filedata4.onionpowder - filedata3.onionpowder) * -1;
        const garlicpowder = (filedata2.garlicpowder - filedata1.garlicpowder) / (filedata4.garlicpowder - filedata3.garlicpowder) * -1;
        const groundmustard = (filedata2.groundmustard - filedata1.groundmustard) / (filedata4.groundmustard - filedata3.groundmustard) * -1;
        const clove = (filedata2.clove - filedata1.clove) / (filedata4.clove - filedata3.clove) * -1;
        const nutmeg = (filedata2.nutmeg - filedata1.nutmeg) / (filedata4.nutmeg - filedata3.nutmeg) * -1;
        const cinnamon = (filedata2.cinnamon - filedata1.cinnamon) / (filedata4.cinnamon - filedata3.cinnamon) * -1;
        const groundginger = (filedata2.groundginger - filedata1.groundginger) / (filedata4.groundginger - filedata3.groundginger) * -1;
        const mace = (filedata2.mace - filedata1.mace) / (filedata4.mace - filedata3.mace) * -1;
        const cow = (filedata2.cow - filedata1.cow) / (filedata4.cow - filedata3.cow) * -1;
        const pig = (filedata2.pig - filedata1.pig) / (filedata4.pig - filedata3.pig) * -1;
        const horse = (filedata2.horse - filedata1.horse) / (filedata4.horse - filedata3.horse) * -1;
        const chicken = (filedata2.chicken - filedata1.chicken) / (filedata4.chicken - filedata3.chicken) * -1;
        const sheep = (filedata2.sheep - filedata1.sheep) / (filedata4.sheep - filedata3.sheep) * -1;
        const goat = (filedata2.goat - filedata1.goat) / (filedata4.goat - filedata3.goat) * -1;
        const llama = (filedata2.llama - filedata1.llama) / (filedata4.llama - filedata3.llama) * -1;
        const rabbit = (filedata2.rabbit - filedata1.rabbit) / (filedata4.rabbit - filedata3.rabbit) * -1;
        const cement = (filedata2.cement - filedata1.cement) / (filedata4.cement - filedata3.cement) * -1;
        const concrete = (filedata2.concrete - filedata1.concrete) / (filedata4.concrete - filedata3.concrete) * -1;
        const pebble = (filedata2.pebble - filedata1.pebble) / (filedata4.pebble - filedata3.pebble) * -1;
        const phenolicfoam = (filedata2.phenolicfoam - filedata1.phenolicfoam) / (filedata4.phenolicfoam - filedata3.phenolicfoam) * -1;
        const polyurethane = (filedata2.polyurethane - filedata1.polyurethane) / (filedata4.polyurethane - filedata3.polyurethane) * -1;
        const xps = (filedata2.xps - filedata1.xps) / (filedata4.xps - filedata3.xps) * -1;
        const rockwool = (filedata2.rockwool - filedata1.rockwool) / (filedata4.rockwool - filedata3.rockwool) * -1;
        const foamglass = (filedata2.foamglass - filedata1.foamglass) / (filedata4.foamglass - filedata3.foamglass) * -1;
        const glasswool = (filedata2.glasswool - filedata1.glasswool) / (filedata4.glasswool - filedata3.glasswool) * -1;
        const doubleglass = (filedata2.doubleglass - filedata1.doubleglass) / (filedata4.doubleglass - filedata3.doubleglass) * -1;
        const tripleglass = (filedata2.tripleglass - filedata1.tripleglass) / (filedata4.tripleglass - filedata3.tripleglass) * -1;
        const fabric = (filedata2.fabric - filedata1.fabric) / (filedata4.fabric - filedata3.fabric) * -1;
        const cotton = (filedata2.cotton - filedata1.cotton) / (filedata4.cotton - filedata3.cotton) * -1;
        const fibre = (filedata2.fibre - filedata1.fibre) / (filedata4.fibre - filedata3.fibre) * -1;
        const carbonfibre = (filedata2.carbonfibre - filedata1.carbonfibre) / (filedata4.carbonfibre - filedata3.carbonfibre) * -1;
        const chemical = (filedata2.chemical - filedata1.chemical) / (filedata4.chemical - filedata3.chemical) * -1;
        const polymaterial = (filedata2.polymaterial - filedata1.polymaterial) / (filedata4.polymaterial - filedata3.polymaterial) * -1;
        const acid = (filedata2.acid - filedata1.acid) / (filedata4.acid - filedata3.acid) * -1;
        const catalyst = (filedata2.catalyst - filedata1.catalyst) / (filedata4.catalyst - filedata3.catalyst) * -1;
        const chromepart = (filedata2.chromepart - filedata1.chromepart) / (filedata4.chromepart - filedata3.chromepart) * -1;
        const chrome = (filedata2.chrome - filedata1.chrome) / (filedata4.chrome - filedata3.chrome) * -1;
        const brasspart = (filedata2.brasspart - filedata1.brasspart) / (filedata4.brasspart - filedata3.brasspart) * -1;
        const brass = (filedata2.brass - filedata1.brass) / (filedata4.brass - filedata3.brass) * -1;
        const diamond = (filedata2.diamond - filedata1.diamond) / (filedata4.diamond - filedata3.diamond) * -1;
        const gold = (filedata2.gold - filedata1.gold) / (filedata4.gold - filedata3.gold) * -1;
        const platinum = (filedata2.platinum - filedata1.platinum) / (filedata4.platinum - filedata3.platinum) * -1;
        const silver = (filedata2.silver - filedata1.silver) / (filedata4.silver - filedata3.silver) * -1;
        const copper = (filedata2.copper - filedata1.copper) / (filedata4.copper - filedata3.copper) * -1;
        const lithium = (filedata2.lithium - filedata1.lithium) / (filedata4.lithium - filedata3.lithium) * -1;
        const cobalt = (filedata2.cobalt - filedata1.cobalt) / (filedata4.cobalt - filedata3.cobalt) * -1;
        const titanium = (filedata2.titanium - filedata1.titanium) / (filedata4.titanium - filedata3.titanium) * -1;
        const tungsten = (filedata2.tungsten - filedata1.tungsten) / (filedata4.tungsten - filedata3.tungsten) * -1;
        const nickel = (filedata2.nickel - filedata1.nickel) / (filedata4.nickel - filedata3.nickel) * -1;
        const magnesium = (filedata2.magnesium - filedata1.magnesium) / (filedata4.magnesium - filedata3.magnesium) * -1;
        const lead = (filedata2.lead - filedata1.lead) / (filedata4.lead - filedata3.lead) * -1;
        const tin = (filedata2.tin - filedata1.tin) / (filedata4.tin - filedata3.tin) * -1;
        const mercury = (filedata2.mercury - filedata1.mercury) / (filedata4.mercury - filedata3.mercury) * -1;
        const bismuth = (filedata2.bismuth - filedata1.bismuth) / (filedata4.bismuth - filedata3.bismuth) * -1;
        const rodium = (filedata2.rodium - filedata1.rodium) / (filedata4.rodium - filedata3.rodium) * -1;
        const osmium = (filedata2.osmium - filedata1.osmium) / (filedata4.osmium - filedata3.osmium) * -1;
        const palladium = (filedata2.palladium - filedata1.palladium) / (filedata4.palladium - filedata3.palladium) * -1;
        const iridium = (filedata2.iridium - filedata1.iridium) / (filedata4.iridium - filedata3.iridium) * -1;
        const ruthenium = (filedata2.ruthenium - filedata1.ruthenium) / (filedata4.ruthenium - filedata3.ruthenium) * -1;
        const plutonium = (filedata2.plutonium - filedata1.plutonium) / (filedata4.plutonium - filedata3.plutonium) * -1;
        const componentelectric = (filedata2.componentelectric - filedata1.componentelectric) / (filedata4.componentelectric - filedata3.componentelectric) * -1;
        const componentinterior = (filedata2.componentinterior - filedata1.componentinterior) / (filedata4.componentinterior - filedata3.componentinterior) * -1;
        const componentclothing = (filedata2.componentclothing - filedata1.componentclothing) / (filedata4.componentclothing - filedata3.componentclothing) * -1;
        const componentstarting = (filedata2.componentstarting - filedata1.componentstarting) / (filedata4.componentstarting - filedata3.componentstarting) * -1;

        file.set("steel", steel)
        file.set("steelpart", steelpart)
        file.set("iron", iron)
        file.set("carbon", carbon)
        file.set("brick", brick)
        file.set("clay", clay)
        file.set("soil", soil)
        file.set("water", water)
        file.set("woodplank", woodplank)
        file.set("woodpart", woodpart)
        file.set("wood", wood)
        file.set("log", log)
        file.set("bamboo", bamboo)
        file.set("pipe", pipe)
        file.set("plasticpart", plasticpart)
        file.set("plastic", plastic)
        file.set("glass", glass)
        file.set("limestone", limestone)
        file.set("sand", sand)
        file.set("plexiglass", plexiglass)
        file.set("granite", granite)
        file.set("marble", marble)
        file.set("quartz", quartz)
        file.set("chalk", chalk)
        file.set("slate", slate)
        file.set("basalt", basalt)
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
        file.set("rice", rice)
        file.set("rye", rye)
        file.set("oats", oats)
        file.set("corn", corn)
        file.set("barley", barley)
        file.set("cassava", cassava)
        file.set("soybean", soybean)
        file.set("sorghum", sorghum)
        file.set("wheat", wheat)
        file.set("resin", resin)
        file.set("tape", tape)
        file.set("steelsheet", steelsheet)
        file.set("cocoabean", cocoabean)
        file.set("coffeebean", coffeebean)
        file.set("sugar", sugar)
        file.set("salt", salt)
        file.set("flower", flower)
        file.set("bakingpowder", bakingpowder)
        file.set("egg", egg)
        file.set("fish", fish)
        file.set("meat", meat)
        file.set("bread", bread)
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
        file.set("kiwifruit", kiwifruit)
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
        file.set("cow", cow)
        file.set("pig", pig)
        file.set("horse", horse)
        file.set("chicken", chicken)
        file.set("sheep", sheep)
        file.set("goat", goat)
        file.set("llama", llama)
        file.set("rabbit", rabbit)
        file.set("cement", cement)
        file.set("concrete", concrete)
        file.set("pebble", pebble)
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
