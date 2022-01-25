const config = require("./../Other/config.js");

module.exports = {
  name: "substitutie",
  aliases: config.aliases.aliasessubstitutie,
  cooldown: config.cooldown.cooldownsubstitutie,
  permissions: config.permissions.permissionsubstitutie,
  description: "Substitute",
  execute(message, args, cmd, client, Discord) {
    const cirkelnaam = "C";
    const formulenaam = "Q";

    const afcirkela = -5;
    const afcirkelb = -1;
    const afcirkelc = 17;

    const afcirkelakwa = afcirkela * afcirkela;
    const afcirkelbkwa = afcirkelb * afcirkelb;
    const cirkela2 = afcirkela * 2;
    const cirkelb2 = afcirkelb * 2;

    const cirkeloverigen = afcirkelakwa + afcirkelbkwa - afcirkelc;
    const cirkelbegin = "X² + Y²";
    //AX - BY = C
    const aformule = 4;
    const bformule = -1;
    const cformule = formulenaam;
    //AX + B
    const aformuleom = 4;
    const bformuleom = -1;
    const cformuleom = cformule;

    const aformuleomkwa = aformuleom * aformuleom;
    const aformuleom2 = aformuleom * 2;
    const cformuleomkwa = cformuleom * cformuleom;
    const aformuleomkwatot = aformuleomkwa + 1;

    const cirkelb2keeraformuleom = cirkelb2 * aformuleom;
    const cirkelb2wis = cirkelb2 * -1;
    const cirkela2cirkelb2keeraformuleom = cirkela2 + cirkelb2keeraformuleom;
    const bthreeabcformule =
      cirkela2cirkelb2keeraformuleom * cirkela2cirkelb2keeraformuleom;
    const aformuleom2kwa = aformuleom2 * aformuleom2;
    const btwoabcformuleonvol = aformuleom2 * cirkela2cirkelb2keeraformuleom;
    const btwoabcformule = btwoabcformuleonvol * -2;

    const aabcformuleonvol = 4 * aformuleomkwatot;
    const aabcformule = aabcformuleonvol * -1;

    const coneabcformuleonvol = cirkelb2wis * aabcformule * -1;
    const coneabcformule = coneabcformuleonvol * -1;

    const ctwoabcformuleonvol = aabcformule * cirkeloverigen * -1;
    const ctwoabcformule = ctwoabcformuleonvol * -1;

    const aabcformuleaf = aformuleom2kwa + aabcformule;
    const babcformuleaf = btwoabcformule + coneabcformule;
    const cabcformuleaf = bthreeabcformule + ctwoabcformule;

    const aabcformuleafdeelaabc = aabcformuleaf / aabcformuleaf;
    const babcformuleafdeelaabc = babcformuleaf / aabcformuleaf;
    const cabcformuleafdeelaabc = cabcformuleaf / aabcformuleaf;

    //Input
    // var coordpuntenvolafgerond =
    //   Math.round((coordpuntenvol + Number.EPSILON) * 10) / 10;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Substitutie")
      .setImage(config.embed.embedimage)
      .setDescription(
        "Dit stappenplan laat zien hoe je een Substitutie berekening maakt. Dit is een vrij complexe berekening binnen de Wiskunde B."
      )
      .addFields(
        {
          name: `1. Opdracht:`,
          value: `Gegeven is de cirkel ${cirkelnaam}: (X ${afcirkela})² + (Y ${afcirkelb})² = ${afcirkelc}. Bereken voor welke waarden van ${formulenaam} de lijn ${aformule} ${bformule} = ${cformule} de cirkel raakt.`,
        },
        {
          name: `2. Cirkel formule opstellen:`,
          value: `\`\`\`(X ${afcirkela})² + (Y ${afcirkelb})² = ${afcirkelc}. Geeft X² ${cirkela2}X + ${afcirkelakwa} + Y² ${cirkelb2}Y + ${afcirkelbkwa} = ${afcirkelc}. Rangschikken geeft ${cirkelbegin} ${cirkela2}X ${cirkelb2}Y + ${cirkeloverigen} = 0. \`\`\``,
        },
        {
          name: `3. Gegeven lijn ombouwen naar de vorm Y = AX + B:`,
          value: `Uit ${aformule}X ${bformule} = ${formulenaam} volgt Y = ${aformuleom} ${bformuleom}${cformuleom}.`,
        },
        {
          name: `4. Substitutie van Y = ${aformuleom} ${bformuleom}${cformuleom} in ${cirkelbegin} ${cirkela2}X ${cirkelb2}Y + ${cirkeloverigen} = 0:`,
          value: `\`\`\`X² + (${aformuleom} ${bformuleom}${cformuleom})² ${cirkela2}X ${cirkelb2}(${aformuleom} ${bformuleom}${cformuleom}) + ${cirkeloverigen} = 0\`\`\``,
        },
        {
          name: `---`,
          value: `\`\`\`X² + ${aformuleomkwa}X² - ${aformuleom2}${formulenaam}X + ${formulenaam}² ${cirkela2}X ${cirkelb2keeraformuleom}X + ${cirkelb2wis}${formulenaam} + ${cirkeloverigen} = 0 \`\`\``,
        },
        {
          name: `---`,
          value: `\`\`\`${aformuleomkwatot}X² + (${aformuleom2}${formulenaam} + ${cirkela2cirkelb2keeraformuleom})X + ${formulenaam}² + ${cirkelb2wis}${formulenaam} + ${cirkeloverigen} = 0 \`\`\``,
        },
        {
          name: `ABC Formule Toepassen`,
          value: `\`\`\`(B)² - 4AC\`\`\``,
        },
        {
          name: `Invullen geeft:`,
          value: `\`\`\`(${aformuleom2}${formulenaam} + ${cirkela2cirkelb2keeraformuleom})² - 4 ⋅ ${aformuleomkwatot} ⋅ (${formulenaam}² + ${cirkelb2wis}${formulenaam} + ${cirkeloverigen})\`\`\``,
        },
        {
          name: `Oplossen stap 1 geeft:`,
          value: `\`\`\`${aformuleom2kwa}${formulenaam}² + ${btwoabcformule}${formulenaam} + ${bthreeabcformule} + ${aabcformule}${formulenaam}² + ${coneabcformule}${formulenaam} + ${ctwoabcformule}\`\`\``,
        },
        {
          name: `Oplossen stap 2 geeft:`,
          value: `\`\`\`${aabcformuleaf}${formulenaam}² + ${babcformuleaf}${formulenaam} + ${cabcformuleaf}\`\`\``,
        },
        {
          name: `D = 0 geeft:`,
          value: `\`\`\`${aabcformuleaf}${formulenaam}² + ${babcformuleaf}${formulenaam} + ${cabcformuleaf} = 0\`\`\``,
        },
        {
          name: `Je kan hierop de ABC-Formule toepassen, of het boek volgen. Boek doet het met de product-som-methode. Zie hieronder. Vereenvoudigen geeft:`,
          value: `\`\`\`${aabcformuleafdeelaabc}${formulenaam}² + ${babcformuleafdeelaabc}${formulenaam} + ${cabcformuleafdeelaabc} = 0\`\`\``,
        },
        {
          name: `Geschikt paar vinden (product som-methode):`,
          value: `In het geval van D = ${formulenaam}² - 38${formulenaam} + 72 --> Q = 2 V Q = 36.`,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
