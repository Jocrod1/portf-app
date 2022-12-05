import { GitHub, Linkedin, Twitter } from "react-feather";
import { useTranslation } from "react-i18next";
import Itchio from "../assets/icons/brands/Itchio";
import SocialsButtons from "./SocialsButtons";

const PersonalCard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-10 rounded transition-all">
      <div className="avatarCont">
        <div
          // src={require("../assets/profile.png")}
          className={"avatarImg avI"}
        />
      </div>
      <div className="flex flex-col justify-center px-11 items-center lg:items-start">
        <h1 className="font-extrabold text-6xl stroke-1 stroke-red-700">
          José Pereira
        </h1>
        <span className="text-left mb-5 lg:mb-2">
          {t("aboutMe.descSummary")}
        </span>
        <SocialsButtons />
      </div>
    </div>
  );
};

export default PersonalCard;
