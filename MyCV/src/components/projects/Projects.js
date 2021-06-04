import React from 'react';
import Coverflow from 'react-coverflow';
import Invest from './InvestInEgypt.png';
// import { StyleRoot } from 'radium';
const Projects = ({ showMoreProjects }) => (<div className={`showMoreProject ${showMoreProjects && 'displayShowMoreProject'}`}>
  <h1 className="projectsTitle">Projects</h1>
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
          width: '100%',
          height: '600px',
        },
      }}
    >
      <img src={Invest} alt='Invest-in-Egypt' data-action="https://www.investinegypt.gov.eg/english/Pages/default.aspx"/>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1f9545120444953.60b1843699e73.png' alt='Medical Mangment System' data-action="https://suite.maiia.com/solution/gestion"/>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/faa4b5120445355.60b1879272c1d.png' alt='Monshaat' data-action="http://monshaat.gov.sa/"/>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66311e120445161.60b185ca0a6f2.png' alt='Culture gate way' data-action=""/>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3a035574183509.5c254d309dad4.png' alt='Hotel Mangment System' data-action=""/>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/721a3975048217.5c41a3addb060.png' alt='Company Page' data-action=""/>
    </Coverflow>
  </div>
);
export default Projects;
