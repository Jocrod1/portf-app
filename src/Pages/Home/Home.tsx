import React, { FunctionComponent, useState } from "react";
import { Moon, Sun } from "react-feather";
import PersonalCard from "../../components/PersonalCard";
import { themes } from "../../constants/themes";
import UseToggleTheme from "../../Hooks/UseToggleTheme";

const Home: FunctionComponent = () => {
  const [colorTheme, setTheme] = UseToggleTheme();
  const [darkMode, setDarkMode] = useState(colorTheme === themes.light);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className="body">
      <button
        onClick={() => toggleDarkMode(!darkMode)}
        className={"darkModeBtn"}
      >
        {!darkMode ? <Moon size={27} /> : <Sun size={27} />}
      </button>
      <PersonalCard />
    </div>
  );
};

export default Home;
