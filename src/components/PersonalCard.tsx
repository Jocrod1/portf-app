import React from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

const PersonalCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-10 rounded transition-all">
      <div className="avatarCont">
        <div
          // src={require("../assets/profile.png")}
          className={"avatarImg avI"}
        />
      </div>
      <div className="flex flex-col justify-center px-11 items-center lg:items-start">
        <h1 className="font-extrabold text-6xl">José Pereira</h1>
        <span className="text-left mb-5">
          Software developer based in Valencia, Spain
        </span>
        <div className="flex flex-row w-28 justify-between">
          <a href="http://www.twitter.com/jocrod1" target={"_blank"}>
            <Twitter className="socials-icons" />
          </a>
          <a href="http://www.github.com/jocrod1" target={"_blank"}>
            <GitHub className="socials-icons" />
          </a>
          <a href="http://www.instagram.com/jocrod1" target={"_blank"}>
            <Instagram className="socials-icons ins" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
