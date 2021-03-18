import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ color, children }) => (
  <Box bg={color} w="100%" minH="100px">
    {children}
  </Box>
);

export default Header;
