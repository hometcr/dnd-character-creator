import { Link } from "react-router-dom";

export const NavBar = () => {

  const user_is_logged_in = false;

  let logLink = <></>
  if (user_is_logged_in) {
    logLink = (
      <Link to="/login" className="nav-bar-link">
          Log Out
        </Link>
    )
  } else {
    logLink = (
      <Link to="/login" className="nav-bar-link">
          Log In
        </Link>
    )
  }

  return (
    <div className="nav-bar">
      <header className="title">D&D Character Creator</header>
      <div className="nav-bar-links">
        <Link to="/" className="nav-bar-link">
          Home
        </Link>
        <Link to="/about" className="nav-bar-link">
          About
        </Link>
        {logLink}
        {/* <Link to="/login" className="nav-bar-link">
          Log In
        </Link> */}
      </div>
    </div>
  );
};
