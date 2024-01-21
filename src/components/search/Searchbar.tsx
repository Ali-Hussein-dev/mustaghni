"use client";
import { PiSpinnerGapLight } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { ActionIcon, Input, Skeleton } from "@mantine/core";
import * as React from "react";
import dynamic from "next/dynamic";
import { Filter } from "./Filter";
import { type useFilterByTags } from "@/hooks/use-filter-by-tags";
import { BiSolidSend } from "react-icons/bi";
import { type useSearch } from "@/hooks/use-search";
import { useSearchCtx } from "@/hooks/use-search-ctx";
import { useStore } from "zustand";
import { FaFilter } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";

//======================================From-Mantine
export const Searchbar = ({
  input,
  setInput,
  isLoading,
  onSubmit,
  inputRef,
  getFilterProps,
}: ReturnType<typeof useSearch> & {
  getFilterProps: ReturnType<typeof useFilterByTags>;
}) => {
  const [filter, setFilter] = React.useState(false);

  const params = useSearchParams();
  const hasNoParams = params.size === 0;

  const store = useSearchCtx();
  const labels = useStore(store, (s) => s.labels);
  const locale = useStore(store, (s) => s.locale);

  return (
    <form onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value?.trim())}
        placeholder={labels?.placeholder}
        classNames={{
          input:
            "px-[3rem] bg-gradient-to-t from-gray-50 to-transparent border border-gray-300 text-gray-600 duration-300 focus:shadow",
        }}
        rightSectionWidth="auto"
        rightSectionPointerEvents="all"
        rightSection={
          <div className={"gap-3 px-3 flex-row-end"}>
            {input && (
              <ActionIcon
                type="button"
                size="lg"
                radius="full"
                variant="outline"
                onClick={() => setInput("")}
                // className="center h-9 w-9 rounded-full bg-gray-100"
              >
                <MdOutlineClose />
              </ActionIcon>
            )}
            <ActionIcon
              type="button"
              size="lg"
              radius="full"
              variant="filled"
              color="dark"
              onClick={() => setFilter(!filter)}
            >
              <FaFilter size="15" />
            </ActionIcon>
            <ActionIcon
              type="submit"
              size="lg"
              radius="full"
              variant="filled"
              color="dark"
              disabled={!input}
            >
              <BiSolidSend
                size="17"
                className={`${locale === "ar" ? "-rotate-180" : ""}`}
              />
            </ActionIcon>
          </div>
        }
        // leftSectionWidth="auto"
        leftSection={
          isLoading && !hasNoParams ? (
            <PiSpinnerGapLight className="animate-spin" size="25" />
          ) : (
            <ImSearch size="20" className="text-gray-400" />
          )
        }
        radius="full"
        size="xl"
      />
      {filter && <Filter {...getFilterProps} setFilter={setFilter} />}
    </form>
  );
};

export const MantineSearchbar = dynamic(
  () => import("./Searchbar").then((c) => c.Searchbar),
  {
    ssr: false,
    loading: () => <Skeleton w="100%" h="48px" radius="xl" />,
  },
);
