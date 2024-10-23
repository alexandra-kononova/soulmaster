import "./Footer.scss";
import instagramIcon from "../../assets/icons/Instagram-icon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer__copyright">©2024 SoulMaster</p>
      </div>
      <Link
        to="https://instagram.com"
        className="instagram__link"
        target="_blank"
      >
        <img
          className="instagram__icon"
          src={instagramIcon}
          alt="Instagram icon"
        />
      </Link>
    </footer>
  );
}
