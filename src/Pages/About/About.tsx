import { FunctionComponent } from "react";
import { Calendar, Gift, Mail, Phone, Circle } from "react-feather";
import { useTranslation } from "react-i18next";

const ItemAbout = (icon: JSX.Element, title: String, description: String) => {
  return (
    <div className="flex items-center">
      <Circle size={7} className={"fill-black dark:fill-white mx-2"} />
      {icon}
      <span className="px-2 w-20">{`${title}:`}</span>
      <p>{description}</p>
    </div>
  );
};

const About: FunctionComponent = () => {
  const { t } = useTranslation();

  const birthdate: Date = new Date("06/18/1998");

  let timeDiff = Math.abs(Date.now() - birthdate.getTime());
  let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

  return (
    <div className="flex flex-col items-center relative w-4/5 lg:w-1/2">
      <div className="flex flex-col">
        <div className="flex flex-col items-center pb-2">
          <div className="relative h-20 w-20  lg:h-48 lg:w-48">
            <div className="avatarImg avI" />
          </div>
          <h1 className="text-5xl font-bold py-3">{t("aboutMe.title")}</h1>
        </div>
        <div className="flex mb-4 flex-col md:flex-row">
          <span className="flex-1 pr-4 text-justify">
            {t("aboutMe.description")}
          </span>
          {/* <div className="border-r hidden md:block" /> */}
          <div className="flex flex-1 justify-center">
            <ul className="flex flex-col justify-around pl-4">
              <li>
                {ItemAbout(
                  <Gift />,
                  t("aboutMe.birthday"),
                  t("aboutMe.birthdayVal")
                )}
              </li>
              <li>
                {ItemAbout(
                  <Calendar />,
                  t("aboutMe.age"),
                  `${age} ${t("aboutMe.ageVal")}`
                )}
              </li>
              <li>
                {ItemAbout(
                  <Mail />,
                  t("aboutMe.email"),
                  "Jocrod.one@gmail.com"
                )}
              </li>
              <li>
                {ItemAbout(<Phone />, t("aboutMe.phone"), "+34 624 03 93 42 ")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href={require("../../assets/Documents/CV José Pereira.pdf")}
            target={"_blank"}
            rel="noreferrer"
            className="bg-black text-white dark:bg-zinc-100 dark:text-black py-3 px-5 cursor-pointer"
          >
            {t("aboutMe.readCV")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
