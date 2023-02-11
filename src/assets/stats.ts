interface ITypeStats {
  bonuses?: {
    Strength?: Number;
    Dexterity?: Number;
    Intelligence?: Number;
    Charisma?: Number;
    Constitution?: Number;
    Wisdom?: Number;
  };
  knownSkillProficiencies?: String[];
  unknownSkillProficiencies?: String[][];
  knownItemProficiencies?: String[];
  unknownItemProficiencies?: String[][];
  knownEquipment?: String[];
  unknownEquipment?: String[][];
  knownWeapons?: String[];
  unknownWeapons?: String[][];
  knownArmor?: String[];
  unknownArmor?: String[][];
  knownLanguages?: String[];
  unknownLanguages?: String[][];
  knownCantrips?: String[];
  unknownCantrips?: String[][];
  knownSpells?: String[];
  unknownSpells?: String[][];
}

export interface IStats {
  Bard: ITypeStats;
  "Hill Dwarf": ITypeStats;
  Entertainer: ITypeStats;
}

export const stats: IStats = {
  Bard: {
    knownItemProficiencies: [
      "Light Armor",
      "Simple Weapons",
      "Hand Crossbows",
      "Longswords",
      "Rapiers",
      "Shortswords",
    ],
    unknownItemProficiencies: [
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan flute",
        "Shawn",
        "Viol",
      ],
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan flute",
        "Shawn",
        "Viol",
      ],
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan flute",
        "Shawn",
        "Viol",
      ],
    ],
    knownSkillProficiencies: ["Dexterity", "Charisma"],
    unknownSkillProficiencies: [
      [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival",
      ],
      [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival",
      ],
      [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival",
      ],
    ],
    unknownEquipment: [
      ["Diplomat's Pack", "Entertainer's Pack"],
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan Flute",
        "Shawn",
        "Viol",
      ],
    ],
    knownArmor: ["Leather Armor"],
    knownWeapons: ["Dagger"],
    unknownWeapons: [
      [
        "Rapier",
        "Longsword",
        "Club",
        "Greatclub",
        "Handaxe",
        "Javelin",
        "Light Hammer",
        "Mace",
        "Quarterstaff",
        "Sickle",
        "Spear",
        "Light Crossbow",
        "Dart",
        "Shortbow",
        "Sling",
      ],
    ],
    unknownCantrips: [
      [
        "Blade Ward",
        "Dancing Lights",
        "Friends",
        "Light",
        "Mage Hand",
        "Mending",
        "Message",
        "Minor Illusion",
        "Prestidigitation",
        "Thunderclap",
        "True Strike",
        "Vicious Mockery",
      ],
      [
        "Blade Ward",
        "Dancing Lights",
        "Friends",
        "Light",
        "Mage Hand",
        "Mending",
        "Message",
        "Minor Illusion",
        "Prestidigitation",
        "Thunderclap",
        "True Strike",
        "Vicious Mockery",
      ],
    ],
    knownSpells: [],
    unknownSpells: [
      [
        "Animal Friendship",
        "Bane",
        "Charm Person",
        "Color Spray",
        "Command",
        "Comprehend Languages",
        "Cure Wounds",
        "Detect Magic",
        "Disguise Self",
        "Dissonant Whispers",
        "Distort Value",
        "Eart Tremor",
        "Faerie Fire",
        "Feather Fall",
        "Guiding Hand",
        "Healing Word",
        "Heroism",
        "Identity",
        "Illusory Script",
        "Longstrider",
        "Silent Image",
        "Silvery Barbs",
        "Sleep",
        "Speak With Animals",
        "Tasha's Hideous Laughter",
        "Thunderwave",
        "Unseen Servant",
      ],
      [
        "Animal Friendship",
        "Bane",
        "Charm Person",
        "Color Spray",
        "Command",
        "Comprehend Languages",
        "Cure Wounds",
        "Detect Magic",
        "Disguise Self",
        "Dissonant Whispers",
        "Distort Value",
        "Eart Tremor",
        "Faerie Fire",
        "Feather Fall",
        "Guiding Hand",
        "Healing Word",
        "Heroism",
        "Identity",
        "Illusory Script",
        "Longstrider",
        "Silent Image",
        "Silvery Barbs",
        "Sleep",
        "Speak With Animals",
        "Tasha's Hideous Laughter",
        "Thunderwave",
        "Unseen Servant",
      ],
      [
        "Animal Friendship",
        "Bane",
        "Charm Person",
        "Color Spray",
        "Command",
        "Comprehend Languages",
        "Cure Wounds",
        "Detect Magic",
        "Disguise Self",
        "Dissonant Whispers",
        "Distort Value",
        "Eart Tremor",
        "Faerie Fire",
        "Feather Fall",
        "Guiding Hand",
        "Healing Word",
        "Heroism",
        "Identity",
        "Illusory Script",
        "Longstrider",
        "Silent Image",
        "Silvery Barbs",
        "Sleep",
        "Speak With Animals",
        "Tasha's Hideous Laughter",
        "Thunderwave",
        "Unseen Servant",
      ],
      [
        "Animal Friendship",
        "Bane",
        "Charm Person",
        "Color Spray",
        "Command",
        "Comprehend Languages",
        "Cure Wounds",
        "Detect Magic",
        "Disguise Self",
        "Dissonant Whispers",
        "Distort Value",
        "Eart Tremor",
        "Faerie Fire",
        "Feather Fall",
        "Guiding Hand",
        "Healing Word",
        "Heroism",
        "Identity",
        "Illusory Script",
        "Longstrider",
        "Silent Image",
        "Silvery Barbs",
        "Sleep",
        "Speak With Animals",
        "Tasha's Hideous Laughter",
        "Thunderwave",
        "Unseen Servant",
      ],
    ],
  },
  Entertainer: {
    knownItemProficiencies: ["Disguise Kit"],
    unknownItemProficiencies: [
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan flute",
        "Shawn",
        "Viol",
      ],
    ],
    knownSkillProficiencies: ["Acrobatics", "Performance"],
    unknownSkillProficiencies: [[]],
    knownEquipment: ["The Favor of an Admirer", "Costume"],
    unknownEquipment: [
      [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan flute",
        "Shawn",
        "Viol",
      ],
    ],
  },
  "Hill Dwarf": {
    bonuses: {
      Constitution: 2,
      Wisdom: 1,
    },
    knownItemProficiencies: [
      "Battleaxe",
      "Handaxe",
      "Light Hammer",
      "Warhammer",
    ],
    unknownItemProficiencies: [
      ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"],
    ],
    knownLanguages: ["Common", "Dwarvish"],
  },
};
