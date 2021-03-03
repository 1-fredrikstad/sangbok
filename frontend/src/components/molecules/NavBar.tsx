import React from 'react';
import { useHistory } from 'react-router-dom';

import { Flex, IconButton, Spacer, Box } from '@chakra-ui/react';
import { FiSettings, FiSearch } from 'react-icons/fi';

const NavBar = () => {
  const history = useHistory();

  return (
    <Flex>
      <Spacer />
      <Box>
        <IconButton
          variant="outline"
          border="none"
          size="lg"
          onClick={() => history.push('/search')}
          icon={<FiSearch />}
          aria-label="Go to search view"
        />
      </Box>
      <Spacer />
      <IconButton
        variant="outline"
        border="none"
        size="lg"
        onClick={() => history.push('/settings')}
        icon={<FiSettings />}
        aria-label="Go to settings view"
      />
      <Spacer />
    </Flex>
  );
};

export default NavBar;
