module.exports = {
  name: "substitutie",
  aliases: ["substitueren", "subst"],
  cooldown: process.env.ASMID,
  description: "Substitute",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const cirkelnaam = "C"
    const formulenaam = "Q"

    const afcirkela = -5
    const afcirkelb = -1
    const afcirkelc = 17

    const afcirkelakwa = afcirkela * afcirkela
    const afcirkelbkwa = afcirkelb * afcirkelb
    const cirkela2 = afcirkela * 2
    const cirkelb2 = afcirkelb * 2

    const cirkeloverigen = afcirkelakwa + afcirkelbkwa - afcirkelc
    const cirkelbegin = "X² + Y²"
    //AX - BY = C
    const aformule = 4
    const bformule = -1
    const cformule = formulenaam
    //AX + B
    const aformuleom = 4
    const bformuleom = -1
    const cformuleom = cformule

    const aformuleomkwa = aformuleom * aformuleom
    const aformuleom2 = aformuleom * 2
    const cformuleomkwa = cformuleom * cformuleom

    cirkelb2keeraformuleom = cirkelb2 * aformuleom

    cirkelb2wis = cirkelb2 * -1

    //Input
    // var coordpuntenvolafgerond =
    //   Math.round((coordpuntenvol + Number.EPSILON) * 10) / 10;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLESUBSTITUTIE)
      .setImage(process.env.MBDIMG)
      .setDescription(process.env.MBDDESCSUBSTITUTIE)
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
          value: `\`\`\`X² + ${aformuleomkwa}X² ${aformuleom2}${formulenaam}X + ${formulenaam}² ${cirkela2}X ${cirkelb2keeraformuleom}X + ${cirkelb2wis}${formulenaam} + ${cirkeloverigen} = 0 \`\`\``, 
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};