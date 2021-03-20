import { Box, Center } from "@chakra-ui/react";
import React from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ color, children }) => (
  <Center bg={color} w="100%" minH="100px">
    {children}
  </Center>
);

export default Header;
