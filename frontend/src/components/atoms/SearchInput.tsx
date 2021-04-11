import React, { FC } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEventHandler } from "react";

interface Props {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<Props> = ({ value, handleChange }) => {
  return (
    <InputGroup width="20rem">
      <InputLeftElement
        color="green.700"
        pointerEvents="none"
        children={<SearchIcon />}
      />
      <Input
        placeholder="Søk etter sang"
        bg="white"
        onChange={handleChange}
        value={value}
      />
    </InputGroup>
  );
};

export default SearchInput;
