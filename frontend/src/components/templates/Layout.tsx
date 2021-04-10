import { Flex } from "@chakra-ui/react";
import NavBar from "@components/molecules/NavBar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Flex as="main" h="100vh" direction="column">
      <Flex direction="column" flex="12" overflow="scroll">
        {children}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default Layout;
