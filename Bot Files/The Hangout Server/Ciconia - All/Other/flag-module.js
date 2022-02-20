const test = "Flag Module Template"

// Flag Checking
const flags = ["everyone", "here", "delete"];

if (!args[0]) {
  message.channel.send(test)
}

if (args[2] === "everyone" || "here") {
  return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
} else {

  // Flag 1: Everyone
  if (args[0] === "everyone") {
    if (args[1] === "here") {
      return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send(`@everyone ${test}`)
    } else {
      message.channel.send(`@everyone ${test}`)
    }
  } else if (args[1] === "everyone") {
    if (args[0] === "here") {
      return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send(`@everyone ${test}`)
    } else {
      message.channel.send(`@everyone ${test}`)
    }
  }

  // Flag 2: Here
  if (args[0] === "here") {
    if (args[1] === "everyone") {
      return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
    } else if (args[1] || args[2] === "delete") {
      message.delete();
      message.channel.send(`@here ${test}`)
    } else {
      message.channel.send(`@here ${test}`)
    }
  } else if (args[1] === "here") {
    if (args[0] === "everyone") {
      return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
    } else if (args[0] || args[2] === "delete") {
      message.delete();
      message.channel.send(`@here ${test}`)
    } else {
      message.channel.send(`@here ${test}`)
    }
  }
}