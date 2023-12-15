"use client";
import { CompaniesList } from "@/components/companies-list";
import SearchBar from "./searchbar";
import * as React from "react";
import { useSearch } from "../hooks/use-search";
import Image from "next/image";
const content = {
  title: "MustaghnI",
  description:
    "Save children and innocent people by boycotting companies that fund genocide",
};
export const Hero = () => {
  const { input, setInput, isLoading, companies, onSubmit, inputRef } =
    useSearch();
  return (
    <div className="mx-auto flex h-screen w-full max-w-3xl flex-col justify-center gap-4">
      <div className="w-full flex-row-center">
        <Image src="/logo.png" alt="logo" width="200" height="75" />
      </div>
      {/* <h1 className="text-center text-3xl font-extrabold text-gray-800">
        {content.title}
      </h1> */}
      <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
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
