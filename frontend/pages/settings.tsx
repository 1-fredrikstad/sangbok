import ThemeToggler from "@components/atoms/ThemeToggler";
import NavBar from "@components/molecules/NavBar";
import Layout from "@components/templates/Layout";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

const SettingsView: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Layout>
      <div>{t("settingsHeader")}</div>
      <ThemeToggler />
      <h3>Change lanuage</h3>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <button type="button" onClick={() => changeLanguage("no")}>
        no
      </button>
    </Layout>
  );
};

export default SettingsView;
