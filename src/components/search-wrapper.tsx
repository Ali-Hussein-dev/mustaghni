"use client";
import { CompaniesList } from "@/components/companies-list";
import * as React from "react";
import { useSearch } from "../hooks/use-search";
import { MantineSearchbar } from "./search/Searchbar";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { type Company } from "./company-card";
import { useFilterByTags } from "@/hooks/use-filter-by-tags";
import { type SearchProps, SearchProvider } from "@/hooks/use-search-ctx";

export const SearchWrapper = (props: SearchProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const fQuery = searchParams.get("fQuery")?.replace(/%7C/g, "|") ?? "";
  const getFilterProps = useFilterByTags();
  const getSearchbarProps = useSearch({
    setSelected: getFilterProps.setSelected,
  });
  const queryClient = useQueryClient();
  const companies = queryClient.getQueryData<Company[]>(
    !fQuery && !query ? [] : ["brands", fQuery || query],
  );
  // console.log({ fQuery, query });
  return (
    <SearchProvider initProps={props}>
      <MantineSearchbar
        {...getSearchbarProps}
        getFilterProps={getFilterProps}
      />
      <CompaniesList companies={companies} tags={getFilterProps.selected} />
    </SearchProvider>
  );
};
