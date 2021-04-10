import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl alignItems="center">
      <FormLabel htmlFor="dark-mode">Mørkemodus:</FormLabel>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        id="dark-mode"
        colorScheme="black"
      />
    </FormControl>
  );
};

export default ThemeToggler;
