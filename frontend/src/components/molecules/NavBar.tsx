import { Box, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <>
      <Spacer />
      <Box>
        <IconButton
          variant="outline"
          border="none"
          size="lg"
          onClick={() => history.push("/search")}
          icon={<FiSearch />}
          aria-label="Go to search view"
        />
      </Box>
      <Spacer />
      <IconButton
        variant="outline"
        border="none"
        size="lg"
        onClick={() => history.push("/settings")}
        icon={<FiSettings />}
        aria-label="Go to settings view"
      ></IconButton>
      <Spacer />
    </>
  );
};

export default NavBar;
