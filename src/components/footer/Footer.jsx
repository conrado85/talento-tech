import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} My Website. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
