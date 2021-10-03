# MultiCube - Bot Permissions
----------------------------------------

For a bot to function properly, it needs enough permissions. There is a [website](https://discordapi.com/permissions.html#8589934591) where you can calculate and add your bots to Discord servers. You can select what permissions a bot needs. All our bots have full permissions, so that nothing goes wrong. If you're bot is lacking permissions for a specific command that you made (for example: banning), you will be notified in the Console. We recommend [VSC](https://code.visualstudio.com/), because you can see your Code and the Console (terminal) at the same time. 

----------------------------------------

For a bot to have full permissions, use this code: 8589934591. <br/>
You can also use this [link](https://discordapi.com/permissions.html#8589934591) so you don't have to click anything, and all the permissions are already there.

----------------------------------------

But note that these permissions are for the bot, and not the Command itself. For example, at the start of every command there is a line where the permissions for a certain command are listed. In the `admin-ban.js` file, you need the following permissions: `["ADMINISTRATOR", "BAN_MEMBERS"]`. These permissions can be found [here](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags). 
