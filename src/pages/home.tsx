export const Home = () => {


  const user_is_logged_in = true;

  let display = (<></>)
  if (user_is_logged_in) {
    display = (
      <div>
      </div>
    )
  } else {
    display = (
      <div>
      </div>
    )
  }


  return <div>{display}</div>;
}