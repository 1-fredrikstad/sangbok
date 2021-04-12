import {
  Heading,
  Box,
  Image,
  Divider,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import ThemeToggler from "@components/atoms/ThemeToggler";
import Header from "@components/molecules/Header";
import Layout from "@components/templates/Layout";
import React, { FC } from "react";

const SettingsView: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Header>
        <Heading
          fontWeight="300"
          as="h1"
          size="xl"
          margin="1.5rem 2.5rem 0.5rem"
        >
          Instillinger
        </Heading>
      </Header>
      <Box p="1.5rem 2.5rem 0rem">
        <ThemeToggler />
        <Divider size="L" mt="1rem" mb="1rem" />
      </Box>
      <Center height="100%">
        <Image
          src={
            colorMode === "light"
              ? "/images/camping.svg"
              : "/images/camping_dark.svg"
          }
          width="auto"
          height="20rem"
        />
      </Center>
    </Layout>
  );
};

export default SettingsView;
