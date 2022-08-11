import React, { useEffect, useState } from "react";
import { themes } from "../constants/themes";

const UseToggleTheme: () => [themes, (val: themes) => void] = () => {
  const [theme, setTheme] = useState(
    localStorage.theme === themes.dark.toString() ? themes.dark : themes.light
  );
  const colorTheme: themes = theme == themes.dark ? themes.light : themes.dark;

  console.log(theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme.toString());
    root.classList.add(theme.toString());

    localStorage.setItem("theme", theme.toString());
  }, [theme, colorTheme]);

  const toggleTheme = (val: themes) => {
    setTheme(val);
  };

  return [colorTheme, toggleTheme];
};

export default UseToggleTheme;
