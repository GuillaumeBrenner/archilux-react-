import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LangSelector from "../LangSelector/LangSelector";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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

  function changeBackground() {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
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
              <div className="menu-language">
                <LangSelector />
              </div>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="nav-links-active"
                onClick={closeMobileMenu}
              >
                {t("home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                className="nav-links"
                activeClassName="nav-links-active"
                onClick={closeMobileMenu}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                className="nav-links"
                activeClassName="nav-links-active"
                onClick={closeMobileMenu}
              >
                {t("project")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                activeClassName="nav-links-active"
                onClick={closeMobileMenu}
              >
                {t("about")}
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/contact"
                className="nav-links-mobile"
                activeClassName="nav-links-active"
                onClick={closeMobileMenu}
              >
                {t("contactUs")}
              </NavLink>
            </li>
          </ul>
          <Link to="/contact" className="btn-mobile">
            {button && (
              <Button buttonStyle="btn--outline">{t("contactUs")}</Button>
            )}
          </Link>
          <div className="language">
            <LangSelector />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
