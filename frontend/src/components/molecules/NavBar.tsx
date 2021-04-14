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
      height="60px"
      bottom="0"
      width="100%"
      zIndex="1337"
      position="fixed"
      alignItems="center"
      justifyContent="space-around"
      bg={colorMode === 'light' ? 'besh.50' : 'gray.800'}
      borderTop="1px solid"
      borderTopColor={colorMode === 'light' ? 'gray.200' : 'besh.600'}
      overflow="hidden"
      padding="env(safe-area-inset-bottom) 0"
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
