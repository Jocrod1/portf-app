import React from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

const PersonalCard = () => {
  return (
    <div>
      <h1 className="font-extrabold text-5xl">José Pereira Z.</h1>
      <span>Software developer based in Valencia, Spain</span>
      <div className="flex flex-row">
        <Twitter />
        <GitHub />
        <Instagram />
      </div>
    </div>
  );
};

export default PersonalCard;
