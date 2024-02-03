"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { iconSize } from "@/utils/constants";
const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null;
  }
  return (
    <div
      className="font-semibold cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <span className="flex items-center gap-x-2">
          <FaMoon size={iconSize} /> Dark Mode
        </span>
      ) : (
        <span className="flex items-center gap-x-2">
          <FaSun size={iconSize} /> Light Mode
        </span>
      )}
    </div>
  );
};

export default ToggleTheme;
