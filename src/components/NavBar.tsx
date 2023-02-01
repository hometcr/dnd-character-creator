import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/login"> Login </Link>
    </div>
  );
}