import React from "react";

import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <div className="container">
        <div className="row row-content">
          <div className="col-  mx-auto my-2">
            <h2>About me</h2>
            <p >
              I am a self taught Software Developer. I have a Master's degree in
              Electronics & Computer Sciences. For the past six years, I worked
              as a Technical support Engineer. I developed a passion for serving
              the Customer, solving problems, and making things efficient, which
              kind of drove me to be a Frontend engineer and Web developer.
            </p>
            <p >
              I like to build websites that are accessible, easy to use and
              super fast. I use <i>React</i>, Bootstrap, HTML, CSS and
              JavaScript and to produce responsive websites and web apps that
              work across browsers, and devices.
            </p>
          </div>
        </div>
        <div className="row">
          <h2 className="col-  mx-auto my-2">Skills:</h2>
           <div className="row "></div>
          <div className="col-9 col-sm-3 mx-auto my-2">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
           <div className="col-9 col-sm-3 mx-auto my-2">
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>SASS/Scss</li>
            </ul>
          </div>
          <div className="col-9 col-sm-3 mx-auto  my-2">
            <ul >
              <li >Git/Github</li>
              <li>NPM</li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
