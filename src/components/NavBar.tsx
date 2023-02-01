import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <header className="title">D&D Character Creator</header>
      <div className = "nav-bar-links">
        <Link to="/" className="nav-bar-link"> Home </Link>
        <Link to="/about" className="nav-bar-link"> About </Link>
        <Link to="/login" className="nav-bar-link"> Login </Link>
      </div>
    </div>
  );
}