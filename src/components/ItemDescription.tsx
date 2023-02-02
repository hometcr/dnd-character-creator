import { isArgumentsObject } from "util/types";

interface iProps {
  item: string;
}

interface IDescriptions {
  Fighter: string;
  Human: string;
}

const descriptions: IDescriptions = {
  Fighter:
    "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
  Human:
    "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
};

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
  }
  if (props.item === "Human") {
    description = descriptions.Human;
  }

  return (
    <div className="item-description">
      <div className="item-description-title">{props.item}</div>
      <div className="item-description-text">{description}</div>
    </div>
  );
};
