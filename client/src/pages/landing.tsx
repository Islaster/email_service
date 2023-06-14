import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <h1>Email by you</h1>
      <Link to="/auth">
        <button className="btn btn-lg babyBlueButton">Login</button>
      </Link>
    </>
  );
}
