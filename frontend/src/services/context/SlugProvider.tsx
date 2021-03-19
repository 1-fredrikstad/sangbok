import React, { createContext, FC, useContext, useState } from "react";

type Slug = string;

export interface SlugInfo {
  prev: Slug | null;
  next: Slug | null;
  _id: string;
}

export interface SlugMap {
  [slug: string]: SlugInfo;
}
interface ISlugContext {
  slugs: SlugMap;
  updateSlugMap: (slug: Slug, info: SlugInfo) => void;
}

const initialValues: ISlugContext = {
  slugs: {},
  updateSlugMap: () => {},
};

export const SlugContext = createContext<ISlugContext>(initialValues);

export const SlugProvider: FC = ({ children }) => {
  const [slugMap, setSlugInfo] = useState<SlugMap>({});

  const values: ISlugContext = {
    slugs: slugMap,

    updateSlugMap: (slug: Slug, info: SlugInfo) => {
      slugMap[slug] = info;
      setSlugInfo(slugMap);
    },
  };

  return <SlugContext.Provider value={values}>{children}</SlugContext.Provider>;
};

export const useSlugContext = (): ISlugContext => useContext(SlugContext);
