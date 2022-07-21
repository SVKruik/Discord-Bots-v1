// Console log informatie als hij opstart. Zegt gewoon wanneer hij opstartte
// en zegt dat alles geladen is.

const config = require("./../../Other/config.js");

module.exports = () => {
    const fs = require("fs");
    const commands = fs.readdirSync("./commands").length;

    var today = new Date();
    var ss = String(today.getSeconds()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var hh = String(today.getHours()).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = ss + " Seconds / " + m + " Minutes / " + hh + " Hours / " + dd + " Days / " + mm + " Months / " + yyyy;

    console.log(`Succesfully loaded ${commands} files.`)
    console.log(`Session started on ${today}.`)
    console.log(process.env.ONLINE);
}
