import { type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "./LangSelector.css";

function LangSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-container">
      <select
        name="language-select"
        aria-label="Select language"
        value={i18n.resolvedLanguage}
        onChange={changeLanguage}
      >
        <option value="fr" className="fr">
          FR
        </option>
        <option value="en" className="en">
          EN
        </option>
      </select>
    </div>
  );
}

export default LangSelector;
