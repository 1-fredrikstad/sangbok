import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = () => (
  <InputGroup width="20rem">
    <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
    <Input bg="white" />
  </InputGroup>
);

export default SearchInput;
