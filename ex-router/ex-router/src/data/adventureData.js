// src/data/adventureData.js

// This object contains all the scenarios for your adventure.
// Each key is a unique ID for the scenario.
export const adventureData = {
  scenarios: {
    'start': {
      title: "The Forest Awakening",
      text: "You wake up in a dense forest, with no memory of how you got here. Two paths are visible, one to the left and one to the right. Which do you choose?",
      icon: "🌳", // Forest icon
      choices: [
        { text: "Left Path (Looks safe)", nextPath: "/scenario/left-path" },
        { text: "Right Path (More illuminated)", nextPath: "/scenario/right-path" }
      ]
    },
    'left-path': {
      title: "The Mysterious Cave",
      text: "The left path leads to a dark, damp cave. You hear a constant drip and a faint whisper coming from inside. It seems like a good hiding spot, but what lies within?",
      icon: "🦇", // Cave/Bat icon
      choices: [
        { text: "Enter the cave", nextPath: "/scenario/inside-cave" },
        { text: "Go back and try the right path", nextPath: "/scenario/right-path" } // Go back to another scenario
      ]
    },
    'right-path': {
      title: "The Sparkling River",
      text: "The right path leads you to a river with crystal-clear waters. You see something shimmering on the opposite bank. It looks like a valuable item, but the current is strong.",
      icon: "🏞️", // River/Landscape icon
      choices: [
        { text: "Attempt to cross the river", nextPath: "/scenario/cross-river" },
        { text: "Follow the riverbank (maybe find a bridge)", nextPath: "/scenario/follow-bank" }
      ]
    },
    'inside-cave': {
      title: "The Ancient Treasure",
      text: "You enter the cave and, at the back, find an ancient chest full of gold coins and jewels! You become rich!",
      icon: "💰", // Treasure icon
      choices: [
        { text: "Take the treasure and leave", nextPath: "/ending/treasure-found" }
      ]
    },
    'cross-river': {
      title: "The Dangerous Current",
      text: "You try to cross the river, but the current is too strong. You are swept away by the water and lose all your belongings. What a pity!",
      icon: "🌊", // Drowning/Water icon
      choices: [
        { text: "Accept your fate", nextPath: "/ending/drowned" }
      ]
    },
    'follow-bank': {
      title: "The Unknown Bridge",
      text: "Following the bank, you find an old, swaying rope bridge crossing the river. It looks dangerous, but it's the only way to get the shimmering item.",
      icon: "🌉", // Bridge icon
      choices: [
        { text: "Cross the bridge", nextPath: "/scenario/cross-bridge" },
        { text: "Give up on the item and return to the forest", nextPath: "/ending/gave-up" }
      ]
    },
    'cross-bridge': {
      title: "The Magical Amulet",
      text: "You successfully cross the bridge and retrieve the shimmering item: a magical amulet that grants wishes! Your adventure ends with a new power.",
      icon: "✨", // Magic Amulet icon
      choices: [
        { text: "Use the amulet", nextPath: "/ending/amulet-found" }
      ]
    }
  },
  endings: {
    'treasure-found': {
      title: "Happy Ending: The Rich Adventurer",
      text: "With the cave's treasure, you live a life of luxury and adventure. Congratulations!",
      type: "happy"
    },
    'drowned': {
      title: "Tragic Ending: The Drowned Adventurer",
      text: "The river's current was relentless. Your adventure ends here, rather wetly.",
      type: "sad"
    },
    'gave-up': {
      title: "Neutral Ending: The Cautious Adventurer",
      text: "You decided that safety is worth more than any treasure. You return home, perhaps a little wiser.",
      type: "neutral"
    },
    'amulet-found': {
      title: "Epic Ending: The Amulet Bearer",
      text: "With the magical amulet, the world is at your feet. New adventures await!",
      type: "epic"
    }
  }
};
