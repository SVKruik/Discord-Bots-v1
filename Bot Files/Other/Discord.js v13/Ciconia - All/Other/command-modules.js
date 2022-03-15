//// Module 1: Flag System

const test = "Flag Module Template"
const flags = ["everyone", "here", "delete"];

if (!args[0]) {
  message.channel.send({ content: test) // Send base message
}

if (args[2] === "everyone" || "here") {
  return message.channel.send({ content: `You cannot use group tags as your third argument. Please use argument 1 or 2.`})
} else {

  if (args[0] === "everyone") {
    if (args[1] === "here") {
      return message.channel.send({ content: `You cannot tag both \`everyone\` and \`here\`.`})
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send({ content: `@everyone ${test}`})
    } else {
      message.channel.send({ content: `@everyone ${test}`})
    }
  } else if (args[1] === "everyone") {
    if (args[0] === "here") {
      return message.channel.send({ content: `You cannot tag both \`everyone\` and \`here\`.`})
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send({ content: `@everyone ${test}`})
    } else {
      message.channel.send({ content: `@everyone ${test}`})
    }
  }

  if (args[0] === "here") {
    if (args[1] === "everyone") {
      return message.channel.send({ content: `You cannot tag both \`everyone\` and \`here\`.`})
    } else if (args[1] || args[2] === "delete") {
      message.delete();
      message.channel.send({ content: `@here ${test}`})
    } else {
      message.channel.send({ content: `@here ${test}`})
    }
  } else if (args[1] === "here") {
    if (args[0] === "everyone") {
      return message.channel.send({ content: `You cannot tag both \`everyone\` and \`here\`.`})
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send({ content: `@here ${test}`})
    } else {
      message.channel.send({ content: `@here ${test}`})
    }
  }
}

//// Module 2: Channel Specific Commands

const channel = "channelid";

if (message.channel.id == channel) {
} else {
  return message.channel.send({ content: 
    `You are not in the right channel to use this command! Please use <#${channel}> instead!`
  );
}

//// Module 3: List Checking

const list = require("./../Other/list.js");

if (list.includes(args[0].toLowerCase())) {
  message.delete();
  return message.channel.send({ content: "Return message");
} else {
  message.channel.send({ content: "Return message")
}

//// Module 4: Reply in other channel

const channel = client.channels.cache.find(channel => channel.id === "channelid")
channel.send("Message")

//// Module 5: Command usage cost

if (args[0] === "test") {
  try {
    const newbal = profileData.coins - test
    if (test > profileData.coins)
      return message.channel.send({ content: config.basemessages.messagescoinsmissing});
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
      message.channel.send({ content: `Message \`${profileData.coins}\`.`})
    }
  } catch (err) {
    console.log(err);
  }
}

//// Module 6: Choose random

const list = ["1", "2", "3", "4"];
const random = list[Math.floor(Math.random() * list.length)];
message.channel.send({ content: random});

//// Module 7: Display something from the database

message.channel.send({ content: 
  `${message.author.username}, your X is \`${profileData.X}\`.`
);

//// Module 8: Only numbers allowed

if (isNaN(args[0])) {
  return message.channel.send({ content: "Number only.")
} else if (isNaN(args[1])) {
  return message.channel.send({ content: "Number only")
}

//// Module 9: Args missing check

if (!args[0]) {
  return message.channel.send({ content: "Args missing")
} else if (!args[1]) {
  return message.channel.send({ content: "Args missing")
}