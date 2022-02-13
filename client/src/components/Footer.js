import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mb-3">
      <div>Developed with love</div>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
