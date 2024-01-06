"use client";
import { CompaniesList } from "@/components/companies-list";
import * as React from "react";
import { useSearch } from "../app/hooks/use-search";
import Image from "next/image";
import { MantineSearchbar } from "./search/Searchbar";
import { CountsLabel } from "@/components/counts-label";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { type Company } from "./company-card";
import { useFilterByTags } from "@/app/hooks/use-filter-by-tags";

const content = {
  description:
    "Easily search for corporations associated with genocide in Palestine.",
};
export const Hero = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const getFilterProps = useFilterByTags();
  const getSearchbarProps = useSearch({
    setSelected: getFilterProps.setSelected,
  });
  const queryClient = useQueryClient();
  const companies = queryClient.getQueryData<Company[]>([
    "brands",
    query?.replace(/%7C/g, "|"),
  ]);
  // const withResults = (companies ?? []).length > 0;

  // console.log(["brands", query], companies);
  return (
    <div
      className={`mx-auto flex w-full max-w-3xl flex-col justify-start 
      gap-4 pt-20 sm:pt-32 md:pt-40`}
    >
      <div className="animate-in space-y-4">
        <div className="w-full flex-col-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width="270"
            height="100"
            className="mb-4"
            priority
            quality={75}
          />
          <p className="mx-auto mb-2 max-w-lg px-1 text-center text-xl font-semibold text-gray-600">
            {content.description}
          </p>
          <div className="gap-3 flex-row-center">
            <CountsLabel />
          </div>
        </div>
        <MantineSearchbar
          {...getSearchbarProps}
          getFilterProps={getFilterProps}
        />
      </div>
      <CompaniesList companies={companies} tags={getFilterProps.selected} />
    </div>
  );
};
