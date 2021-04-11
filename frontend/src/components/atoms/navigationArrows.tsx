import React, { FC } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { SongDetailType } from "src/api/songs";
import { useRouter } from "next/dist/client/router";

interface Props {
  song: SongDetailType;
}

const NavigationArrows: FC<Props> = ({ song }) => {
  const { push } = useRouter();
  const prev = song.info.prev;
  const next = song.info.next;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      zIndex="1"
      marginBottom="0"
    >
      <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="teal"
        variant="outline"
        width="100px"
        onClick={() => {
          if (prev != null) push(`/song/${prev}`);
        }}
        disabled={song.info.prev != null ? false : true}
      >
        Forrige
      </Button>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        width="100px"
        onClick={() => {
          if (next != null) push(`/song/${next}`);
        }}
        disabled={song.info.next != null ? false : true}
      >
        Neste
      </Button>
    </Flex>
  );
};

export default NavigationArrows;
