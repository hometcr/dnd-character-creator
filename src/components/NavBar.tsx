import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const NavBar = () => {

  const navigate = useNavigate()
  const [user] = useAuthState(auth);

  const logUserOut = async () => {
    await signOut(auth);
    navigate("/")
  }


  let logLink = <></>
  if (user) {
    logLink = (
      <div className="nav-bar-link" onClick={logUserOut}>
          Log Out
        </div>
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
      </div>
    </div>
  );
};
