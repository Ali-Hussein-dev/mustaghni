"use client";
import { CompaniesList } from "@/components/companies-list";
import * as React from "react";
import { useSearch } from "../hooks/use-search";
import { MantineSearchbar } from "./search/Searchbar";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { type Company } from "./company-card";
import { useFilterByTags } from "@/hooks/use-filter-by-tags";

export const SearchWrapper = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const fQuery = searchParams.get("fQuery")?.replace(/%7C/g, "|") ?? "";
  const getFilterProps = useFilterByTags();
  const getSearchbarProps = useSearch({
    setSelected: getFilterProps.setSelected,
  });
  const queryClient = useQueryClient();
  const companies = queryClient.getQueryData<Company[]>([
    "brands",
    query ?? fQuery ?? "",
  ]);

  return (
    <>
      <MantineSearchbar
        {...getSearchbarProps}
        getFilterProps={getFilterProps}
      />
      <CompaniesList companies={companies} tags={getFilterProps.selected} />
    </>
  );
};
