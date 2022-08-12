import React from "react";
import { ChevronDown } from "react-feather";

const SelectLang = () => {
  return (
    <div className="selectLangCont">
      <button className="selectLangBtn">
        <span>English</span>
        <ChevronDown />
      </button>
      <div className="z-10 w-28 bg-white rounded divide-y divide-gray-100 dark:bg-gray-700">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              English
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Español
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectLang;
