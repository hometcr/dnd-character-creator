import logo from "../assets/google-logo.jpg"
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, provider);
    navigate("/");
  }

  return (
    <div className="login">
      <p>
        Please log in to access the site:
      </p>
      <div onClick={signInWithGoogle} className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon" 
            src={logo}
            alt="google logo"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with Google</b>
        </p>
      </div>
    </div>
  );
};
