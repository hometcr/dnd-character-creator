import { options } from "./options";

export interface ITypeStats {
  bonuses?: {
    Strength?: number;
    Dexterity?: number;
    Intelligence?: number;
    Charisma?: number;
    Constitution?: number;
    Wisdom?: number;
  };
  knownSkillProficiencies?: string[];
  unknownSkillProficiencies?: string[][];
  knownItemProficiencies?: string[];
  unknownItemProficiencies?: string[][];
  knownItems?: string[];
  unknownItems?: string[][];
  knownArmorAndWeapons?: string[];
  unknownArmorAndWeapons?: string[][];
  knownLanguages?: string[];
  unknownLanguages?: string[][];
  knownCantrips?: string[];
  unknownCantrips?: string[][];
  knownFirstLevelSpells?: string[];
  unknownFirstLevelSpells?: string[][];
  hitDice?: (string | number)[];
  baseHp?: number;
  hpBonus?: number;
  savingThrowProficiencies?: string[];
  features?: string[];
  speed?: number;
  money? : number[];
}

export interface IStats {
  // CLASSES
  Bard: ITypeStats;
  Wizard: ITypeStats;
  Fighter: ITypeStats; // stats for a Dueling Fighter
  Paladin: ITypeStats;
  // RACES
  Dwarf: ITypeStats; // stats for a Hill Dwarf
  Elf: ITypeStats; // stats for a High Elf
  Human: ITypeStats;
  Halfling: ITypeStats; // stats for a Lightfoot Halfling
  // BACKGROUNDS
  Entertainer: ITypeStats;
  Acolyte: ITypeStats;
  "Folk Hero": ITypeStats;
  Noble: ITypeStats;
}

