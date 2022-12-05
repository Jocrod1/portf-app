import React from "react";
import Itchio from "../assets/icons/brands/Itchio";
import { GitHub, Twitter, Linkedin } from "react-feather";

const SocialsButtons: React.FC = () => {
  return (
    <div className="flex flex-row w-28 justify-between">
      <a href="https://jocrod.itch.io/" target={"_blank"} rel="noreferrer">
        <Itchio color="black" size={24} className="itch-icon" />
      </a>
      <a
        href="http://www.github.com/jocrod1"
        target={"_blank"}
        rel="noreferrer"
      >
        <GitHub className="socials-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/jose-arturo-5695921a1/"
        target={"_blank"}
        rel="noreferrer"
      >
        <Linkedin className="socials-icons" />
      </a>
      <a
        href="http://www.twitter.com/jocrod1"
        target={"_blank"}
        rel="noreferrer"
      >
        <Twitter className="socials-icons" />
      </a>

      {/* <a
            href="http://www.instagram.com/jocrod1"
            target={"_blank"}
            rel="noreferrer"
          >
            <Instagram className="socials-icons ins" />
          </a> */}
    </div>
  );
};

export default SocialsButtons;
