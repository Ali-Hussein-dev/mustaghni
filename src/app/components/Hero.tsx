"use client";
import { CompaniesList } from "@/components/companies-list";
import SearchBar from "./searchbar";
import * as React from "react";
import { useSearch } from "../hooks/use-search";
import Image from "next/image";
const content = {
  title: "MustaghnI",
  description:
    "Easily search for brands & corporations associated with genocide in Palestine.",
};
export const Hero = () => {
  const { input, setInput, isLoading, companies, onSubmit, inputRef } =
    useSearch();
  return (
    <div
      className={`mx-auto flex w-full max-w-3xl flex-col justify-center gap-4 ${
        (companies ?? []).length > 0 ? "" : "h-screen"
      }`}
    >
      <div className="animate-in space-y-4">
        <div className="w-full pt-10 flex-col-center">
          <Image
            src="/logo.png"
            alt="logo"
            width="270"
            height="100"
            className="mb-4"
            priority
            quality={75}
          />
          <p className="mx-auto mb-4 max-w-lg px-1 text-center text-xl font-semibold text-gray-600">
            {content.description}
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <SearchBar
            isLoading={isLoading}
            input={input}
            setInput={setInput}
            inputRef={inputRef}
          />
        </form>
      </div>

      <CompaniesList companies={companies} />
    </div>
  );
};
