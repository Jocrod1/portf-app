import { useState } from "react";
import { ChevronDown } from "react-feather";
import { useTranslation } from "react-i18next";
import { Lang } from "../res/utils";

const langs = [Lang[Lang.en], Lang[Lang.es]];

const SelectLang = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<Boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>(i18n.language);

  const handleChangeLanguage = (newLang: string) => {
    setSelectedLang(newLang);
    i18n.changeLanguage(newLang);
  };
  return (
    <div className="selectLangCont">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        className="selectLangBtn"
      >
        <span>{t("langs." + selectedLang)}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="selectList">
          <ul className="selectListCont">
            {langs.map((l) => (
              <li
                key={l}
                onMouseDown={() => handleChangeLanguage(l)}
                className="selectItem"
              >
                {t("langs." + l)}
              </li>
            ))}
            {/* <li className="selectItem">{t("langs." + i18n.languages[0])}</li>
            <li className="selectItem">{t("langs." + i18n.languages[1])}</li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectLang;
