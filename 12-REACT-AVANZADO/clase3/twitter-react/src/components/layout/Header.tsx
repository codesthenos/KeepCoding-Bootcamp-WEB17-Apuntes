// import twitterSrc from "../../assets/twitter.svg";
import TwitterIcon from "../icons/Twitter";
import "./Header.css";
import AuthButton from "../../pages/auth/AuthButton";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          {/* <img src={twitterSrc} alt="Twitter React logo" /> */}
          <TwitterIcon width={32} height={32} />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/tweets/new"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          New Tweet
        </NavLink>
        <NavLink
          to="/tweets"
          className={({ isActive }) => (isActive ? "selected" : "")}
          // style={({ isActive }) => (isActive ? { color: "red" } : {})}
          end
        >
          Latest Tweet
        </NavLink>
        <AuthButton />
      </nav>
    </header>
  );
}
