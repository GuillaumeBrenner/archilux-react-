import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LangSelector() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");

  const changeLanguage = (event) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div onChange={changeLanguage}>
      <select name="language">
        <option
          type="select"
          value="en"
          name="language"
          defaultChecked={selectedLang === "en"}
        >
          EN
        </option>
        <option
          type="select"
          value="fr"
          name="language"
          defaultChecked={selectedLang === "fr"}
        >
          FR
        </option>
      </select>
    </div>
  );
}

export default LangSelector;
