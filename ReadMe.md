# Welcome to MultiCube Community
This GitHub repository is dedicated to our Minecraft Servers, and our own Discord Bots. All information about anything we make, can be found in this Repository.

---

### General Information
We are a group of people that make Minecraft servers and Discord bots. 

### Joining our Minecraft Servers
Most servers are just like any other public server fully joinable. But we have a couple of servers that have Mods. Like discribed above (General Information) you have to download them. If you want to know what servers have Mods, contact our support team.

### Ranks and Roles
If you want to apply for a Rank and/or Role, please fill in the [form](https://forms.gle/pabpqPiWeBp9aZ2a8). Note that for Roles like 'Builder' or 'Redstoner' aren't available for apply. These roles can be obtained by showing off you skill. If you want to be 'Redstoner', you have to be good with Redstone. If you want to be 'Builder', you have to be good with building stuff etc. If you are filling in the form, please tell us the truth. You can upload a picture of anything you have build and show us something. This isn't required, but it does help. Be aware though that we can't have 100 Admins for example, so check if the Ranks/Roles aren't full. Also, if you want the Support Role/Rank, you have to be a longtime player and know how things work. You can't get such roles if you are playing for a day or 2. Support means helping people, so you have to know how things work around our community.

### Support and Help
If you have questions about anything, you can contact our support team like said before. Check which people have the Support Role/Rank. Be polite and ask anything you'd like! If there's anything that can be done better/on another way or have suggestions, you can talk to people with Support Role. Please, be clear about what you'd like to see change, so we can get to work if we agree.

### Donate
All of our services are free. We do not get payed. Because of this, support is greatly appreciated. You can support us via Ko-Fi. You can one-time donate, or become a Supporter. Supporters will receive benefits and other exclusive cool stuff. On Ko-Fi, you can also find our temporary webshop. We will move everything when our own website is done. Here is the link to our page:

  - [Ko-Fi](https://ko-fi.com/multicubecommunity)

If you choose to support us (which we would greatly appreciate), we will get to work and pass all the benefits to you ASAP. Thank you in advance!

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

### Levels
Besides an economy system, we also have a Level system, with Levels and Experience. Each time you send a message, some Experience will be added into your profile. When you have enough Experience, you can buy a new level. We are still working on this, but the basics are there. Check the 'Commands' paragraph to see the commands associated with our Level system.

### Usefull stuff/links
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
Here is a list for commands on our Discord server. Be aware though that some commands are for Administrators only.

#### Member Managing Commands
| Command           | Info                                                                  | Usage                             | Aliases              |
|-------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------|
| `ban`             | Speaks for itself. Bans a member.                                     | `ban @target`                     |                      |
| `blind`           | Completely blinds a member. Target cannot do anything.                | `blind @target`                   |                      |
| `clear`           | Bulk delete messages. Old messages can't be deleted with this.        | `clear amount`                    |                      |
| `kick`  	        | Kicks a member out of the Discord Server.                             | `kick @target`                    |                      |
| `mute`            | Mutes a member. Target can only read. All channels read-only.         | `mute @target`                    |                      |
| `ping`            | Pings the bot, and the bot replies. Just for error checking.          | `ping`                            |                      |
| `unblind`         | Unblinds a blinded member.                                            | `unblind @target`                 |                      | 
| `unmute`          | Unmutes a muted member.                                               | `unmute @target`                  |                      |

#### Economy System Commands
| Command           | Info                                                                  | Usage                             | Aliases              |
|-------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------|
| `balance`         | Displays both your Bank Account and Wallet balance.                   | `balance`                         | `bal`                |
| `balancebank`     | Displays only your Bank Account balance.                              | `balancebank`                     | `balbank`            |
| `balancewallet`   | Displays only your Wallet balance.                                    | `balancewallet`                   | `balwallet`          | 
| `dailyreward`     | Collect your daily reward. You receive a random amount of coins.      | `dailyreward`                     | `dlyrwd`, `dr`       | 
| `deposit`         | Transfer coins from your Wallet into your Bank Account.               | `deposit`                         | `depo`, `dep`        | 
| `givebank`        | Give a member `X` amount of coins for their Bank Account balance.     | `givebank @target amount`         |                      |
| `givewallet`      | Give a member `Y` amount of coins for their Wallet balance.           | `givewallet @target amount` 	    |                      | 
| `minusbank`       | Substract `A` amount of coins from a target's Bank Account balance.   | `minusbank @target amount`        |                      |   
| `minuswallet`     | Substract `B` amount of coins from a target's Wallet balance.         | `minuswallet @target amount`      |                      | 
| `search`          | Search for some coins. You get 3 options, and you can pick one.       | `search`                          | `srch`               | 
| `setbank`         | Reset the balance of a member's Bank Account.                         | `setbank @target newamount`       |                      |
| `setwallet`       | Reset the balance of a member's Wallet.                               | `setwallet @target newamount`     |                      | 
| `withdraw`        | Transfer coins from your Bank Account into your Wallet.               | `withdraw`                        | `with`, `wit`        |

#### Level System Commands
| Command           | Info                                                                  | Usage                             | Aliases              |
|-------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------|
| `experience`      | Displays your current Experience amount.                              | `experience`                      | `exp`, `xp`          | 
| `giveexperience`  | Give a member `X` amount of Experience.                               | `giveexperience @target amount`   |                      |
| `givelevel`       | Give a member `Y` amount of Levels.                                   | `givelevel @target amount`        |                      |
| `level`           | Displays your current Level.                                          | `level`                           | `lvl`                |
| `levelstatistics` | Displays both your Experience amount and Level.                       | `levelstatistics`                 | `lvlstats`, `lvlstat`|
| `minusexperience` | Substract `A` amount of Experience.                                   | `minusexperience @target amount`  |                      |
| `minuslevel`      | Substract `B` amount of Levels.                                       | `minuslevel @target amount`       |                      |
| `setexperience`   | Reset the amount of Experience a member has.                          | `setexperience @target newamount` |                      |
| `setlevel`        | Reset the amount of Levels a member has.                              | `setlevel @target newamount`      |                      | 

#### Commands With Embeds
| Command           | Info                                                                  | Usage                             | Aliases              |
|-------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------|
| `donate`          | Sends a embed with links to our page where you can support us.        | `donate`                          |                      |
| `embedtemplate`   | Sends you a blank embed template. Just for Bot Developers.            | `embedtemplate`                   | `mbdtemp`            |
| `event`           | Creates a poll.                                                       | `event`                           |                      |
| `github`          | Displays the most used/important links to this GitHub Repository.     | `github`                          | `gh`                 |
| `help-st1`        | The bot tries to help you with a question. Stage 1.                   | `help`  	                        |                      |
| `minecraftserver` | Displays information about a given Minecraft server.                  | `mcserver server-ip serverport`   | `mc`, `mccheck`      |
| `profile`         | Displays all the information we have stored in our Database.          | `profile`                         | `pro`                | 
| `rules`           | Displays all of our Discord Server rules.                             | `rules`                           |                      |
| `serverip`        | Displays the Server IP of MultiCube with some information.            | `serverip`                        | `server`             |

#### Other Commands
| Command           | Info                                                                  | Usage                             | Aliases              |
|-------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------|
| `apply`           | Displays the link to a Google Form if you'd like to apply for a role. | `apply`                           |                      |
| `commandtemplate` | Sends you a simple text. Also intended for Bot Developers.            | `commandtemplate`                 | `cmdtemp`            |
| `image`           | Sends you a random google image. Command just for fun.                | `image searchname`                | `img`                | 
| `musicleave`      | Makes the Music Bot stop the music and leave the call.                | `musicleave`                      | `leave`, `msclv`  	 |
| `play`            | Makes the bot play the sound of a YouTube video. You must be in call. | `play youtube-url`                | `music`, `sound`      |
| `ticket`          | Creates a private chat room for if you have a question for the staff. | `ticket`                          | `tkt`                |


The prefix for a command is `$`, after that you can type your command. For example: `$help`. 

----------------------------------------

For questions about updates or anything else, contact our support team.<br/>
To join our official Discord server, click [here](https://discord.gg/VSE75WkgFM).<br/>
For the website view of this Repository, go [here](https://puffinkwadraat.github.io/MultiCube-and-Child-Servers/). Created by GitHub Pages
