import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './sass/main.scss';

function App() {
  return (
    <ReactFullpage
    // fullpage options
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */

      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button className="button button--state-success" onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default App;
