"use client";
import { CompaniesList } from "@/components/companies-list";
import * as React from "react";
import { useSearch } from "../app/hooks/use-search";
import Image from "next/image";
import { MantineSearchbar } from "../app/components/search/Searchbar";
import { CountsLabel } from "@/components/counts-label";

const content = {
  description:
    "Easily search for corporations associated with genocide in Palestine.",
};
export const Hero = () => {
  const { input, setInput, isLoading, companies, onSubmit, inputRef } =
    useSearch();
  const withResults = (companies ?? []).length > 0;
  return (
    <div
      className={`mx-auto flex w-full max-w-3xl flex-col justify-start gap-4 ${
        withResults ? "pt-4" : "h-screen pt-20 md:pt-32"
      }`}
    >
      <div className="animate-in space-y-4">
        <div className="w-full flex-col-center">
          <Image
            src="/logo.png"
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
        <form
          onSubmit={onSubmit}
          // className={withResults ? "" : "pb-10 md:pb-44"}
        >
          <MantineSearchbar
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
