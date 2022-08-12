import { FunctionComponent } from "react";
import BtnDarkMode from "../../components/BtnDarkMode";
import PersonalCard from "../../components/PersonalCard";
import SelectLang from "../../components/SelectLang";

const Home: FunctionComponent = () => {
  return (
    <div className="body">
      <BtnDarkMode />
      <SelectLang />
      <PersonalCard />
    </div>
  );
};

export default Home;
