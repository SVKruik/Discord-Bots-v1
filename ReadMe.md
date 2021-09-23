# MultiCube - ReadMe
This main repository is dedicated to our server on Minecraft.<br/>

----------------------------------------

### General Information
We run a couple of Minecraft Servers. We have Child (Sub) Servers, but our main focus is MultiCube. This server is still the largest, and most accessible. This is because
you don't have to download anything. You can just join and play. We have a subserver where there are Mods present, so be aware if you'd like to join, you have to download
the mods first! If you need help with that, contact our support team. You can find the needed Mods in the file 'Plugins and Mods.md'.

### Joining our servers
Most servers are just like any other public server fully joinable. But we have a couple of servers that have Mods. Like discribed above (General Information) you have to download them. If you want to know what servers have Mods, contact our support team.

### Ranks and Roles
If you want to apply for a Rank and/or Role, please fill in the [form](https://forms.gle/pabpqPiWeBp9aZ2a8). Note that for Roles like 'Builder' or 'Redstoner' aren't available for apply. These roles can be obtained by showing off you skill. If you want to be 'Redstoner', you have to be good with Redstone. If you are filling in the form, please tell us the truth. You can upload a picture of anything you have build and show us something. Be aware though that we can't have 100 Admins for example, so check if the Ranks/Roles aren't full. Also, if you want the Support Role/Rank, you have to be a longtime player and know how things work. You cant get the role if you are playing for a day or 2. Support means helping people, so you have to know how things work around our community.

### Support and Help
If you have questions about anything, you can contact our support team like said before. Check which people have the Support Role/Rank. Be polite and ask anything you'd like! If there's anything that can be done better/on another way or have suggestions, you can talk to people with Support Role or anything higher. Please, be clear about what you'd like to see change, and why.

### Rules
We have a few rules that are important. We want to keep this place nice, friendly and polite. Rule breakers will receive a warning, and if they continue, the will receive a ban/kick. Report rulebreakers to our staff. Read the server rules in-game (/mainmenu --> Server Rules), or on first join of the Discord server.

### Economy
Our Discord Server also has a Economy system. You can collect money through a couple ways:
  - Daily reward: as the name suggests, you can collect a DR. The command for this is `dailyreward`, it has a cooldown of 24 hours (86400 seconds).
  - Another kind off daily reward is the `search` command, and you have to pick a number.
  - Participate in events.

Furthermore, we are planning to connnect your Discord coins to your Minecraft balance, on the MultiCube server.

There are 2 types of balance:
  - Bank: you cannot pay with this, it's just an account for save keeping and saving up money.
  - Wallet: this is your direct payment method. All money earned (for example DR) goes into here.
The Economy System is not done, so this text about Economy will be expanded.

### Usefull stuff
Here are some links that can come in handy if you are building your bot, or just general usefull links:
  - [Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet): General information about Markdown (language).
  - [More](https://gist.github.com/matthewzring/9f7bbfd102003963f9be7dbcf7d40e51) Markdown information.
  - [Discord](https://discord.gg/gBVFuBqENA) Server for hangout, not dedicated to our Minecraft Server.
  - [Discord](https://discord.gg/VSE75WkgFM) Server for our Minecraft server.
  - [Aternos](https://aternos.org/:en/): Our temporary Minecraft host. Later we will convert it to [BungeeCord](https://ci.md-5.net/job/BungeeCord/) for better performance. We will run it on our own PC.
  - [GitHub](https://github.com/) homepage.
  - [Node.js](https://nodejs.org/en/) allows us to work with the bot.
  - [VSC](https://code.visualstudio.com/) the best code editor for this project.
  - [NPM](https://www.npmjs.com/) has a lot of great plugins for the bot. Usage CMD: npm install name.
  - [Tutorial](https://youtube.com/playlist?list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4) about the Discord Bot.

### Commands
Here is a list for commands on our Discord server. Be aware though that some commands are for Administrators only. Alphabetic order.

  - `apply`: A link to a google form if you would like to apply for a role/rank on our Minecraft/Discord server.
  - `balance`: Show your balance. You can then choose what balance you would like to display: Bank or Wallet.
  - `balbank`: Directly shows your bank account worth, without a dialogue.
  - `balwallet`: Directly shows your wallet worth, without a dialogue.
  - `ban @target-member`: Bans a Discord server member.
  - `blind`: Blinds a member. The targeted member cannot do and see anything.
  - `clear amount`: Bulkdeletes messages. Be aware though that old messages can't be deleted because of technical limits.
  - `cmdtemplate`: Displays a codeblock with a basic command. Can be used to easily make a new command.
  - `dailyreward`: Collect your daily reward. Has a cooldown of 24 hours. This amount will be added into your wallet.
  - `deposit amount`: Deposit coins to your bank account. So from Wallet to Bank.
  - `embedtemplate`: Displays a codeblock with a more complex command. Embed.
  - `event`: Creates an embed with options. Can be used for a poll or team select.
  - `github`: Creates an embed that displays the most important links to this GitHub repository.
  - `givebank @member amount`: Gives a member of the server `X` amount of coins to their wallet. Note that that targeted member must exist in the Database, but an economy account should be created. 
  - `givewallet @member amount`: Gives a member of the server `Y` amount of coins to their bank account.
  - `help`: The bot will try to help you with a small *conversation*. If the bot still doesn't help you, you can ask our support team for further assistence. Stage 1.
  - `image searchterm`: Search google images. The bot will display the best (but random) search result available on the internet.
  - `kick @target-member`: Kicks a Discord server member.
  - `leave`: If you want to stop the music from playing further, you can do `$leave`. The bot will stop the music and leave the call.
  - `mcserver ip port`: Displays an embed full of stats about the given server. For example try `$mcserver play.hypixel.com 25565`.
  - `minusbank @member amount`: Reduce the amount of coins on the targeted member's bank account. 
  - `minuswallet @member amount`: Reduce the amount of coins on the targeted member's wallet.
  - `mute @target-member`: Mutes a member. The target cannot do anything, except read. Good for spammers that you do not want to ban or kick. Removes the default role, and adds the 'Mute' role.
  - `play youtube-url`: Plays music/sound of a given YouTube video. For example try `$play https://www.youtube.com/watch?v=dQw4w9WgXcQ`.
  - `rules`: Displays all the server rules.
  - `setbank amount`: Sets your bank worth to `X` amount of coins.
  - `setwallet amount`: Sets your wallet worth to `Y` amount of coins.
  - `template`: Sends a template for starting a new command. Can be used for it's function, or to give someone a start.
  - `ticket`: Creates a new channel where you can ask your private question. If you have a general question, you can just ask your question in the support channel.
  - `unblind`: Unblinds a blinded member. Roves the 'Blinded' role, and adds the default role. 
  - `unmute`: Unmutes a muted member. Removes the 'Muted' role, and adds the default role.
  - `withdraw amount`: Withdraw coins from your bank account. So from Bank to Wallet.

The prefix for a command is `$`, after that you can type your command. For example: `$help`. 

----------------------------------------

### Files
As you might have noticed, a large portion of this repo includes files of our Discord bot. This is because our bot is open source, and you can use our code that we are using. Note that you have to do a lot of steps before you can use any of our files in your own project. If you need help with your own Discord bot, you can conctact our staff, and they will help you with setting up the basics. This won't be a full course/tutorial, but it will get you started.

### Folders
Our bot(s) are always organised in the following folders. This paragraph explains each folder. 
- [Commands](https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Discord%20Bot/Commands) = contains all the commands. They do not work without the command_handler.js file and a couple of other files.
- [Counters](https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Discord%20Bot/Counters) = contains all the counters in the Discord Server. For example the Member Counter.
- [Events](https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Discord%20Bot/Events) = contains important core files. The bot will not work without it. 
- [Handlers](https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Discord%20Bot/Handlers) = contains import core files. The bot will not work without it. 
- [Models]() = Contains database information. 

Feel free to use files from our repo. 

### Information
Note that all of the files are useless on their own. These are just for documentation. You need a couple of third-party apps for it to work. You can check all the dependencies in the `package-lock.json`. A large portion already comes with Node.js, but some are extra and custom. You can find these on [NPM](https://www.npmjs.com/).

----------------------------------------

For questions about updates or anything else, contact our support team.<br/>
To join our official Discord server, click [here](https://discord.gg/VSE75WkgFM).<br/>
