import React, { FC } from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { SongDetailType } from "src/api/songs";
import { useRouter } from "next/dist/client/router";

interface Props {
  song: SongDetailType;
}

const NavigationArrows: FC<Props> = ({ song }) => {
  const { push } = useRouter();
  const { colorMode } = useColorMode();
  const prev = song.info.prev;
  const next = song.info.next;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      zIndex="1"
      style={{ position: "absolute", bottom: "4.5rem" }}
      height="3rem"
    >
      <Button
        leftIcon={<ArrowBackIcon />}
        color={colorMode === "light" ? "gray.50" : "teal.200"}
        variant="link"
        width="50px"
        height="50px"
        borderRadius="50%"
        backgroundColor={colorMode === "light" ? "#FFD966" : "green.700"}
        ml={"1.5rem"}
        onClick={() => {
          if (prev != null) push(`/song/${prev}`);
        }}
        disabled={song.info.prev != null ? false : true}
      ></Button>
      <Button
        rightIcon={<ArrowForwardIcon />}
        color={colorMode === "light" ? "gray.50" : "teal.200"}
        variant="link"
        mr={"1.5rem"}
        width="50px"
        height="50px"
        backgroundColor={colorMode === "light" ? "#FFD966" : "green.700"}
        borderRadius="50%"
        onClick={() => {
          if (next != null) push(`/song/${next}`);
        }}
        disabled={song.info.next != null ? false : true}
      ></Button>
    </Flex>
  );
};

export default NavigationArrows;
