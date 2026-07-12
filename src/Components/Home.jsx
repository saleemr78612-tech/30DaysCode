import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme } =
    useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-10 ${
        theme === "light"
          ? "bg-gray-100 text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold">
        Home Page
      </h1>

      <p className="mt-4">
        React Context API Theme Switcher
      </p>
    </div>
  );
}

export default Home;