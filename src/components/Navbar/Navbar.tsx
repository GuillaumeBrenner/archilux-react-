import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";
import LangSelector from "../LangSelector/LangSelector";
import { useTranslation } from "react-i18next";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-links nav-links-active" : "nav-links";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setClick((prev) => !prev);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => setButton(window.innerWidth > 960);
    const changeBackground = () => setNavbar(window.scrollY >= 200);

    showButton();
    changeBackground();

    window.addEventListener("resize", showButton);
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("resize", showButton);
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Archi<span>LUX</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "close-menu fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div className="menu-language">
            <LangSelector />
          </div>
          <li className="nav-item">
            <NavLink
              end
              to="/"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              {t("services")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              {t("project")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              {t("about")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav-links-mobile"
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
  );
}

export default Navbar;
