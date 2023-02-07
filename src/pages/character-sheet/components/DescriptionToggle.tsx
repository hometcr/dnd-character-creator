interface IProps {
  title: string;
  description: string;
}

export const DescriptionToggle = (props: IProps) => {
  let description = props.description;

  let toggleSelected = false;

  let descriptionText = "";
  let triangle = <div></div>;
  if (toggleSelected) {
    descriptionText = description;
    triangle = <div className="description-toggle-triangle">&#9662;</div>;
  } else {
    descriptionText = "";
    triangle = <div className="description-toggle-triangle">&#9663;</div>;
  }

  return (
    <div>
      <div className="description-toggle-title-and-triangle">
        <div className="description-toggle-triangle">{triangle}</div>
        <div className="description-toggle-title">{props.title}</div>
      </div>
      <div className="description-toggle-description">{descriptionText}</div>
    </div>
  );
};
