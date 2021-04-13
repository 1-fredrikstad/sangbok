import { Flex, useColorMode } from "@chakra-ui/react";
import NavBar from "@components/molecules/NavBar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="main"
      h="100vh"
      direction="column"
      bg={colorMode === "light" ? "besh.50" : "gray.800"}
    >
      <Flex direction="column" flex="12" overflow="scroll">
        {children}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default Layout;
