import React, { FC, useEffect } from "react";
import { useTranslation } from "next-i18next";
import ThemeToggler from "@components/atoms/ThemeToggler";
import NavBar from "@components/molecules/NavBar";
import { useSlugContext } from "@services/context/SlugProvider";

const SettingsView: FC = () => {
  const { t, i18n } = useTranslation();
  const { val } = useSlugContext();

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
      <NavBar />
    </div>
  );
};

export default SettingsView;
