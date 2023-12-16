"use client";
import { CompaniesList } from "@/components/companies-list";
import SearchBar from "./searchbar";
import * as React from "react";
import { useSearch } from "../hooks/use-search";
import Image from "next/image";
const content = {
  title: "MustaghnI",
  description:
    "If you can't take action against genocide in Palestine, you can at least boycott supporting corporations",
};
export const Hero = () => {
  const { input, setInput, isLoading, companies, onSubmit, inputRef } =
    useSearch();
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col justify-center gap-4">
      <div className="w-full pt-10 flex-row-center">
        <Image src="/logo.png" alt="logo" width="200" height="75" />
      </div>
      {/* <h1 className="text-center text-3xl font-extrabold text-gray-800">
        {content.title}
      </h1> */}
      <p className="mx-auto mb-4 max-w-xl text-center text-xl text-gray-700">
        {content.description}
      </p>
      <form onSubmit={onSubmit}>
        <SearchBar
          isLoading={isLoading}
          input={input}
          setInput={setInput}
          inputRef={inputRef}
        />
      </form>

      <CompaniesList companies={companies} />
    </div>
  );
};
