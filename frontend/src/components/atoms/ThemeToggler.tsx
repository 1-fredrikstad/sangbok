import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="dark-mode" mb="0">
        Mørkemodus
      </FormLabel>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        id="dark-mode"
      />
    </FormControl>
  );
};

export default ThemeToggler;