export const stats: IStats = {
  // CLASSES
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
      options["instruments"],
      options["instruments"],
      options["instruments"],
    ],
    knownSkillProficiencies: ["Dexterity", "Charisma"],
    unknownSkillProficiencies: [
      options["skills"],
      options["skills"],
      options["skills"],
    ],
    unknownItems: [
      ["Diplomat's Pack", "Entertainer's Pack"],
      options["instruments"],
    ],
    knownArmorAndWeapons: ["Dagger", "Leather Armor"],
    unknownArmorAndWeapons: [
      ["Rapier", "Longsword", ...options["weapons"]["simpleMelee"]],
    ],
    unknownCantrips: [
      options["spells"]["Bard"]["cantrips"],
      options["spells"]["Bard"]["cantrips"],
    ],
    knownFirstLevelSpells: [],
    unknownFirstLevelSpells: [
      options["spells"]["Bard"]["firstLevel"],
      options["spells"]["Bard"]["firstLevel"],
      options["spells"]["Bard"]["firstLevel"],
      options["spells"]["Bard"]["firstLevel"],
    ],
    hitDice: [1, "d8"],
    baseHp: 8,
    savingThrowProficiencies: ["Dexterity", "Charisma"],
    features: ["Ritual Casting", "Bardic Inspiration"],
  },
  Wizard: {
    unknownSkillProficiencies: [
      ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
      ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
    ],
    knownItemProficiencies: [
      "Daggers",
      "Darts",
      "Slings",
      "Quarterstaffs",
      "Light Crossbows",
    ],
    knownItems: ["Spellbook"],
    unknownItems: [
      ["Component Pouch", "Arcane Focus"],
      ["Scholar's Pack", "Explorer's Pack"],
    ],
    unknownArmorAndWeapons: [["Quarterstaff", "Dagger"]],
    unknownCantrips: [
      options["spells"]["Wizard"]["cantrips"],
      options["spells"]["Wizard"]["cantrips"],
      options["spells"]["Wizard"]["cantrips"],
    ],
    unknownFirstLevelSpells: [
      options["spells"]["Wizard"]["firstLevel"],
      options["spells"]["Wizard"]["firstLevel"],
      options["spells"]["Wizard"]["firstLevel"],

      options["spells"]["Wizard"]["firstLevel"],
      options["spells"]["Wizard"]["firstLevel"],
      options["spells"]["Wizard"]["firstLevel"],
    ],
    hitDice: [1, "d6"],
    baseHp: 6,
    savingThrowProficiencies: ["Intelligence", "Wisdom"],
    features: ["Ritual Casting", "Arcane Recovery"],
  },
  Fighter: {
    unknownSkillProficiencies: [
      [
        "Acrobatics",
        "Animal Handling",
        "Athletics",
        "History",
        "Insight",
        "Intimidation",
        "Perception",
        "Survival",
      ],
      [
        "Acrobatics",
        "Animal Handling",
        "Athletics",
        "History",
        "Insight",
        "Intimidation",
        "Perception",
        "Survival",
      ],
    ],
    knownItemProficiencies: [
      "All Armor",
      "Shields",
      "Simple Weapons",
      "Martial Weapons",
    ],
    unknownItems: [["Dungeoneer's Pack", "Explorer's Pack"]],
    unknownArmorAndWeapons: [
      ["Chain Mail", "Leather Armor, Longbow, and 20 Arrows"],
      options["weapons"]["martial"],
      ["Shield", ...options["weapons"]["martial"]],
      ["Light Crossbow", "Handaxe"],
    ],
    hitDice: [1, "d10"],
    baseHp: 10,
    savingThrowProficiencies: ["Strength", "Constitution"],
    features: ["Dueling", "Second Wind"],
  },
  Paladin: {
    unknownSkillProficiencies: [
      [
        "Athletics",
        "Insight",
        "Intimidation",
        "Medicine",
        "Persuasion",
        "Religion",
      ],
      [
        "Athletics",
        "Insight",
        "Intimidation",
        "Medicine",
        "Persuasion",
        "Religion",
      ],
    ],
    knownItemProficiencies: [
      "All armor",
      "Shields",
      "Simple Weapons",
      "Martial Weapons",
    ],
    knownItems: ["Holy Symbol"],
    unknownItems: [["Priest's Pack", "Explorer's Pack"]],
    knownArmorAndWeapons: ["Chain Mail"],
    unknownArmorAndWeapons: [
      ["Shield", ...options["weapons"]["martial"]],
      options["weapons"]["martial"],
      options["weapons"]["simpleMelee"],
    ],
    hitDice: [1, "d10"],
    baseHp: 10,
    savingThrowProficiencies: ["Wisdom", "Charisma"],
    features: ["Divine Sense", "Lay on Hands"],
  },
  // RACES
  Dwarf: {
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
    features: [
      "Darkvision",
      "Dwarven Resilience",
      "Stonecunning",
      "Dwarven Toughness",
    ],
    hpBonus: 1,
    speed: 25,
  },
  Elf: {
    bonuses: {
      Dexterity: 2,
      Intelligence: 1,
    },
    knownSkillProficiencies: ["Perception"],
    knownItemProficiencies: ["Longsword", "Shortsword", "Shortbow", "Longbow"],
    knownLanguages: ["Common", "Elven"],
    unknownLanguages: [options["languages"]],
    unknownCantrips: [options["spells"]["Wizard"]["cantrips"]],
    features: ["Darkvision", "Fey Ancestry", "Trance"],
    speed: 30,
  },
  Human: {
    bonuses: {
      Strength: 1,
      Dexterity: 1,
      Intelligence: 1,
      Charisma: 1,
      Constitution: 1,
      Wisdom: 1,
    },
    knownLanguages: ["Common"],
    unknownLanguages: [options["languages"]],
    speed: 30,
    features: [],
  },
  Halfling: {
    bonuses: {
      Dexterity: 2,
      Charisma: 1,
    },
    knownLanguages: ["Common", "Halfling"],
    features: ["Lucky", "Brave", "Nimble", "Naturally Stealthy"],
    speed: 25,
  },
  // BACKGROUNDS
  Entertainer: {
    knownItemProficiencies: ["Disguise Kit"],
    unknownItemProficiencies: [options["instruments"]],
    knownSkillProficiencies: ["Acrobatics", "Performance"],
    knownItems: ["The Favor of an Admirer", "Costume"],
    unknownItems: [options["instruments"]],
    money: [0, 0, 15, 0],
    features: ["Entertainer Routines", "By Popular Demand"],
  },
  Acolyte: {
    knownSkillProficiencies: ["Insight", "Religion"],
    unknownLanguages: [options["languages"], options["languages"]],
    knownItems: [
      "Holy Symbol",
      "Prayer Book",
      "Incence",
      "Vestements",
      "Common Clothes",
    ],
    money: [0, 0, 15, 0],
    features: ["Shelter of the Faithful"],
  },
  "Folk Hero": {
    knownSkillProficiencies: ["Animal Handling", "Survival"],
    knownItemProficiencies: ["Land Vehicles"],
    unknownItemProficiencies: [options["artisansTools"]],
    knownItems: ["Shovel", "Iron Pot", "Common Clothes"],
    unknownItems: [options["artisansTools"]],
    money: [0, 0, 15, 0],
    features: ["Defining Event", "Rustic Hospitality"],
  },
  Noble: {
    knownSkillProficiencies: ["History", "Persuasion"],
    unknownItems: [["Dice Set", "Playing Card Set"]],
    unknownLanguages: [options["languages"]],
    knownItems: ["Fine Clothes", "Signet Ring", "Scroll of Pedigree"],
    money: [0, 0, 25, 0],
    features: ["Position of Privilege"],
  },
};
