export const Home = () => {
  const user_is_logged_in = false;

  if (!user_is_logged_in) {
    return (
      <div className="home-page">
        <div className="welcome-message">
          <p>Welcome to D&D Character Creator!</p>
          <p className="welcome-message-2">
            Log in to create and access characters.
          </p>
        </div>
      </div>
    );
  } else {
    return <div>you are logged in</div>;
  }
};
