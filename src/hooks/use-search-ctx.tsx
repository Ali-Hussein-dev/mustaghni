import { createStore } from "zustand";
import * as React from "react";
import { createContext } from "react";

export type SearchProps = {
  labels?: {
    placeholder: string;
    noResults: string;
    cancel: string;
    filter: string;
    filterBy: string;
    filterPlaceholder: string;
  };
  locale: string;
};

type SearchState = SearchProps;

type SearchStore = ReturnType<typeof createSearchStore>;

const createSearchStore = (initProps?: Partial<SearchProps>) => {
  const DEFAULT_PROPS: SearchProps = { locale: "en" };
  return createStore<SearchState>()((_set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
  }));
};

const SearchContext = createContext<SearchStore>(createSearchStore());

export const SearchProvider = ({
  children,
  initProps,
}: {
  children: React.ReactNode;
  initProps: SearchProps;
}) => {
  const store = React.useRef(createSearchStore(initProps)).current;
  return (
    <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
  );
};

export const useSearchCtx = () => {
  const store = React.useContext(SearchContext);
  if (!store) throw new Error("Missing SearchContext.Provider in the tree");
  return store;
};
