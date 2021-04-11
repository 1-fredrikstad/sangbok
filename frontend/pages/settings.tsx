import {
  Heading,
  Box,
  Text,
  Button,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";
import ThemeToggler from "@components/atoms/ThemeToggler";
import Header from "@components/molecules/Header";
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
      <Header color="#D6F2E6">
        <Heading
          fontWeight="300"
          as="h1"
          size="xl"
          margin="1.5rem 2.5rem 0.5rem"
        >
          {t("Settings")}
        </Heading>
      </Header>
      <Box p="1.5rem 2.5rem 0rem">
        <ThemeToggler />
        <Divider size="L" mt="1rem" mb="1rem" />
        <Text>{t("Bytt språk:")}</Text>
        {i18n.language === "en" ? (
          <Button onClick={() => changeLanguage("en")}>Norwegian</Button>
        ) : (
          <Button onClick={() => changeLanguage("no")}>Engelsk</Button>
        )}
      </Box>
      <Center height="100%">
        <Image src="/images/camping.svg" width="auto" height="20rem" />
      </Center>
    </Layout>
  );
};

export default SettingsView;
