const config = require("./../../Other/config.js");

module.exports = () =>{
    const fs = require("fs");
    const commands = fs.readdirSync("./Commands").length;
    
    console.log(`Succesfully loaded ${commands} files.`)
    console.log(process.env.ONLINE);
}