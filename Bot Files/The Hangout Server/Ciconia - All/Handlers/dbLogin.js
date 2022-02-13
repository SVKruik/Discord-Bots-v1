const mongoose = require("mongoose");
const fs = require('fs');
const mongoEventFiles = fs.readdirSync("./MongoEvents").filter(file => file.endsWith(".js"));

module.exports = (client) => {
    client.dbLogin = async () => {
        for (file of mongoEventFiles) {

        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.MONGODB_SRV, {
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    };
};