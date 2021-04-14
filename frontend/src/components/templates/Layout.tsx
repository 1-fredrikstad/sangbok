import { Flex, useColorMode } from '@chakra-ui/react';
import NavBar from '@components/molecules/NavBar';
import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="main"
      h="100vh"
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
