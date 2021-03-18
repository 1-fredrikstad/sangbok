import React, { createContext, FC, useContext, useState } from "react";

interface SlugPair {
  slug: string;
  id: string;
}

interface ISlugContext {
  slugMap: SlugPair[];
  updateSlugMap: (pair: SlugPair) => void;
  val: number;
  incrementVal: () => void;
}

export const SlugContext = createContext<ISlugContext>({
  slugMap: [],
  updateSlugMap: () => {},
  val: 0,
  incrementVal: () => {},
});

export const SlugProvider: FC = ({ children }) => {
  const [slugMap, setSlugMap] = useState<SlugPair[]>([]);
  const [val, setVal] = useState(0);

  const values: ISlugContext = {
    slugMap: slugMap,
    updateSlugMap: (pair: SlugPair) => {
      setSlugMap([...slugMap, pair]);
    },
    val: val,
    incrementVal: () => {
      setVal(val + 1);
      console.log(val);
    },
  };

  return <SlugContext.Provider value={values}>{children}</SlugContext.Provider>;
};

export const useSlugContext = () => useContext(SlugContext);
