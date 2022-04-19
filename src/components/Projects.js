import React from "react";
import AnimatedPage from "./AnimatedPage";
import Card from "react-bootstrap/Card";
import data from "../shared/data";
import { FaGithub } from "react-icons/fa";
import {motion } from "framer-motion";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Projects() {
  return (
   
       <motion.div
     initial= {{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
    >
      <div className="container">
        
        <div className="row mt-5">
          <div className="col-10 col-md-11 mx-auto my-2">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
              <Card.Img
                variant="top"
                src="/assets/images/FC.png"
                height="200px"
              />
              <Card.Body className="mt-4">
                <Card.Title>
                  <h5 className="card-title">FC-Mauritania</h5>
                </Card.Title>
                <Card.Text>
                  This is a website I am building for Freedom and Citizenship
                  Association, a non-profit organization located in my home
                  country Mauritania.
                </Card.Text>
                <Card.Text>
                  Technologies used: React,React Hooks, Bootstrap 5,
                  HTML,CSS,JavaScript, Google Map API.
                </Card.Text>
                <div className="d-flex justify-content-between my-4">
                  <a
                    href="https://zesty-seahorse-f63723.netlify.app/"
                    target="_blanc"
                    className="btn btn-primary  "
                  >
                    Visit the Site
                  </a>
                  <a
                    className="d-flex"
                    href="https://github.com/Hady87"
                    target="_blanc"
                  >
                    <FaGithub size="30" />
                  </a>
                </div>
              </Card.Body>
             
            </Card>
             </FadeTransform>
          </div>
        </div>
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
        <div className="row">
          {data.map((item, k) => (
            <div className="col-10 col-md-5 mx-auto my-4" key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.image} height="300px" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <div className=" heightCard">
                    <Card.Text className="my-2">{item.description}</Card.Text>
                    <Card.Text>{item.tech}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between my-4">
                    <a
                      href={item.appLink}
                      target="_blanc"
                      className="btn btn-primary  "
                    >
                      Visit the App
                    </a>
                    <a
                      className="d-flex"
                      href={item.githubLink}
                      target="_blanc"
                    >
                      <FaGithub size="30" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        </FadeTransform>
      </div>
      </motion.div>
   
  );
}

export default Projects;
