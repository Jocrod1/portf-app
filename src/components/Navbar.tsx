import React from "react";
import BtnDarkMode from "./BtnDarkMode";
import SelectLang from "./SelectLang";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0">
      <BtnDarkMode />
      <SelectLang />
    </nav>
  );
};

export default Navbar;
