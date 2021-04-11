import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "#FFD966" : "green.600"}
      w="100%"
      paddingBottom="5"
    >
      {children}
    </Box>
  );
};

export default Header;
