import React from "react";
import axios from "axios";
import AnimatedPage from "./AnimatedPage";
import JsFileDownloader from "js-file-downloader";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function Contact() {
  const handleClick = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        JsFileDownloader(res.data, filename);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="container d-flex flex-column min-vh-100 justify-content-start align-items-center" >
        <div className="row my-5 ">
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(50%)",
            }}
          >
            <div className="col-8 mx-auto my-2 styleContact ">
              <h3>Thanks for taking the time to reach out</h3>
         
              <a
                className="d-flex my-2"
                href="mailto:elhadi.nennih@gmail.com"
                target="_blanc"
              >
                <FaEnvelope className="my-1 mx-2" />
                Email me
              </a>
              <a
                className="d-flex my-2"
                href="https://www.linkedin.com/in/hady-elmoctar/"
                target="_blanc"
              >
                <FaLinkedin className="my-1 mx-2" />
                Linkedin
              </a>
              <a
                className="d-flex my-2"
                href="https://github.com/Hady87"
                target="_blanc"
              >
                <FaGithub className="my-1 mx-2" />
                Github
              </a>

             
            </div>
          </FadeTransform>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
