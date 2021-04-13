import React, { FC } from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { FiSettings, FiSearch } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <Flex
      flex="1"
      alignItems="center"
      justifyContent="space-around"
      height="3.5rem"
      width="100%"
      zIndex="1"
      borderTop="1px solid grey"
      overflow="hidden"
    >
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
  );
};

export default NavBar;
