import React, { useRef } from 'react';

import 'react-glidejs/dist/index.css';
import './transitions.css';

const Projects = ({ showMoreProjects }) => (<div className={`showMoreProject ${showMoreProjects && 'displayShowMoreProject'}`}>
    <div
      className="App"
      style={{
        background: '#1B262C',
      }}
    >

    </div>
  </div>
);
export default Projects;
