import React, { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/header/Header' 
import './sass/main.scss';

function App() {
  const [show, changeShow] = useState(true);
  const handleClickNextSlide=(successCallBack)=>{
    changeShow(prev=>!prev);
    // successCallBack();
  }
  return (
    <ReactFullpage
    // fullpage options
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Header handleClickNextSlide={handleClickNextSlide} show={show}/>
            {/* <>
              <h1>hamadaaaaaaaaaaaaaaaa</h1> */}
              
            {/* </> */}
          </div>
          <div className="section section1">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default App;
