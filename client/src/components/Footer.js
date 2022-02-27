import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mb-3">
      <div>Developed with love</div>
      <box>
        <Link className="footer-link" to="/about">About</Link>
      </box>
      <box>
        <Link className="footer-link" to="https://voteschallenge.harvard.edu/">Harvard Votes Challenge</Link>
      </box>
      <box>
        <Link className="footer-link" to="https://iop.harvard.edu/">Harvard IOP</Link>
      </box>
    </footer>
  );
}

export default Footer;
