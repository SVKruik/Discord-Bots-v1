// Bereken de afstand van een punt tot een lijn.
// Net als de andere misc cmds, gewoon voor de lol gemaakt. 
// Hij laat ook stap voor stap zien hoe je het moet berekenen.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "punttotlijn",
  aliases: config.aliases.aliasespunttotlijn,
  cooldown: config.cooldown.cooldownpunttotlijn,
  permissions: config.permissions.permissionpunttotlijn,
  description: "Calculate distance between a point and a line.",
  execute(message, args, cmd, client, Discord) {
    try {
      const punt1 = "A";
      const coordpunt1x = 5;
      const coordpunt1y = 5;

      const lijn2 = "l";
      const alijn2 = 2;
      const ablijn2 = "-";
      const blijn2 = 3;
      const clijn2 = "C";
      const clijn2na = alijn2 * coordpunt1x - blijn2 * coordpunt1y;
      //           = -5

      const lijn1 = "k";
      const alijn1 = 3;
      const ablijn1 = "+";
      const blijn1 = 2;
      const clijn1 = 12;

      const vergelijk1 = 3;
      const vergelijk2 = 2;

      const alijn1tabel = alijn1 * vergelijk1;
      const blijn1tabel = blijn1 * vergelijk1;
      const clijn1tabel = clijn1 * vergelijk1;

      const alijn2tabel = alijn2 * vergelijk2;
      const blijn2tabel = blijn2 * vergelijk2;
      const clijn2tabel = clijn2na * vergelijk2;

      const alijnen = alijn1tabel + alijn2tabel;
      const clijnen = clijn1tabel + clijn2tabel;

      const punt2 = "B";
      const coordpunt2x = clijnen / alijnen;
      const clijnenpunt2getal = clijn1 - alijn1 * coordpunt2x;
      const coordpunt2y = clijnenpunt2getal / blijn1;

      const coordpuntenx = coordpunt2x - coordpunt1x;
      const coordpuntenxkwa = coordpuntenx * coordpuntenx;

      const coordpunteny = coordpunt2y - coordpunt1y;
      const coordpuntenykwa = coordpunteny * coordpunteny;

      const coordpuntenkwa = coordpuntenxkwa + coordpuntenykwa;
      const coordpuntenvol = Math.sqrt(coordpuntenkwa);

      //Input
      var coordpuntenvolafgerond =
        Math.round((coordpuntenvol + Number.EPSILON) * 10) / 10;

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlepuntlijn)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionpuntlijn)
        .addFields(
          {
            name: `1. Opdracht:`,
            value: `De lijn ${lijn2} gaat door punt ${punt1} en staat loodrecht op de lijn ${lijn1}. Gegeven is dat punt ${punt1}(${coordpunt1x}, ${coordpunt1y}) en dat de formule van de lijn ${lijn1}: ${alijn1}X ${ablijn1} ${blijn1}Y = ${clijn1}. Bereken exact de afstand van punt ${punt1} tot de lijn ${lijn1}.`,
          },
          {
            name: `2. Gegeven punt invullen:`,
            value: `${lijn2}: ${alijn2}X ${ablijn2} ${blijn2}Y = ${clijn2}, door ${punt1}(${coordpunt1x}, ${coordpunt1y}). Geeft --> C = ${alijn2} ⋅ ${coordpunt1x} ${ablijn2} ${blijn2} ⋅ ${coordpunt1y} = ${clijn2na}`,
          },
          {
            name: `3. Lijn ${lijn2}:`,
            value: `Dus ${lijn2}: ${alijn2}X ${ablijn2} ${blijn2}Y = ${clijn2na}.`,
          },
          {
            name: `4. Lijn ${lijn1} en ${lijn2} snijden geeft het punt ${punt2}:`,
            value: `\`\`\`${alijn1}X ${ablijn1} ${blijn1}Y = ${clijn1} |${vergelijk1}| geeft ${alijn1tabel}X ${ablijn1} ${blijn1tabel}Y = ${clijn1tabel} -------------- ${alijn2}X ${ablijn2} ${blijn2}Y = ${clijn2na} |${vergelijk2}| ----- ${alijn2tabel}X ${ablijn2} ${blijn2tabel}Y = ${clijn2tabel} ------------- --------------------- ${alijnen}X ---- = ${clijnen} ------------------------------------ X = ${coordpunt2x}\`\`\``,
          },
          {
            name: `5. Je berekende X invullen op je orginele formule, lijn ${lijn1}.`,
            value: `${lijn1}: ${alijn1}X ${ablijn1} ${blijn1}Y = ${clijn1} geeft ${alijn1} ⋅ ${coordpunt2x} ${ablijn1} ${blijn1}Y = ${clijn1}. Oplossen geeft ${blijn1}Y = ${clijnenpunt2getal}. ${clijnenpunt2getal} / ${blijn1} geeft Y coordinaat van ${punt2}. Y coordinaat = ${coordpunt2y}`,
          },
          {
            name: `7. Punt ${punt2}(${coordpunt2x}, ${coordpunt2y}) oplossen met d(${punt1}, ${punt2}):`,
            value: `d(${punt1}, ${lijn1}) = d(${punt1}, ${punt2}) = √(${coordpunt2x} - ${coordpunt1x})² + (${coordpunt2y} - ${coordpunt1y})² = √(${coordpuntenx})² + (${coordpunteny})² = √${coordpuntenxkwa} + ${coordpuntenykwa} = √${coordpuntenkwa} = ${coordpuntenvolafgerond}.`,
          }
        )
        .setFooter({ text: config.embed.embedfooter });

      message.channel.send({ embeds: [newEmbed] });
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
    }
  },
};
