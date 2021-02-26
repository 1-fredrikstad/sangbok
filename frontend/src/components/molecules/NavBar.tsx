import React from "react";
import { useHistory } from "react-router-dom";

import { Flex, Container, IconButton, Spacer, Box } from "@chakra-ui/react";
import { MdSearch, MdSettings } from "react-icons/md";

const NavBar = () => {
  const history = useHistory();

  return (
    <Flex>
      <Spacer />
      <Box>
        <IconButton
          colorScheme="blue"
          variant="outline"
          border="none"
          onClick={() => history.push("/search")}
          icon={<MdSearch />}
          aria-label="Go to search view"
        />
      </Box>

      <Spacer w="10px" />

      <IconButton
        colorScheme="blue"
        variant="outline"
        border="none"
        onClick={() => history.push("/settings")}
        icon={<MdSettings />}
        aria-label="Go to settings view"
      ></IconButton>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
