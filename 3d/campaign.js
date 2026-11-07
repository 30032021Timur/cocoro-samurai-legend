export const WORLDS = [
  {
    "id": 1,
    "name": "Sakura Village",
    "theme": "sakura"
  },
  {
    "id": 2,
    "name": "Bamboo Forest",
    "theme": "bamboo"
  },
  {
    "id": 3,
    "name": "Shadow Temple",
    "theme": "shadow"
  },
  {
    "id": 4,
    "name": "Fire Mountains",
    "theme": "fire"
  },
  {
    "id": 5,
    "name": "Frozen Kingdom",
    "theme": "frost"
  },
  {
    "id": 6,
    "name": "Neon Tokyo",
    "theme": "neon"
  },
  {
    "id": 7,
    "name": "Dragon Valley",
    "theme": "dragon"
  },
  {
    "id": 8,
    "name": "Demon Fortress",
    "theme": "iron"
  },
  {
    "id": 9,
    "name": "Dark Dimension",
    "theme": "void"
  },
  {
    "id": 10,
    "name": "Empire",
    "theme": "heart"
  }
];

export const UPGRADES = [
  {
    "id": "hp",
    "name": "Health",
    "desc": "+12 max HP",
    "max": 5,
    "cost": 30
  },
  {
    "id": "atk",
    "name": "Attack",
    "desc": "+8% strike damage",
    "max": 5,
    "cost": 40
  },
  {
    "id": "spd",
    "name": "Speed",
    "desc": "+6% run speed",
    "max": 5,
    "cost": 35
  },
  {
    "id": "def",
    "name": "Defense",
    "desc": "+6% damage reduction",
    "max": 5,
    "cost": 35
  },
  {
    "id": "ki",
    "name": "Ki",
    "desc": "+10 max ki",
    "max": 5,
    "cost": 30
  }
];

export const BOSSES = {
  "kiba": {
    "id": "kiba",
    "name": "KIBA",
    "title": "VILLAGE WARDEN",
    "hp": 220,
    "dmg": 12,
    "speed": 2.5,
    "scale": 1.72,
    "fatality": "blue",
    "body": 13927994,
    "dark": 4860438,
    "belly": 15913640,
    "ear": 15777936,
    "eye": 16769162
  },
  "goro": {
    "id": "goro",
    "name": "GORO",
    "title": "GATE GENERAL",
    "hp": 280,
    "dmg": 14,
    "speed": 2.7,
    "scale": 1.82,
    "fatality": "thunder",
    "body": 9252146,
    "dark": 2756628,
    "belly": 15778480,
    "ear": 15249568,
    "eye": 16765088
  },
  "take": {
    "id": "take",
    "name": "TAKE",
    "title": "BAMBOO TYRANT",
    "hp": 320,
    "dmg": 15,
    "speed": 2.65,
    "scale": 1.86,
    "fatality": "thunder",
    "body": 7244360,
    "dark": 2371608,
    "belly": 15003848,
    "ear": 13689000,
    "eye": 15269808
  },
  "kage": {
    "id": "kage",
    "name": "KAGE",
    "title": "SHADOW ABBOT",
    "hp": 360,
    "dmg": 16,
    "speed": 2.85,
    "scale": 1.9,
    "fatality": "blue",
    "body": 2761784,
    "dark": 1052182,
    "belly": 6971520,
    "ear": 3814480,
    "eye": 13154047
  },
  "homa": {
    "id": "homa",
    "name": "HOMA",
    "title": "FLAME GENERAL",
    "hp": 400,
    "dmg": 17,
    "speed": 2.7,
    "scale": 1.94,
    "fatality": "thunder",
    "body": 12863266,
    "dark": 3806220,
    "belly": 15773840,
    "ear": 15239264,
    "eye": 16769162
  },
  "yuki": {
    "id": "yuki",
    "name": "YUKI",
    "title": "WINTER LORD",
    "hp": 440,
    "dmg": 17,
    "speed": 2.8,
    "scale": 1.96,
    "fatality": "blue",
    "body": 15201016,
    "dark": 2373704,
    "belly": 16777215,
    "ear": 12966122,
    "eye": 12051711
  },
  "neon": {
    "id": "neon",
    "name": "NEON",
    "title": "NEON DAIMYO",
    "hp": 480,
    "dmg": 18,
    "speed": 3.05,
    "scale": 1.98,
    "fatality": "thunder",
    "body": 2105396,
    "dark": 789526,
    "belly": 3813464,
    "ear": 16732067,
    "eye": 8057087
  },
  "ryu": {
    "id": "ryu",
    "name": "RYU",
    "title": "VALLEY DRAKE",
    "hp": 520,
    "dmg": 18,
    "speed": 2.9,
    "scale": 2.02,
    "fatality": "blue",
    "body": 13017674,
    "dark": 3811856,
    "belly": 15917744,
    "ear": 9083456,
    "eye": 16773280
  },
  "kuro": {
    "id": "kuro",
    "name": "KURO",
    "title": "IRON CAPTAIN",
    "hp": 560,
    "dmg": 19,
    "speed": 2.75,
    "scale": 2.05,
    "fatality": "thunder",
    "body": 4870232,
    "dark": 1711136,
    "belly": 11581118,
    "ear": 2764340,
    "eye": 16760992
  },
  "fang": {
    "id": "fang",
    "name": "FANG",
    "title": "VOID FANG",
    "hp": 600,
    "dmg": 20,
    "speed": 3,
    "scale": 2.08,
    "fatality": "blue",
    "body": 3810392,
    "dark": 1312792,
    "belly": 8413344,
    "ear": 2364464,
    "eye": 14725375
  },
  "lord": {
    "id": "lord",
    "name": "LORD",
    "title": "",
    "hp": 680,
    "dmg": 21,
    "speed": 2.85,
    "scale": 2.16,
    "fatality": "thunder",
    "body": 16249316,
    "dark": 1709070,
    "belly": 16775406,
    "ear": 1709070,
    "eye": 16765096
  }
};

