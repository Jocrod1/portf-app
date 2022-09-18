import React, { FunctionComponent, useState } from "react";
import BtnDarkMode from "../../components/BtnDarkMode";
import PersonalCard from "../../components/PersonalCard";
import SelectLang from "../../components/SelectLang";

//3rd party
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
import Navbar from "../../components/Navbar";

const Home: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  return (
    <React.Fragment>
      <ReactPageScroller
        pageOnChange={(v) => setPage(v)}
        // onBeforePageScroll={(v) => console.log(v)}
        customPageNumber={page}
      >
        <SectionContainer height={100}>
          <div className="body">
            <PersonalCard />
          </div>
        </SectionContainer>
        <div className="body bg-zinc-100">
          <PersonalCard />
        </div>
        <div className="body">
          <PersonalCard />
        </div>
      </ReactPageScroller>
      <Navbar page={page} setPage={(val) => setPage(val)} />
    </React.Fragment>
  );
};

export default Home;
