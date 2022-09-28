import React, { FunctionComponent, useState } from "react";
import BtnDarkMode from "../../components/BtnDarkMode";
import PersonalCard from "../../components/PersonalCard";
import SelectLang from "../../components/SelectLang";

//3rd party
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
import Navbar from "../../components/Navbar";
import About from "../About/About";

const Home: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  return (
    <React.Fragment>
      <ReactPageScroller
        pageOnChange={(v) => setPage(v)}
        // onBeforePageScroll={(v) => console.log(v)}
        customPageNumber={page}
      >
        <div className="body">
          <PersonalCard />
        </div>
        <div className="body border-t-2">
          <About />
        </div>
      </ReactPageScroller>
      <Navbar page={page} setPage={(val) => setPage(val)} />
    </React.Fragment>
  );
};

export default Home;
