import React, { useState } from "react";
import { Moon, Sun } from "react-feather";
import { themes } from "../constants/themes";
import UseToggleTheme from "../Hooks/UseToggleTheme";

const BtnDarkMode = () => {
  const [colorTheme, setTheme] = UseToggleTheme();
  const [darkMode, setDarkMode] = useState(colorTheme === themes.light);
  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  return (
    <button onClick={() => toggleDarkMode(!darkMode)} className={"darkModeBtn"}>
      {!darkMode ? <Moon size={27} /> : <Sun size={27} />}
    </button>
  );
};

export default BtnDarkMode;
