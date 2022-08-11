import React from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

const PersonalCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-10 rounded transition-all">
      <div className="avatarCont">
        <div
          // src={require("../assets/profile.png")}
          className={"avatarImg"}
        />
      </div>
      <div className="flex flex-col justify-center px-11 items-center lg:items-start">
        <h1 className="font-extrabold text-6xl">José Pereira</h1>
        <span className="text-center lg:text-left ">
          Software developer based in Valencia, Spain
        </span>
        <div className="flex flex-row w-28 justify-between">
          <Twitter />
          <GitHub />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
