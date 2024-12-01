import React from "react";

const LanguageSelector = () => {
  return (
    <div>
      <div className="language-select">
        <img
          className="language-icon"
          src="/icons/language.svg"
          alt="Language Icon"
        />
        <select id="languages">
          <option selected>EN</option>
          <option value="GER">GER</option>
          <option value="TR">TR</option>
          <option value="MK">MK</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
