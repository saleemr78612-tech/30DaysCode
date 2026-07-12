import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme, setTheme } =
    useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  };

  return (
    <nav
      className={`p-5 flex justify-between ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      <h1 className="text-2xl font-bold">
        My App
      </h1>

      <button
        onClick={toggleTheme}
        className="border px-4 py-2 rounded"
      >
        {theme === "light"
          ? "🌙 Dark Mode"
          : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;