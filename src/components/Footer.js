import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 text-center mt-5">
      <p>
        © 2025 <Link to="/" className="text-info text-decoration-none">Annejunnie Hardware</Link>
      </p>
      <p>
        Phone: <a href="tel:+254792791696" className="text-light">0712-345-678</a> |
        Email: <a href="mailto:info@annejunnie.co.ke" className="text-light">info@annejunnie.co.ke</a>
      </p>
      <p>
        Location: Bomet, Kenya
      </p>
    </footer>
  );
}

export default Footer;
