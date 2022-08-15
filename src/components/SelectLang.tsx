import React, { useState } from "react";
import { ChevronDown } from "react-feather";

const SelectLang = () => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <div className="selectLangCont">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        className="selectLangBtn"
      >
        <span>English</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="selectList">
          <ul className="selectListCont">
            <li>
              <a href="#" className="selectItem">
                English
              </a>
            </li>
            <li>
              <a href="#" className="selectItem">
                Español
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectLang;
