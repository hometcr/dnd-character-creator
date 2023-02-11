import { descriptions, IDescriptions } from "../assets/descriptions";

interface iProps {
  item: string;
}

export const ItemDescription = (props: iProps) => {
  if (props.item === "") {
    return (
      <div className="empty-description-message">
        {"(Learn about the options here)"}
      </div>
    );
  }
  let description;
  if (props.item === "Fighter") {
    description = descriptions.Fighter;
  } else if (props.item === "Paladin") {
    description = descriptions.Paladin;
  } else if (props.item === "Wizard") {
    description = descriptions.Wizard;
  } else if (props.item === "Bard") {
    description = descriptions.Bard;
  } else if (props.item === "Human") {
    description = descriptions.Human;
  } else if (props.item === "Elf") {
    description = descriptions.Elf;
  } else if (props.item === "Halfling") {
    description = descriptions.Halfling;
  } else if (props.item === "Dwarf") {
    description = descriptions.Dwarf;
  }

  return (
    <div className="item-description">
      <div className="item-description-title">{props.item}</div>
      <div className="item-description-text">{description}</div>
    </div>
  );
};
