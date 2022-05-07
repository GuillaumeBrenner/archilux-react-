import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LangSelector from "../LangSelector/LangSelector";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const { t } = useTranslation();

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Archi<span>LUX</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "close-menu" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("project")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                {t("about")}
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                {t("contactUs")}
              </Link>
            </li>
          </ul>
          <Link to="/contact" className="btn-mobile">
            {button && (
              <Button buttonStyle="btn--outline">{t("contactUs")}</Button>
            )}
          </Link>
          {/* <div className="language">
            <select name="language">
              <option>FR</option>
              <option>EN</option>
            </select>
          </div> */}
        </div>
        <LangSelector />
      </nav>
    </>
  );
}

export default Navbar;
