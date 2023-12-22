"use client";
import { PiSpinnerGapLight } from "react-icons/pi";
import { MdOutlineClose, MdSearch } from "react-icons/md";
import { ActionIcon, Input } from "@mantine/core";
import * as React from "react";
import dynamic from "next/dynamic";
interface SearchBarProps {
  isLoading: boolean;
  input: string;
  setInput: (v: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

//======================================From-Mantine
export const Searchbar: React.FC<SearchBarProps> = ({
  isLoading,
  input,
  setInput,
  inputRef,
}) => {
  //   const [filter, setFilter] = React.useState(false);
  return (
    <div className="">
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search here"
        classNames={{
          input:
            "pl-[3rem] bg-gradient-to-t from-gray-50 to-transparent border border-gray-200 font-medium text-gray-600 duration-300 focus:shadow",
        }}
        rightSectionWidth="auto"
        rightSectionPointerEvents="all"
        rightSection={
          <div className="gap-2 pr-3 flex-row-end">
            {input && (
              <ActionIcon
                type="button"
                size="lg"
                radius="lg"
                variant="outline"
                onClick={() => setInput("")}
                // className="center h-9 w-9 rounded-full bg-gray-100"
              >
                <MdOutlineClose />
              </ActionIcon>
            )}
            {/* <ActionIcon
              type="button"
              size="lg"
              radius="lg"
              variant="outline"
              onClick={() => setFilter(!filter)}
            >
              <MdFilterList size="25" />
            </ActionIcon> */}
          </div>
        }
        // leftSectionWidth="auto"
        leftSection={
          isLoading ? (
            <PiSpinnerGapLight className="animate-spin" size="25" />
          ) : (
            <MdSearch size="25" className="text-gray-400" />
          )
        }
        radius="xl"
        size="xl"
      />
      {/* {filter && (
        <div className="px-3">
          <div className="mt-3 rounded border bg-gray-50 px-4 pb-3 pt-4">
            filter section
          </div>
        </div>
      )} */}
    </div>
  );
};

export const MantineSearchbar = dynamic(
  () => import("./Searchbar").then((c) => c.Searchbar),
  {
    ssr: false,
    loading: () => (
      <div className="h-14 w-full animate-pulse rounded-full bg-gray-200"></div>
    ),
  },
);
