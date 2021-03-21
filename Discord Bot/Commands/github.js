module.exports = {
    name: 'github',
    description: "This is a github command.",
    execute(message, args) {

        if(message.member.cache.send('820947596368805898')){
            message.channel.send('https://github.com/PuffinKwadraat/MultiCube');
        } else if 
            (message.channel.send('You do not have permission to execute this command! If you want a higher/other role, fill in this apply form: https://forms.gle/cxQYaZpHq1tf4q7a8'));

    }
}