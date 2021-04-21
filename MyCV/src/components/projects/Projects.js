import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
const Projects = ({ showMoreProjects }) => (<div className={`showMoreProject ${showMoreProjects && 'displayShowMoreProject'}`}>
     {/* <StyleRoot> */}
    <Coverflow
      width={1500}
      height={800}
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px',
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px',
        },
      }}
    >
      <img src='https://erc.europa.eu/sites/default/files/content/pages/images/PIX%20-%20Project%20illustration%20-%20Copyright%20iStock.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://fundamares.org/wp-content/uploads/2019/01/Portada-Project.jpeg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://fundamares.org/wp-content/uploads/2019/01/Portada-Project.jpeg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://fundamares.org/wp-content/uploads/2019/01/Portada-Project.jpeg' alt='Album four' data-action="http://tw.yahoo.com"/>
    </Coverflow>
  {/* </StyleRoot> */}
  </div>
);
export default Projects;
