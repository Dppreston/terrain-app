// styles

import "../styles/footer.css";
import "../styles/homepage.css";

// components

import EmailBanner from "./EmailBanner";
import FooterNav from "./FooterNav";

//imgs

import logo from "../branding-imgs/fishingcologo.png";

function Footer() {
  return (
    <>
      <FooterNav />
      <div className="footer-socials-container">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
      <div className="footer-copyright">
        <img src={logo} alt="terrain-logo" className="footer-logo" />
        <h2 className="footer-copyright-statement">
          Copyright 2023 Terrain Fishing Co. All rights reserved
        </h2>
      </div>
    </>
  );
}
export default Footer;
