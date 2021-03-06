import React from "react";
import { useTranslation } from "next-i18next";
import ThemeToggler from "../atoms/ThemeToggler";
import NavBar from "../molecules/NavBar";

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
            <NavBar />
        </div>
    );
};

export default SettingsView;
