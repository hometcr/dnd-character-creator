import { isStringLiteral, StringLiteral, StringMappingType } from "typescript";
import { string } from "yup";

export interface IDescriptions {
  // CLASSES //
  Fighter: string;
  Wizard: string;
  Bard: string;
  Paladin: string;
  // RACES //
  Human: string;
  Elf: string;
  Dwarf: string;
  Halfling: string;
  // BACKGROUNDS //
  Entertainer: string;
  Acolyte: string;
  "Folk Hero": string;
  Noble: string;
  // FEATURES //
  "Rustic Hospitality": string;
  Dueling: string;
  "Second Wind": string;
  "Mage Armor": string;
  // SPELLS //
  Sleep: string;
  "Feather Fall": string;
  Mending: string;
  Light: string;
  "Fire Bolt": string;
  // ARMOR //
  "Padded Armor": string;
  "Leather Armor": string;
  "Studded Leather Armor": string;
  "Hide Armor": string;
  "Chain Shirt": string;
  "Scale Mail": string;
  Breastplate: string;
  "Half Plate": string;
  "Ring Mail": string;
  "Chain Mail": string;
  "Splint Armor": string;
  "Plate Armor": string;
  Shield: string;
  // WEAPONS //
  // simple melee //
  Club: string;
  Dagger: string;
  Greatclub: string;
  Handaxe: string;
  Javelin: string;
  "Light Hammer": string;
  Mace: string;
  Quarterstaff: string;
  Sickle: string;
  Spear: string;
  "Light Crossbow": string;
  Dart: string;
  Shortbow: string;
  Sling: string;
  // martial melee //
  Battleaxe: string;
  Flail: string;
  Glaive: string;
  Greataxe: string;
  Greatsword: string;
  Halberd: string;
  Lance: string;
  Longsword: string;
  Maul: string;
  Morningstar: string;
  Pike: string;
  Rapier: string;
  Scimitar: string;
  Shortsword: string;
  Trident: string;
  "War Pick": string;
  Warhammer: string;
  Whip: string;
  // martial ranged //
  Blowgun: string;
  "Hand Crossbow": string;
  "Heavy Crossbow": string;
  "Longbow": string;
  Net: string;
  // EQUIPMENT //
  "Explorer's Pack": string;
  "Tinker's Tools": string;
  Shovel: string;
  "Bag of Holding": string;
  // instruments
  Bagpipes: string;
  Drum: string;
  Dulcimer: string;
  Flute: string;
  Lute: string;
  Lyre: string;
  Horn: string;
  "Pan Flute": string;
  Shawm: string;
  Viol: string;
  // SKILLS //
  Athletics: string;
  Acrobatics: string;
  "Sleight of Hand": string;
  Stealth: string;
  Arcana: string;
  History: string;
  Investigation: string;
  Nature: string;
  Religion: string;
  "Animal Handling": string;
  Insight: string;
  Medicine: string;
  Perception: string;
  Survival: string;
  Deception: string;
  Intimidation: string;
  Performance: string;
  Persuasion: string;
  // LANGUAGES //
  Common: string;
  Dwarvish: string;
  Elvish: string;
}

