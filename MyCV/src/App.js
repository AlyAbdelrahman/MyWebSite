import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MouseParallaxbackground from 'components/svgBackground/MouseParallaxbackground';
import Header from 'containers/header/Header';
import Slide from 'components/slide/Slide';
import ReactParticles from 'react-particles-js';
import Projects from 'components/projects/Projects';
import particlesConfig from './particles-config.js';

import './sass/main.scss';

function App() {
  const [index, setIndex] = useState(true);
  const [isbackGroundAnimationActive, setisBackGroundAnimationActive] = useState(true);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  let fullApi;
  let timeoutId;
  const afterLoad = (origin, destination, direction) => {
    console.log('>>dis', destination);
    destination.index === 1 ? setisBackGroundAnimationActive(false) : setisBackGroundAnimationActive(true);
  };
  const handleOnSlideLeave = (currentIndex, nextIndex) => {
    // console.log('>>currentIndex', currentIndex);
    // document.querySelector('.fp-table.active ').className += 'aos-animate';
    // setIndex(nextIndex.index);
    // console.log('>>currentIndex', currentIndex);
    // console.log('>>nextIndex', nextIndex.index === 1);
    // currentIndex.isFirst === true || currentIndex.isLast === true ? setisBackGroundAnimationActive(true) : setisBackGroundAnimationActive(false);
  };
  const onLeave = (section, origin, destination, direction) => {
    // setTimeout(() => true, 1000);
    // ret
    const curTime = new Date().getTime();
    // animating my element
    // console.log('>>fullApi', fullApi);
    // document.getElementById('animationXmoon').className += 'addCSS';
    // setTimeout(() => fullApi.moveTo(destination.index + 1), 2000);
    // return false;
    // clearTimeout(timeoutId);

    // timeoutId = setTimeout(() => {
    //   setAnimationIsFinished(true);

    //   setIndex(section.index);
    //   fullApi.moveTo(destination.index + 1);
    // }, 2000);

    // return animationIsFinished;

    // console.log('>>section', section);
    // console.log('>>origin', origin);
    // console.log('>>destination', destination);
    // console.log('>>direction', direction);
  };
  const handleClickShowMore = () => {
    setShowMoreProjects(!showMoreProjects);
  };
  return (
    <>
      {/* <Canvas style={{ postion: 'absolute' }}/> */}

      <Projects showMoreProjects={showMoreProjects}/>
      <Header />
      <ReactFullpage
        // fullpage options
        licenseKey="YOUR_KEY_HERE"
        style={{ postion: 'relative' }}
        className="section0"
        scrollingSpeed={2000} /* Options here */
        navigation
        fadingEffect
        navigationPosition="left"
        afterLoad={handleOnSlideLeave}
        delay={2000}
        onLeave={onLeave}
        afterLoad={afterLoad}
        normalScrollElements=".demo"
        render={({ state, fullpageApi }) => {
          fullApi = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section section0">
                <Slide text="Hi,        I'm Aly" subHeader="Web &       User Interface     Developer" />
                <p className="scrollDownText">scroll down</p>
              </div>
              <div className="section section1 ">
                <Slide text="About Me"
                  subHeader=" The primary area of my interest is undoubtedly front-end.
            My passion for code had begun in my early years in collage,
            For over a 3 years I had many opportunities to work in a vast spectrum of web technologies."
                  backgroundImage="https://i.pinimg.com/originals/8b/35/fe/8b35fef55fba1a201c9c7a11d3ec3d64.gif"
                  slideNumber="01"
                  showMeButtonLink="www.google.com"
                  setisBackGroundAnimationActive={setisBackGroundAnimationActive}
                />
              </div>
              <div className="section ">
                <Slide text="What I'm Into" subHeader="Front End developing." backgroundComponent showMeButtonLink="www.google.com" slideNumber="02" onClickShowMore={handleClickShowMore} />

              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      <div className="sky-color"></div>
      {/* <div id='stars'></div>
    <div id='stars2'></div> */}
      {/* <div id='stars3'></div> */}
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: showMoreProjects ? 9999 : -1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      <MouseParallaxbackground index={index} active={isbackGroundAnimationActive} />

    </>
  );
}

export default App;
