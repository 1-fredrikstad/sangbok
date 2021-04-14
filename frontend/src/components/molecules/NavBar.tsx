import React, { FC } from 'react';

import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { FiSettings, FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/dist/client/router';

const NavBar: FC = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-around"
      bottom="0"
      bg={colorMode === 'light' ? 'besh.50' : 'gray.800'}
      position="fixed"
      height="70px"
      width="100%"
      zIndex="1337"
      borderTop="1px solid grey"
      overflow="hidden"
    >
      <IconButton
        variant="outline"
        border="none"
        size="lg"
        onClick={() => router.push('/')}
        icon={<FiSearch />}
        aria-label="Go to search view"
      />

      <IconButton
        variant="outline"
        border="none"
        size="lg"
        onClick={() => router.push('/settings')}
        icon={<FiSettings />}
        aria-label="Go to settings view"
      />
    </Flex>
  );
};

export default NavBar;
