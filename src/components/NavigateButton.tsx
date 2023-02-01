
interface iProps {
  destination: string;
  text: string;
  className: string;
}

export const NavigateButton = (props: iProps) => {
  return <button className={props.className} >{props.text}</button>;
}