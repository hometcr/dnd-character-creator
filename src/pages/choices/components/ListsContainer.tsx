import { ListOfChoices } from "./ListOfChoices";

export const ListsContainer = () => {
  let knownEquipment = ["Shovel", "Iron Pot", "Common Clothes"];
  let unknownEquipment = [
    ["Explorer's Pack", "Dungeoneer's Pack"],
    [
      "Calligrapher's Supplies",
      "Carpenter's Tools",
      "Cook's Utensils",
      "Mason's Tools",
      "Tinker's Tools",
    ],
  ];
  let knownProficiencies = ["Animal Handling", "Survival"];
  let unknownProficiencies = [
    ["Acrobatics", "Strength", "Dexterity"],
    ["Acrobatics", "Strength", "Dexterity"],
  ];
  let knownWeapons = ["Longbow"];
  let unknownWeapons = [
    ["Shield", "Axe"],
    ["Light Crossbow", "Javelin"],
  ];
  let knownLanguages = ["Common", "Dwarvish"];
  let unknownLanguages = [[]];

  return (
    <div className="lists-container">
      <ListOfChoices
        listName="Proficiencies"
        knownItems={knownProficiencies}
        unknownItems={unknownProficiencies}
      />
      <ListOfChoices
        listName="Equipment"
        knownItems={knownEquipment}
        unknownItems={unknownEquipment}
      />
      <ListOfChoices
        listName="Armor/Weapons"
        knownItems={knownWeapons}
        unknownItems={unknownWeapons}
      />
      <ListOfChoices
        listName="Languages"
        knownItems={knownLanguages}
        unknownItems={unknownLanguages}
      />
    </div>
  );
};
