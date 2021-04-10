import React, { FC } from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { FiSettings, FiSearch } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <Flex
      bg="gray.300"
      flex="1"
      // alignSelf="flex-end"
      alignItems="center"
      justifyContent="space-around"
      // maxHeight="16vh"
      height="3.5rem"
      width="100%"
      // position="fixed"
      // left="0"
      // right="0"
      // bottom="0"
      zIndex="1"
      // marginTop="2"
    >
      <IconButton
        variant="outline"
        border="none"
        size="lg"
        onClick={() => router.push("/search")}
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
