import { useState } from "react";

interface IProps {
  title: string;
  description: string;
}

export const DescriptionToggle = (props: IProps) => {
  const [toggled, setToggled] = useState(false)

  let toggleSelected = false;

  let descriptionText = "";
  let triangle = <div></div>;
  if (toggled) {
    descriptionText = props.description;
    triangle = <div className="description-toggle-triangle">&#9662;</div>;
  } else {
    descriptionText = "";
    triangle = <div className="description-toggle-triangle">&#9663;</div>;
  }

  const changeToggle = () => {
    if (toggled) {
      setToggled(false)
    } else {
      setToggled(true)
    }
  }

  return (
    <div>
      <div className="description-toggle-title-and-triangle">
        <div className="description-toggle-triangle" onClick={changeToggle}>{triangle}</div>
        <div className="description-toggle-title">{props.title}</div>
      </div>
      <div className="description-toggle-description">{descriptionText}</div>
    </div>
  );
};
