import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__title">SoulMaster</h1>
      </Link>
    </header>
  );
}
