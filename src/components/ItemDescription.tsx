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

  let description = descriptions[props.item as keyof IDescriptions];

  return (
    <div className="item-description">
      <div className="item-description-title">{props.item}</div>
      <div className="item-description-text">{description}</div>
    </div>
  );
};
