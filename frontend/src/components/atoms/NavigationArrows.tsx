import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import { SongDetailType } from 'src/types';

interface Props {
  song: SongDetailType;
}

const NavigationArrows: FC<Props> = ({ song }) => {
  const { push } = useRouter();
  const { colorMode } = useColorMode();
  const { prev, next } = song.info;

  return (
    <Flex position="absolute" bottom="0" width="100%" justifyContent="space-between" zIndex="1">
      <IconButton
        aria-label="Previous song"
        icon={<ArrowBackIcon />}
        color={colorMode === 'light' ? 'gray.600' : 'teal.200'}
        onClick={() => {
          if (prev != null) push(`/song/${prev}`);
        }}
        disabled={prev != null ? false : true}
      />
      <IconButton
        aria-label="Next song"
        icon={<ArrowForwardIcon />}
        color={colorMode === 'light' ? 'gray.600' : 'teal.200'}
        onClick={() => {
          if (next != null) push(`/song/${next}`);
        }}
        disabled={next != null ? false : true}
      />
    </Flex>
  );
};

export default NavigationArrows;
