import React from "react";

import { Flex, IconButton, Spacer, Box } from "@chakra-ui/react";
import { FiSettings, FiSearch } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

const NavBar = () => {
    const router = useRouter();

    return (
        <Flex>
            <Spacer />
            <Box>
                <IconButton
                    variant="outline"
                    border="none"
                    size="lg"
                    onClick={() => router.push("/search")}
                    icon={<FiSearch />}
                    aria-label="Go to search view"
                />
            </Box>
            <Spacer />
            <IconButton
                variant="outline"
                border="none"
                size="lg"
                onClick={() => router.push("/settings")}
                icon={<FiSettings />}
                aria-label="Go to settings view"
            />
            <Spacer />
        </Flex>
    );
};

export default NavBar;
