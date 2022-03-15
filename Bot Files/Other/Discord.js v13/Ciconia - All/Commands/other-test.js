module.exports = {
    name: "test",
    execute(message, args, cmd, client, Discord) {
        message.channel.send({ content: "Hello" })
        console.log("Yay");
    },
};