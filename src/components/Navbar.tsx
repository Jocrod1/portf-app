import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BtnDarkMode from "./BtnDarkMode";
import SelectLang from "./SelectLang";

const Navbar = () => {
  const { t } = useTranslation();
  const ButtonsModules = {
    HOME: "HOME",
    ABOUT: "ABOUT",
    PROJECTS: "PROJECTS",
    CONTACT: "CONTACT",
  };

  const [selModule, setSelModule] = useState(ButtonsModules.HOME);
  return (
    <nav className="bg-white sticky top-0">
      <div className="absolute left-6 top-6 rounded-full text-black dark:text-white transition-all">
        <span className="font-extrabold text-4xl cursor-default">JP</span>
      </div>
      <BtnDarkMode />
      <SelectLang />
      <div className=" -z-30 text-black absolute top-9 w-full flex items-center justify-center">
        <ul>
          {Object.keys(ButtonsModules).map((mod) => (
            <li
              className={
                "inline mx-4 font-semibold cursor-pointer text-lg dark:text-white hover:underline underline-offset-4" +
                (mod == selModule ? " underline" : "")
              }
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
