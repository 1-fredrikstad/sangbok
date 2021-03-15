import { Stack } from "@chakra-ui/react";
import NavBar from "@components/molecules/NavBar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
    return (
        <Stack as="main" minHeight="100vh">
            {children}
            <NavBar />
        </Stack>
    );
};

export default Layout;
