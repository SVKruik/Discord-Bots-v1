//// Module 1.1: Flag System - Normal
const flagmessage = "flagmessage"
const flags = ["everyone", "here", "delete"];

if (!args[0]) {
  message.channel.send(flagmessage)
}

if (args[0] === "delete") {
  if (!args[1]) {
    if (!args[2]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
} else if (args[1] === "delete") {
  if (!args[0]) {
    if (!args[2]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
} else if (args[2] === "delete") {
  if (!args[0]) {
    if (!args[1]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
}

// Flag 1: Everyone
if (args[0] === "everyone") {
  if (args[1] === "here") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[1] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@everyone ${flagmessage}`)
  } else {
    message.channel.send(`@everyone ${flagmessage}`)
  }
} else if (args[1] === "everyone") {
  if (args[0] === "here") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[0] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@everyone ${flagmessage}`)
  } else {
    message.channel.send(`@everyone ${flagmessage}`)
  }
} else if (args[2] === "everyone") {
  return message.channel.send(`You cannot use group tags as your third argument. Please use flag \`1\` or \`2\`.`)
}

// Flag 2: Here
if (args[0] === "here") {
  if (args[1] === "everyone") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[1] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@here ${flagmessage}`)
  } else {
    message.channel.send(`@here ${flagmessage}`)
  }
} else if (args[1] === "here") {
  if (args[0] === "everyone") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[0] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@here ${flagmessage}`)
  } else {
    message.channel.send(`@here ${flagmessage}`)
  }
} else if (args[2] === "here") {
  return message.channel.send(`You cannot use group tags as your third argument. Please use flag \`1\` or \`2\`.`)
}

//// Module 1.2: Flag System - Embeds

const flagmessage = newEmbed
const flags = ["everyone", "here", "delete"];

if (!args[0]) {
  message.channel.send(flagmessage)
}

if (args[0] === "delete") {
  if (!args[1]) {
    if (!args[2]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
} else if (args[1] === "delete") {
  if (!args[0]) {
    if (!args[2]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
} else if (args[2] === "delete") {
  if (!args[0]) {
    if (!args[1]) {
      message.delete();
      message.channel.send(flagmessage)
    }
  }
}

// Flag 1: Everyone
if (args[0] === "everyone") {
  if (args[1] === "here") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[1] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@everyone`)
    message.channel.send(newEmbed)
  } else {
    message.channel.send(`@everyone`)
    message.channel.send(newEmbed)
  }
} else if (args[1] === "everyone") {
  if (args[0] === "here") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[0] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@everyone`)
    message.channel.send(newEmbed)
  } else {
    message.channel.send(`@everyone`)
    message.channel.send(newEmbed)
  }
} else if (args[2] === "everyone") {
  return message.channel.send(`You cannot use group tags as your third argument. Please use flag \`1\` or \`2\`.`)
}

// Flag 2: Here
if (args[0] === "here") {
  if (args[1] === "everyone") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[1] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@here`)
    message.channel.send(newEmbed)
  } else {
    message.channel.send(`@here`)
    message.channel.send(newEmbed)
  }
} else if (args[1] === "here") {
  if (args[0] === "everyone") {
    return message.channel.send(`You cannot use both group tags at the same time.`)
  } else if (args[0] || args[2] === "delete") {
    message.delete();
    message.channel.send(`@here`)
    message.channel.send(newEmbed)
  } else {
    message.channel.send(`@here`)
    message.channel.send(newEmbed)
  }
} else if (args[2] === "here") {
  return message.channel.send(`You cannot use group tags as your third argument. Please use flag \`1\` or \`2\`.`)
}

//// Module 2: Channel Specific Commands

const channel = "channelid";

if (message.channel.id == channel) {
} else {
  return message.channel.send(
    `You are not in the right channel to use this command! Please use <#${channel}> instead!`
  );
}

//// Module 3: List Checking

const list = require("./../Other/list.js");

if (list.includes(args[0].toLowerCase())) {
  message.delete();
  return message.channel.send("Return message");
} else {
  message.channel.send("Return message")
}

//// Module 4: Reply in other channel

const channel = client.channels.cache.find(channel => channel.id === "channelid")
channel.send("Message")

//// Module 5: Command usage cost

if (args[0] === "test") {
  try {
    const newbal = profileData.coins - test
    if (test > profileData.coins)
      return message.channel.send(config.basemessages.messagescoinsmissing);
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: -test,
          bank: coinsback,
        },
      }
    );
    if (amountroles === 1) {
      message.channel.send(`Message \`${profileData.coins}\`.`)
    }
  } catch (err) {
    console.log(err);
  }
}

//// Module 6: Choose random

const list = ["1", "2", "3", "4"];
const random = list[Math.floor(Math.random() * list.length)];
message.channel.send(random);

//// Module 7: Display something from the database

message.channel.send(
  `${message.author.username}, your X is \`${profileData.X}\`.`
);

//// Module 8: Only numbers allowed

if (isNaN(args[0])) {
  return message.channel.send("Number only.")
} else if (isNaN(args[1])) {
  return message.channel.send("Number only")
}

//// Module 9: Args missing check

if (!args[0]) {
  return message.channel.send("Args missing")
} else if (!args[1]) {
  return message.channel.send("Args missing")
}

//// Module 9: Catch Error

const errorcode = config.errorcodes.one

try {
  message.channel.send("Test")
} catch (err) {
  message.channel.send(`Error. Code: ${errorcode}`)
  console.log(err)
}