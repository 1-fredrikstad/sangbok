import { Flex, useColorMode } from '@chakra-ui/react';
import NavBar from '../molecules/NavBar';
import React from 'react';

// 60px is navbar height
const Layout: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="main"
      h="calc(100vh - 60px)"
      direction="column"
      bg={colorMode === 'light' ? 'besh.50' : 'gray.800'}
      marginBottom="60px"
    >
      <Flex direction="column" overflow="scroll" flex="1">
        {children}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default Layout;
