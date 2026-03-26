import React from "react";
import "./Footer.css";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="footer-content">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100092379390965&mibextid=ZbWKwL"
          className="fb"
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/dondeon1999/" className="ig">
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCPpkQjNvewBr70RQFDIxPgA"
          className="yt"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="copy-right">
        Copyright &#169; 2024 3D Villadolid. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;