import React from "react";
import AnimatedPage from "./AnimatedPage";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="container">
        <div className="row row-content">
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <div className="col-  mx-auto my-2">
              <div className=" my-2">
                <a
                  href="https://drive.google.com/file/d/1Y16tbvQq3VM-XEEWBEPj7XYji9pETWES/view?usp=sharing"
                  target="_blanc"
                >
                  <button type="button" className="btn btn-primary my-4 d-flex">
                    Donwload Resume
                  </button>
                </a>
              </div>
              <h2 className="my-2">Summary</h2>
              
              <p>
                I am a self taught Front-end Developer. I have a Master's degree
                in Electronics & Computer Sciences. For the past six years, I
                worked as a Technical support Engineer. I developed a passion
                for serving the Customer, solving problems, and making things
                efficient, which eventually drove me to be a Frontend engineer and
                Web developer.
              </p>
              <p>
                I like to build websites that are accessible, easy to use and
                super fast. I use <i>React</i>, Bootstrap, HTML, CSS and
                JavaScript to produce responsive websites and web apps that
                work across browsers, and devices.
              </p>
            </div>
          </FadeTransform>
        </div>
        <div className="row">
         
            <h2 className="col-  mx-auto my-2">Skills:</h2>
            </div>
           
            <div className="row ">
                
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
              <ul>
                <li>Git/Github</li>
                <li>NPM</li>
              </ul>
            </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default About;