export const descriptions: IDescriptions = {
  // CLASSES //
  Fighter:
    "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
  Wizard:
    "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.",
  Bard: "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
  Paladin:
    "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
  // RACES //
  Human:
    "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
  Elf: "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.",
  Dwarf:
    "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
  Halfling:
    "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.",
  // BACKGROUNDS //
  Entertainer:
    "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
  "Folk Hero":
    "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
  Acolyte:
    "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.",
  Noble:
    "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.",
  "Rustic Hospitality":
    "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.",
  // FEATURES //
  Dueling:
    "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
  "Second Wind":
    "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
  // SPELLS //
  "Mage Armor":
    "Casting Time: 1 action; Range: Touch; Components: V, S, M; Duration: 8 hours; You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
  Sleep:
    "Casting Time: 1 action; Range: 90 feet; Components: V, S, M; Duration: 1 minute; This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this spell.",
  "Feather Fall":
    "Casting Time: 1 reaction, which you take when you or a creature within 60 feet of you falls; Range: 60 feet; Components: V, M; Duration: 1 minute; Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
  Mending:
    "Casting Time: 1 minute; Range: Touch; Components: V, S, M; Duration: Instantaneous; This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object.",
  Light:
    "Casting Time: 1 action; Range: Touch; Components: V, M; Duration: 1 hour; You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
  "Fire Bolt":
    "Casting Time: 1 action; Range: 120 feet; Components: V, S; Duration: Instantaneous; You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.",
  // ARMOR //
  // light //
  "Padded Armor":
    "AC: 11 + Dex; Stealth: Disadvantage; Category: Light Armor; Description: Padded armor consists of quilted layers of cloth and batting",
  "Leather Armor":
    "AC: 11 + Dex; Category: Light Armor; Description: The Breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
  "Studded Leather Armor":
    "AC: 12 + Dex; Category: Light Armor; Description: Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
  // medium //
    "Hide Armor":
    "AC: 12 + Dex (max 14); Category: Medium Armor; Description: This crude armor consists of thick furs and pelts. It is commonly worn by Barbarian tribes, evil Humanoids, and other folk who lack access to the tools and materials needed to create better armor.",
  "Chain Shirt":
    "AC: 13 + Dex (max 15); Category: Medium Armor; Description: Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest Protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
  "Scale Mail":
    "AC: 14 + Dex (max 16); Stealth: Disadvantage; Category: Medium Armor; Description: This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
  Breastplate:
    "AC: 14 + Dex (max 16); Category: Medium Armor; Description: This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good Protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
  "Half Plate":
    "AC: 15 + Dex (max 17); Stealth: Disadvantage; Category: Medium Armor; Description: Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg Protection beyond simple greaves that are attached with leather straps.",
  // heavy //
    "Ring Mail":
    "AC: 14; Stealth: Disadvantage; Category: Heavy Armor; Description: This armor is Leather Armor with heavy rings sewn into it. The rings help reinforce the armor against blows from Swords and axes. Ring mail is inferior to Chain Mail, and it's usually worn only by those who can't afford better armor.",
  "Chain Mail":
    "AC: 16; Stealth: Disadvantage; Category: Heavy Armor; Description: Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
  "Splint Armor":
    "AC: 17; Stealth: Disadvantage; Category: Heavy Armor; Description: This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible Chain Mail protects the joints.",
  "Plate Armor":
    "AC: 18; Stealth: Disadvantage; Category: Heavy Armor; Description: Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
  Shield:
    "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.",
  // WEAPONS //
  // simple melee //
  Club: "Damage: 1d4 Bludgeoning; Properties: Light; Category: Simple Melee Weapons",
  Dagger:
  "Damage: 1d4 Piercing; Properties: Finesse, Light, Thrown (range 20/60); Category: Simple Melee Weapons",
  Greatclub: "Damage: 1d8 Bludgeoning; Properties: Two-Handed; Category: Simple Melee Weapons",
  Handaxe: "Damage: 1d6 Slashing; Properties: Light, Thrown (range 20/60); Category: Simple Melee Weapons",
  Javelin: "Damage: 1d6 Piercing; Properties: Thrown (range 30/120); Category: Simple Melee Weapons",
  "Light Hammer" :  "Damage: 1d4 Bludgeoning; Properties: Light, Thrown (range 20/60); Category: Simple Melee Weapons",
  Mace: "Damage: 1d6 Bludgeoning; Category: Simple Melee Weapons",
  Quarterstaff: "Damage: 1d6 Bludgeoning; Properties: Versatile (1d8); Category: Simple Melee Weapons",
  Sickle: "Damage: 1d4 Slashing; Properties: Light; Category: Simple Melee Weapons",
  Spear: "Damage: 1d6 Pircing; Properties: Thrown (range 20/60), Versatile (1d8); Category: Simple Melee Weapons",
  // simple ranged //
  "Light Crossbow": "Damage: 1d8 Piercing; Properties: Ammunition (range 80/320), Loading, Two-Handed; Category: Simple Ranged Weapons",
  Dart: "Damage: 1d4 Piercing; Properties: Finesse, Thrown (range 20/60); Category: Simple Ranged Weapons",
  Shortbow: "Damage: 1d6 Piercing; Properties: Ammunition (range 80/320), Two-Handed; Category: Simple Ranged Weapons",
  Sling: "Damage: 1d4 Bludgeoning; Properties: Ammunition (range 80/320); Category: Simple Ranged Weapons",
  // martial melee //
  Battleaxe: "Damage: 1d8 Slashing; Properties: Versatile (1d10); Category: Martial Melee Weapons",
  Flail: "Damage: 1d8 Bludgeoning ; Category: Martial Melee Weapons",
  Glaive: "Damage: 1d10 Slashing; Properties: Heavy, Reach, Two-Handed; Category: Martial Melee Weapons",
  Greataxe: "Damage: 1d12 Slashing; Properties: Heavy, Two-Handed; Category: Martial Melee Weapons",
  Greatsword: "Damage: 2d6 Slashing; Properties: Heavy, Two-Handed; Category: Martial Melee Weapons",
  Halberd: "Damage: 1d10 Slashing; Properties: Heavy, Reach, Two-Handed; Category: Martial Melee Weapons",
  Lance : "Damage: 1d12 Piercing; Properties: Reach, Special (You have disadvantage when you use a lance to Attack a target within 5 feet of you. Also, a lance required two hands to wield when you aren't mounted.); Category: Martial Melee Weapons",
  Longsword: "Damage: 1d8 Slashing; Properties: Versatile (1d10)",
  Maul: "Damage: 2d6 Bludgeoning; Properties: Heavy, Two-Handed; Category: Martial Melee Weapons",
  Morningstar: "Damage: 1d8 Piercing; Category: Martial Melee Weapons",
    Pike: "Damage: 1d10 Piercing; Properties: Heavy, Reach, Two-Handed; Category: Martial Melee Weapons",
    Rapier: "Damage: 1d8 Piercing; Properties: Finesse; Category: Martial Melee Weapons",
  Scimitar: "Damage: 1d6 Slashing; Properties: Finesse, Light; Category: Martial Melee Weapons",
  Shortsword: "Damage: 1d6 Piercing; Properties: Finesse, Light; Category: Martial Melee Weapons",
  Trident: "Damage: 1d6 Percing; Properties: Thrown (range 20/60), Versatile (1d8); Category: Martial Melee Weapons",
  "War Pick": "Damage: 1d8 Piercing; Category: Martial Melee Weapons",
  Warhammer: "Damage: 1d8 Bludgeoning; Properties: Versatile (1d10); Category: Martial Melee Weapons",
  Whip: "Damage: 1d4 Slashing; Properties: Finesse, Reach; Category: Martial Melee Weapons",
  // martial ranged //
  Blowgun: "Damage: 1 Piercing; Properties: Ammunition (range 25/100), Loading; Category: Martial Ranged",
  "Hand Crossbow": "Damage: 1d6 Piercing; Properties: Ammunition (range 30/120), Light, Loading; Category: Martial Ranged",
  "Heavy Crossbow": "Damage: 1d10 Piercing; Properties: Ammunition (range 100/400), Heavy, Loading, Two-Handed; Category: Martial Ranged",
  "Longbow": "Damage: 1d8 Piercing; Properties: Ammunition (range 150/600), Heavy, Two-Handed; Category: Martial Ranged",
  Net: "Properties: Special (A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.), Thrown (5/15); Category: Martial Ranged",
  // EQUIPMENT //
  "Explorer's Pack":
    "Backpack, bedroll, mess kit, tinderbox, 10 torchs, 10 rations, waterskin, hempen rope",
  "Tinker's Tools":
    "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue. You can determine the age and origin of objects, even if you have only a few pieces remaining from the original. When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago. You can restore 10 hit points to a damaged object for each hour of work. For any object, you need access to the raw materials required to repair it. For metal objects, you need access to an open flame hot enough to make the metal pliable. Activities: temporarily repair a disabled device (DC 10), repair an item in half the time (DC 15), improvise a temporary item using scraps (DC 20)",
  Shovel: "A standard shovel used for digging.",
  "Bag of Holding":
    "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action. If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its Contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate. Placing a bag of holding inside an extradimensional space created by a Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random Location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
  // instruments
  Bagpipes: "Bagpipes are a reeded woodwind instrument that consists of multiple pipes connected to a bladder that is filled with air. The bladder can be made of leather and produces a Celtic sound. Expensive bagpipes might boast silver or gold inlays along the pipes and chanter. The chanter is the pipe with holes that one covers up to produce different notes. Perfect for those looking to march into battle.",
  Drum: "A drum is perhaps the simplest of all percussion instruments. Within the realms of DnD, a drum can be crafted from any round, hollow wood frame over which a piece of leather is stretched. Drums are very customizable. The sound and pitch of the instrument are affected by both the size of the frame and the tightness of the leather. A musician may use multiple drums at once to create a richer sound.",
  Dulcimer: "Dulcimers are known for their sweet sounds, and are likely derived in name from Latin dulce melos (or “sweet song”). Dulcimers come in many shapes and sizes, but generally consist of a hollow wooden body with strings, similar to a violin or guitar. The strings on mountain dulcimers are typically plucked, while those on hammered dulcimers are typically struck with small hammers to produce notes. A charming instrument, the dulcimer has a long and proud history.",
  Flute: "At its core, the flute is a very simple instrument. It typically consists of a wooden tube with holes that are covered to create sounds, although sometimes metals tubes can be used. Medieval flutes typically had a different appearance to modern-day flutes. They looked more similar to a sideways recorder vs. a modern flute which has multiple valves running along its body. Perfect for beginner crafters looking for a simple instrument. Flutes can be made out of any suitable material, from reeds to sturdy vegetables.",
  Lute: "Another favorite instrument of Bards, the lute is a string instrument with a deep hollow wooden body. Typically lutes have an opening on the front to allow sound to escape. However, some lutes enclosed which results in a more muffled – some might say eerie – sound. Lutes are plucked by the musician.",
  Lyre: "One of the oldest instruments known to man, the lyre is a popular choice for creating music in the realms of DnD. Known for their angelic sounds, lyres have U-shaped wooden bodies with a connecting bar that runs along the top. The top piece holds several strings which are plucked by the musician. A standard lyre contains 7 strings, but can have any number of strings. Lyres also range from simple to wonderfully ornate.",
  Horn: "Horns are generic in nature and include a wide range of instruments. All consist of a metal tube (typically brass) with a bell-like opening at one end, and a mouthpiece on the other. The length of pipe controls the pitch – longer instruments produce lower pitch, while shorter produce higher pitch. Horns may also have valve-like openings (such as in the French horn) which change the pitch when pressed.",
  "Pan Flute": "The pan flute is a favorite instrument in DnD and typically consists of multiple wooden tubes of different lengths that are joined together. The instrument resembles a triangle with the shortest tube on one side and the longest tube at the other side. The musician blows across the tubes, moving to different tubes to produce different notes.",
  Shawm: "The shawm is another woodwind instrument for beginners. It is simple in design, resembling the modern-day recorder. The shawm consists of a long wooden item that is flared at the end, similar to a horn. Instead of a mouthpiece, the shawm has a reed which the musician vibrates to create pitches. Smaller shawms are higher pitched, while larger shawms are lower pitched… and both are adored by Gnomes.",
  Viol: "The viol is a precursor for many stringed instruments, such as the cello or violin. The instrument consists of six strings which line a hollow wooden body. The strings are either plucked or pressed against the instrument at different lengths along the neck. They also have a string or bow drawn against them, and this creates a unique vibrating sound. Popular with many realm adventurers.",
    // SKILLS //
  Athletics:
    "Your Athletics check covers difficult situations you encounter while climbing, jumping, or swimming. Examples include the following activities: You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, or cling to a surface while something is trying to knock you off. You try to jump an unusually long distance or pull off a stunt midjump. You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push or pull you underwater or otherwise interfere with your swimming.",
  Acrobatics:
    "Your Acrobatics check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for an Acrobatics check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.",
  "Sleight of Hand":
    "Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Sleight of Hand check. The GM might also call for a Sleight of Hand check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket.",
  Stealth:
    "Make a Stealth check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.",
  Arcana:
    "Your Arcana check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.",
  History:
    "Your History check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.",
  Investigation:
    "When you look around for clues and make deductions based on those clues, you make an Investigation check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Investigation check.",
  Nature:
    "Your Nature check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.",
  Religion:
    "Your Religion check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.",
  "Animal Handling":
    "When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for an Animal Handling check. You also make an Animal Handling check to control your mount when you attempt a risky maneuver.",
  Insight:
    "Your Insight check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.",
  Medicine:
    "A Medicine check lets you try to stabilize a dying companion or diagnose an illness.",
  Perception:
    "Your Perception check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.",
  Survival:
    "The GM might ask you to make a Survival check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.",
  Deception:
    "Your Deception check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie.",
  Intimidation:
    "When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make an Intimidation check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.",
  Performance:
    "Your Performance check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.",
  Persuasion:
    "When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Persuasion check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.",
  // LANGUAGES //
  Common: "The language typically spoken by humans. It uses a Common script.",
  Elvish: "The language typically spoken by elves. It uses an Elvish script.",
  Dwarvish: "The language typically spoken by dwarves. It uses a Dwarvish script.",
  };
