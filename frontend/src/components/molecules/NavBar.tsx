import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Stack } from "@chakra-ui/react";

const NavBar = () => {
  const history = useHistory();

  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Button
          colorScheme="pink"
          variant="solid"
          onClick={() => history.push("/search")}
        >
          Search
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() => history.push("/settings")}
        >
          Settings
        </Button>
      </Stack>
    </div>
  );
};

export default NavBar;
