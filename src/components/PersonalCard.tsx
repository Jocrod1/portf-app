import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../assets/LogTEST.svg";

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
        <div className="flex flex-row w-24 justify-between">
          <a
            href="http://www.twitter.com/jocrod1"
            target={"_blank"}
            rel="noreferrer"
          >
            <Twitter className="socials-icons" />
          </a>
          <a
            href="http://www.github.com/jocrod1"
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHub className="socials-icons" />
          </a>
          {/* <a
            href="http://www.instagram.com/jocrod1"
            target={"_blank"}
            rel="noreferrer"
          >
            <Instagram className="socials-icons ins" />
          </a> */}
          <a href="http://www.linkedin.com/" target={"_blank"} rel="noreferrer">
            <Linkedin className="socials-icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
