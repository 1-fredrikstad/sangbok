import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { SongDetailType } from 'src/types';

interface Props {
  song: SongDetailType;
}

const NavigationArrows: React.FC<Props> = ({ song }) => {
  const { push } = useRouter();
  const { colorMode } = useColorMode();
  const { prev, next } = song.info;
  const buttonStyle = {
    background: 'transparent',
    _active: { boxShadow: 'none' },
    _focus: { boxShadow: 'none' },
    disabled: prev != null ? false : true,
    color: colorMode === 'light' ? 'gray.600' : 'teal.200',
    _hover: { cursor: 'pointer' },
  };

  return (
    <Flex position="sticky" top="50%" width="100%" justifyContent="space-between" zIndex="1">
      <ArrowBackIcon
        sx={buttonStyle}
        paddingLeft="4px"
        aria-label="Previous song"
        onClick={() => {
          if (prev != null) push(`/song/${prev}`);
        }}
      />
      <ArrowForwardIcon
        sx={buttonStyle}
        paddingRight="4px"
        aria-label="Next song"
        onClick={() => {
          if (next != null) push(`/song/${next}`);
        }}
      />
    </Flex>
  );
};

export default NavigationArrows;
