"use client";
import { iconSize } from "@/utils/constants";
import { useInputStore } from "@/utils/store";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Search = () => {
  const { cancelSearch, searchValue, updateSearch } = useInputStore();
  return (
    <div className="grow relative mt-8">
      <IoSearchSharp size={iconSize} className="absolute mt-4 ml-6 lg:mt-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="px-16 py-4 w-full lg:w-2/3 rounded-md bg-white text-very_dark_blue-light dark:bg-dark_blue-dark dark:text-white shadow-lg"
        value={searchValue}
        onChange={(e) => updateSearch(e.target.value)}
      />

      <RxCross1
        size={iconSize}
        className="absolute right-0 lg:right-1/3 top-0 mt-4 mr-4 lg:mt-5"
        onClick={() => cancelSearch()}
      />
    </div>
  );
};

export default Search;
