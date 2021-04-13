import React, { FC } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEventHandler } from "react";
import { FaGreaterThanEqual } from "react-icons/fa";

interface Props {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<Props> = ({ value, handleChange }) => {
  const { colorMode } = useColorMode();

  return (
    <InputGroup width="20rem">
      <InputLeftElement
        color="green.700"
        pointerEvents="none"
        children={<SearchIcon />}
      />
      <Input
        placeholder="Søk etter sang"
        textColor={colorMode === "light" ? "green.700" : "gray.800"}
        _placeholder={{ color: "green.900" }}
        bg={colorMode === "light" ? "white" : "green.200"}
        onChange={handleChange}
        value={value}
      />
    </InputGroup>
  );
};

export default SearchInput;
