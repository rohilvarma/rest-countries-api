"use client";
import { iconSize, regions } from "@/utils/constants";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { useInputStore } from "@/utils/store";
const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateSearch } = useInputStore();

  return (
    <div className="">
      <div className="mt-8 relative sm:w-1/2 lg:w-full">
        <div className="px-8 py-4 bg-white text-very_dark_blue-light dark:bg-dark_blue-dark dark:text-white shadow-lg flex justify-between items-center">
          {"Filter by region"}
          <FaChevronLeft
            size={iconSize}
            className={`${
              isOpen ? "-rotate-90" : ""
            } duration-200 ease-linear ml-8`}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } px-8 py-4 absolute z-10 left-0 right-0 bg-white text-very_dark_blue-light dark:bg-dark_blue-dark dark:text-white shadow-lg flex-col gap-y-2 mt-4 rounded-md`}
        >
          {regions.map((region, index) => (
            <li
              className="hover:underline duration-200 cursor-pointer"
              key={index}
              onClick={() =>
                updateSearch(region === "All" ? "" : region.toLowerCase())
              }
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownFilter;
