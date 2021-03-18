import { useSlugContext } from "@services/context/SlugProvider";
import React, { FC } from "react";

const Song: FC = () => {
  const { val } = useSlugContext();
  console.log(val);
  return <p>Hei</p>;
};

export default Song;
