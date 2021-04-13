import React, { FC } from "react";

import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FiSettings, FiSearch } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

const NavBar: FC = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      borderTop="1px solid grey"
      height="3.5rem"
      zIndex="1"
      bg={colorMode === "light" ? "besh.50" : "gray.800"}
      overflow="hidden"
    >
      <Flex flex="1" alignItems="center" justifyContent="space-around">
        <IconButton
          variant="outline"
          border="none"
          size="lg"
          onClick={() => router.push("/")}
          icon={<FiSearch />}
          aria-label="Go to search view"
        />
        <IconButton
          variant="outline"
          border="none"
          size="lg"
          onClick={() => router.push("/settings")}
          icon={<FiSettings />}
          aria-label="Go to settings view"
        />
      </Flex>
    </Box>
  );
};

export default NavBar;
