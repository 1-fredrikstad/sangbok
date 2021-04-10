import React, { FC } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEventHandler } from "react";

interface Props {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<Props> = ({ value, handleChange }) => (
  <InputGroup width="20rem">
    <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
    <Input bg="white" onChange={handleChange} value={value} />
  </InputGroup>
);

export default SearchInput;
