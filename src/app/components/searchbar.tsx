"use client";
import React from "react";
import { PiSpinnerGapLight } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";

interface SearchBarProps {
  isLoading: boolean;
  input: string;
  setInput: (v: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isLoading,
  input,
  setInput,
  inputRef,
}) => {
  return (
    <div className="flex-row-start dusration-300 mb-2 w-full gap-1 rounded-full border border-gray-200 bg-gradient-to-t from-gray-50 to-transparent px-3 focus-within:border-gray-300 focus-within:shadow-xl">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search here"
        className="h-14 w-full grow rounded-lg bg-transparent px-4 focus:outline-none"
      />
      <div className="flex-row-start gap-2">
        {isLoading && <PiSpinnerGapLight className="animate-spin" size="25" />}
        {input && !isLoading && (
          <button
            type="button"
            onClick={() => setInput("")}
            className="center h-9 w-9 rounded-full bg-gray-100"
          >
            <MdOutlineClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