export const LEVELS = [
  {
    "id": 1,
    "name": "Sakura Village",
    "world": 1,
    "worldName": "Sakura Village",
    "theme": "sakura",
    "clearBonus": 30,
    "rooms": [
      {
        "name": "Village Gate",
        "foes": [
          "alley",
          "alley",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Blossom Bridge",
        "foes": [
          "pounce",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Shrine Path",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Warden Court",
        "foes": [],
        "boss": "kiba",
        "heal": false
      }
    ]
  },
  {
    "id": 2,
    "name": "East Road",
    "world": 1,
    "worldName": "Sakura Village",
    "theme": "sakura",
    "clearBonus": 40,
    "rooms": [
      {
        "name": "Petal Mile",
        "foes": [
          "alley",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Wagon Bend",
        "foes": [
          "pounce",
          "pounce",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Road Camp",
        "foes": [
          "blade",
          "pounce",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 3,
    "name": "Night Market",
    "world": 1,
    "worldName": "Sakura Village",
    "theme": "sakura",
    "clearBonus": 50,
    "rooms": [
      {
        "name": "Lantern Row",
        "foes": [
          "alley",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Stall Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Market Close",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Bell Shrine",
    "world": 1,
    "worldName": "Sakura Village",
    "theme": "sakura",
    "clearBonus": 60,
    "rooms": [
      {
        "name": "Stone Steps",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Bell Court",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Inner Gate",
        "foes": [
          "blade",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Warden Gate",
    "world": 1,
    "worldName": "Sakura Village",
    "theme": "sakura",
    "clearBonus": 90,
    "rooms": [
      {
        "name": "Outer Wall",
        "foes": [
          "blade",
          "pounce",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Banner Court",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "General Yard",
        "foes": [],
        "boss": "goro",
        "heal": false
      }
    ]
  },
  {
    "id": 6,
    "name": "Green Gate",
    "world": 2,
    "worldName": "Bamboo Forest",
    "theme": "bamboo",
    "clearBonus": 70,
    "rooms": [
      {
        "name": "Stalk Gate",
        "foes": [
          "alley",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "First Bridge",
        "foes": [
          "pounce",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Gate Clearing",
        "foes": [
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 7,
    "name": "Stalk Maze",
    "world": 2,
    "worldName": "Bamboo Forest",
    "theme": "bamboo",
    "clearBonus": 80,
    "rooms": [
      {
        "name": "Maze Mouth",
        "foes": [
          "pounce",
          "pounce",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "High Walk",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Dead End",
        "foes": [
          "blade",
          "pounce",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 8,
    "name": "Panda Bridge",
    "world": 2,
    "worldName": "Bamboo Forest",
    "theme": "bamboo",
    "clearBonus": 90,
    "rooms": [
      {
        "name": "River Gate",
        "foes": [
          "alley",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Panda Span",
        "foes": [
          "pounce",
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Far Bank",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 9,
    "name": "Whisper Grove",
    "world": 2,
    "worldName": "Bamboo Forest",
    "theme": "bamboo",
    "clearBonus": 100,
    "rooms": [
      {
        "name": "Whisper Path",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Lantern Grove",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Still Heart",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 10,
    "name": "Bamboo Tyrant",
    "world": 2,
    "worldName": "Bamboo Forest",
    "theme": "bamboo",
    "clearBonus": 120,
    "rooms": [
      {
        "name": "Tyrant Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Root Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Tyrant Court",
        "foes": [],
        "boss": "take",
        "heal": false
      }
    ]
  },
  {
    "id": 11,
    "name": "Lantern Steps",
    "world": 3,
    "worldName": "Shadow Temple",
    "theme": "shadow",
    "clearBonus": 110,
    "rooms": [
      {
        "name": "First Steps",
        "foes": [
          "alley",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Bell Stair",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Upper Landing",
        "foes": [
          "blade",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 12,
    "name": "Ink Hall",
    "world": 3,
    "worldName": "Shadow Temple",
    "theme": "shadow",
    "clearBonus": 120,
    "rooms": [
      {
        "name": "Ink Door",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Scroll Bridge",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Black Pool",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 13,
    "name": "Bell Crypt",
    "world": 3,
    "worldName": "Shadow Temple",
    "theme": "shadow",
    "clearBonus": 130,
    "rooms": [
      {
        "name": "Crypt Mouth",
        "foes": [
          "blade",
          "alley",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Bone Stair",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Deep Bell",
        "foes": [
          "blade",
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 14,
    "name": "Mask Gallery",
    "world": 3,
    "worldName": "Shadow Temple",
    "theme": "shadow",
    "clearBonus": 140,
    "rooms": [
      {
        "name": "Mask Row",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Gallery Bridge",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Last Mask",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 15,
    "name": "Shadow Abbot",
    "world": 3,
    "worldName": "Shadow Temple",
    "theme": "shadow",
    "clearBonus": 160,
    "rooms": [
      {
        "name": "Abbot Steps",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Veil Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Abbot Court",
        "foes": [],
        "boss": "kage",
        "heal": false
      }
    ]
  },
  {
    "id": 16,
    "name": "Cinder Path",
    "world": 4,
    "worldName": "Fire Mountains",
    "theme": "fire",
    "clearBonus": 150,
    "rooms": [
      {
        "name": "Ember Gate",
        "foes": [
          "alley",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Ash Span",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Cinder Rest",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 17,
    "name": "Ash Bridge",
    "world": 4,
    "worldName": "Fire Mountains",
    "theme": "fire",
    "clearBonus": 160,
    "rooms": [
      {
        "name": "Scorched Mile",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Lava Boards",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Far Cinder",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 18,
    "name": "Magma Stairs",
    "world": 4,
    "worldName": "Fire Mountains",
    "theme": "fire",
    "clearBonus": 170,
    "rooms": [
      {
        "name": "Stair Mouth",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Heat Walk",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Caldera Lip",
        "foes": [
          "blade",
          "blade",
          "alley",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 19,
    "name": "Forge Yard",
    "world": 4,
    "worldName": "Fire Mountains",
    "theme": "fire",
    "clearBonus": 180,
    "rooms": [
      {
        "name": "Anvil Row",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Bellows Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Quench Pit",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 20,
    "name": "Flame General",
    "world": 4,
    "worldName": "Fire Mountains",
    "theme": "fire",
    "clearBonus": 200,
    "rooms": [
      {
        "name": "Banner Ash",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Flame Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "General Court",
        "foes": [],
        "boss": "homa",
        "heal": false
      }
    ]
  },
  {
    "id": 21,
    "name": "Snow Gate",
    "world": 5,
    "worldName": "Frozen Kingdom",
    "theme": "frost",
    "clearBonus": 180,
    "rooms": [
      {
        "name": "Snow Arch",
        "foes": [
          "alley",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Drift Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Gate Snow",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 22,
    "name": "Ice Canal",
    "world": 5,
    "worldName": "Frozen Kingdom",
    "theme": "frost",
    "clearBonus": 190,
    "rooms": [
      {
        "name": "Frozen Dock",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Canal Boards",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Lock House",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 23,
    "name": "Frost Shrine",
    "world": 5,
    "worldName": "Frozen Kingdom",
    "theme": "frost",
    "clearBonus": 200,
    "rooms": [
      {
        "name": "Ice Steps",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Shrine Ice",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Offering Snow",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 24,
    "name": "Blizzard Keep",
    "world": 5,
    "worldName": "Frozen Kingdom",
    "theme": "frost",
    "clearBonus": 210,
    "rooms": [
      {
        "name": "Keep Wall",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "White Court",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Inner Drift",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 25,
    "name": "Winter Lord",
    "world": 5,
    "worldName": "Frozen Kingdom",
    "theme": "frost",
    "clearBonus": 230,
    "rooms": [
      {
        "name": "Lord Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Throne Ice",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Winter Court",
        "foes": [],
        "boss": "yuki",
        "heal": false
      }
    ]
  },
  {
    "id": 26,
    "name": "Rain Alley",
    "world": 6,
    "worldName": "Neon Tokyo",
    "theme": "neon",
    "clearBonus": 210,
    "rooms": [
      {
        "name": "Neon Puddle",
        "foes": [
          "pounce",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Sign Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Alley End",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 27,
    "name": "Arcade Roof",
    "world": 6,
    "worldName": "Neon Tokyo",
    "theme": "neon",
    "clearBonus": 220,
    "rooms": [
      {
        "name": "Ticket Stair",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Roof Run",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Billboard",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 28,
    "name": "Bullet Train",
    "world": 6,
    "worldName": "Neon Tokyo",
    "theme": "neon",
    "clearBonus": 230,
    "rooms": [
      {
        "name": "Platform 3",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Car Roof",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Last Car",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 29,
    "name": "Hologram Park",
    "world": 6,
    "worldName": "Neon Tokyo",
    "theme": "neon",
    "clearBonus": 240,
    "rooms": [
      {
        "name": "Gate Lights",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Fountain Walk",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Holo Court",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 30,
    "name": "Neon Daimyo",
    "world": 6,
    "worldName": "Neon Tokyo",
    "theme": "neon",
    "clearBonus": 260,
    "rooms": [
      {
        "name": "Daimyo Street",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Tower Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Daimyo Court",
        "foes": [],
        "boss": "neon",
        "heal": false
      }
    ]
  },
  {
    "id": 31,
    "name": "Scale Ridge",
    "world": 7,
    "worldName": "Dragon Valley",
    "theme": "dragon",
    "clearBonus": 270,
    "rooms": [
      {
        "name": "Ridge Gate",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Wind Shelf",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Scale Rest",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 32,
    "name": "Wind Nest",
    "world": 7,
    "worldName": "Dragon Valley",
    "theme": "dragon",
    "clearBonus": 280,
    "rooms": [
      {
        "name": "Nest Mouth",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "High Nest",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Gale End",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 33,
    "name": "Bone Bridge",
    "world": 7,
    "worldName": "Dragon Valley",
    "theme": "dragon",
    "clearBonus": 290,
    "rooms": [
      {
        "name": "Bone Gate",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Spine Span",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Far Rib",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 34,
    "name": "Ember Cave",
    "world": 7,
    "worldName": "Dragon Valley",
    "theme": "dragon",
    "clearBonus": 300,
    "rooms": [
      {
        "name": "Cave Mouth",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Ember Walk",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Heart Fire",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 35,
    "name": "Valley Drake",
    "world": 7,
    "worldName": "Dragon Valley",
    "theme": "dragon",
    "clearBonus": 320,
    "rooms": [
      {
        "name": "Drake Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Nest Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Drake Court",
        "foes": [],
        "boss": "ryu",
        "heal": false
      }
    ]
  },
  {
    "id": 36,
    "name": "Iron Gate",
    "world": 8,
    "worldName": "Demon Fortress",
    "theme": "iron",
    "clearBonus": 300,
    "rooms": [
      {
        "name": "Iron Arch",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Wall Walk",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Gate Yard",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 37,
    "name": "Spike Court",
    "world": 8,
    "worldName": "Demon Fortress",
    "theme": "iron",
    "clearBonus": 310,
    "rooms": [
      {
        "name": "Spike Row",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Court Ledge",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Last Spike",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 38,
    "name": "Chain Bridge",
    "world": 8,
    "worldName": "Demon Fortress",
    "theme": "iron",
    "clearBonus": 320,
    "rooms": [
      {
        "name": "Chain Gate",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Chain Span",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Far Tower",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 39,
    "name": "War Drum",
    "world": 8,
    "worldName": "Demon Fortress",
    "theme": "iron",
    "clearBonus": 330,
    "rooms": [
      {
        "name": "Drum Stair",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Drum Court",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "War Yard",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 40,
    "name": "Fortress Captain",
    "world": 8,
    "worldName": "Demon Fortress",
    "theme": "iron",
    "clearBonus": 350,
    "rooms": [
      {
        "name": "Captain Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Keep Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Captain Court",
        "foes": [],
        "boss": "kuro",
        "heal": false
      }
    ]
  },
  {
    "id": 41,
    "name": "Void Pier",
    "world": 9,
    "worldName": "Dark Dimension",
    "theme": "void",
    "clearBonus": 340,
    "rooms": [
      {
        "name": "Pier End",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Black Water",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Far Dock",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 42,
    "name": "Mirror Stair",
    "world": 9,
    "worldName": "Dark Dimension",
    "theme": "void",
    "clearBonus": 350,
    "rooms": [
      {
        "name": "Glass Step",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Reflect Walk",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Last Mirror",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 43,
    "name": "Starless Field",
    "world": 9,
    "worldName": "Dark Dimension",
    "theme": "void",
    "clearBonus": 360,
    "rooms": [
      {
        "name": "Dark Mile",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "No Horizon",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Field Heart",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 44,
    "name": "Eclipse Shrine",
    "world": 9,
    "worldName": "Dark Dimension",
    "theme": "void",
    "clearBonus": 370,
    "rooms": [
      {
        "name": "Eclipse Step",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Red Court",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Shrine Dark",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 45,
    "name": "Dimension Fang",
    "world": 9,
    "worldName": "Dark Dimension",
    "theme": "void",
    "clearBonus": 390,
    "rooms": [
      {
        "name": "Fang Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Rift Bridge",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Fang Court",
        "foes": [],
        "boss": "fang",
        "heal": false
      }
    ]
  },
  {
    "id": 46,
    "name": "Gold March",
    "world": 10,
    "worldName": "Empire",
    "theme": "heart",
    "clearBonus": 380,
    "rooms": [
      {
        "name": "Gold Gate",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Parade Span",
        "foes": [
          "pounce",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "March End",
        "foes": [
          "blade",
          "alley",
          "blade"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 47,
    "name": "Banner City",
    "world": 10,
    "worldName": "Empire",
    "theme": "heart",
    "clearBonus": 390,
    "rooms": [
      {
        "name": "Banner Row",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Roof Parade",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "City Heart",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 48,
    "name": "Throne Bridge",
    "world": 10,
    "worldName": "Empire",
    "theme": "heart",
    "clearBonus": 400,
    "rooms": [
      {
        "name": "Throne Gate",
        "foes": [
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Gold Span",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Far Keep",
        "foes": [
          "blade",
          "blade",
          "pounce"
        ],
        "boss": null,
        "heal": true
      }
    ]
  },
  {
    "id": 49,
    "name": "Empire Keep",
    "world": 10,
    "worldName": "Empire",
    "theme": "heart",
    "clearBonus": 410,
    "rooms": [
      {
        "name": "Keep Stair",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "alley"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Inner Court",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Last Hall",
        "foes": [
          "blade",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": false
      }
    ]
  },
  {
    "id": 50,
    "name": "Lord",
    "world": 10,
    "worldName": "Empire",
    "theme": "heart",
    "clearBonus": 500,
    "rooms": [
      {
        "name": "Empire Road",
        "foes": [
          "blade",
          "pounce",
          "blade",
          "blade"
        ],
        "boss": null,
        "heal": false
      },
      {
        "name": "Throne Walk",
        "foes": [
          "pounce",
          "blade",
          "pounce",
          "blade"
        ],
        "boss": null,
        "heal": true
      },
      {
        "name": "Lord Court",
        "foes": [],
        "boss": "lord",
        "heal": false
      }
    ]
  }
];
