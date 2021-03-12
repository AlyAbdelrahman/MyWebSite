import React, { useEffect } from 'react';
import $ from 'jquery';

const Sphere = () => {
  useEffect(() => {
    eval(
      `try {
             TagCanvas.Start(
               'myCanvas',
               '',
               {textColour: 'white',outlineColour: '#0000', initial:[0.530, 0.690],maxSpeed:.01}
             );
           }
           catch(e) {
             document.getElementById('myCanvasContainer').style.display = 'none';
           }`,
    );
  }, []);
  return (
    <div className="SphereContainer" >
    <div id="myCanvasContainer">
      <canvas width="500" height="500" id="myCanvas">
        <ul>
          <li><a>BootStrap</a></li>
          <li><a>CSS</a></li>
          <li><a>HTML</a></li>
          <li><a>ES5/ES6</a></li>
          <li><a>ReactJS</a></li>
          <li><a>Redux</a></li>
          <li><a>loadash</a></li>
          <li><a>npm</a></li>
          <li><a>JQuery</a></li>
          <li><a>Git</a></li>
          <li><a>Node JS</a></li>
          <li><a>Gulp</a></li>
          <li><a>TypeScript</a></li>
          <li><a>Matrial UI</a></li>
          <li><a>Figma</a></li>
          <li><a>Adobe XD</a></li>
        </ul>
      </canvas>
    </div>
  </div>

  );
};
export default Sphere;
