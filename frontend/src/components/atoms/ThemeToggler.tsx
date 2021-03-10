import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ThemeToggler = () => {
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
