import { Flex, useColorMode } from '@chakra-ui/react';
import NavBar from '@components/molecules/NavBar';
import React, { FC } from 'react';

// 60px is navbar height
const Layout: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="main"
      h="calc(100vh - 60px)"
      direction="column"
      bg={colorMode === 'light' ? 'besh.50' : 'gray.800'}
      marginBottom="60px"
    >
      <Flex direction="column" overflow="scroll">
        {children}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default Layout;
