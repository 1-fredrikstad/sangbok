import { Stack } from "@chakra-ui/react";
import NavBar from "@components/molecules/NavBar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Stack as="main" h="100vh">
      {children}
      <NavBar />
    </Stack>
  );
};

export default Layout;
