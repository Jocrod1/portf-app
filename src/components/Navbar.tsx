import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BtnDarkMode from "./BtnDarkMode";
import SelectLang from "./SelectLang";

const Navbar = ({ page = 0, setPage = (val: number) => {} }) => {
  const { t } = useTranslation();
  const ButtonsModules = {
    HOME: "HOME",
    ABOUT: "ABOUT",
    // PROJECTS: "PROJECTS",
    CONTACT: "CONTACT",
  };

  const [selModule, setSelModule] = useState(ButtonsModules.HOME);
  return (
    <nav className="z-10 bg-white fixed top-0 w-screen">
      <div className="absolute left-6 top-6 rounded-full text-black dark:text-white transition-all">
        <span className="font-extrabold text-4xl cursor-default">JP</span>
      </div>
      <BtnDarkMode />
      <SelectLang />
      <div className="hidden -z-30 text-black absolute top-9 w-full items-center justify-center lg:flex">
        <ul>
          {Object.keys(ButtonsModules).map((mod, i) => (
            <li
              key={mod}
              className={
                "inline mx-4 font-semibold cursor-pointer text-lg dark:text-white hover:underline underline-offset-4" +
                (i == page ? " underline" : "")
              }
              onClick={() => setPage(i)}
            >
              {t(`headers.${mod}`)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
