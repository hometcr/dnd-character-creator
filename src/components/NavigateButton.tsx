import { useNavigate } from "react-router-dom";

interface iProps {
  destination: string;
  text: string;
  className: string;
}

export const NavigateButton = (props: iProps) => {
  const navigate = useNavigate();
  const goToNewPage = (newPage: string) => {
    navigate(newPage);
  };

  return (
    <button
      onClick={() => {
        goToNewPage(props.destination);
      }}
      className={props.className}
    >
      {props.text}
    </button>
  );
};
