import React from "react";
import { useTranslation } from "react-i18next";
import ThemeToggler from "../atoms/ThemeToggler";

const SettingsView = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div>{t("settingsHeader")}</div>
      <ThemeToggler />
      <h3>Change lanuage</h3>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <button type="button" onClick={() => changeLanguage("no")}>
        no
      </button>
    </div>
  );
};

export default SettingsView;
