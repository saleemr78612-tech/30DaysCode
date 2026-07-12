import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const [theme, setTheme] =
    useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Navbar />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;