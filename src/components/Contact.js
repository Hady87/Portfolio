import React from "react";
import { FaEnvelope, FaGithub,FaLinkedin } from "react-icons/fa";



function Contact() {
  return (
    <>
     <div className="container">
        <div className="row my-5">
          <div className="col-8 mx-auto my-2">
            <h3>Thanks for taking the time to reach out</h3>
            <button type="button" className="btn btn-primary my-4 d-flex">Donwload Resume</button>
            
          
           
            <a  className="d-flex my-2" href="mailto:elhadi.nennih@gmail.com" target="_blanc"><FaEnvelope className="my-1 mx-2"/>Email me</a>
            <a  className="d-flex my-2" href="https://www.linkedin.com/in/hady-elmoctar/" target="_blanc"><FaLinkedin className="my-1 mx-2"/>Linkedin</a>
             <a  className="d-flex my-2" href="https://github.com/Hady87" target="_blanc"><FaGithub className="my-1 mx-2"/>Github</a>
             
            </div>
             </div>
              </div>
    </>
  );
}

export default Contact;
