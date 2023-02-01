import logo from "../assets/google-logo.jpg"


export const Login = () => {
  return (
    <div className="login">
      <p>
        Please log in to access the site:
      </p>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon" 
            src={logo}
            alt="google logo"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
};
