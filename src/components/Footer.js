import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub,FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <footer className="site-footer">
        <div className="container">
           <div className="row">
              <div className="col-4 col-sm-3 mx-auto my-2">
                
                 <ul className="list-unstyled">
                     
                      <li><Link to='/about'>About</Link></li>
                       <li><Link to='/projects'>Projects</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                   
                 </ul>
              </div>
              <div className="col-8 col-sm-8 d-flex justify-content-end mx-auto my-2">
                 
                  <a   href="https://www.linkedin.com/in/hady-elmoctar/" target="_blanc"><FaLinkedin className="my-2 mx-2"/></a>
             <a   href="https://github.com/Hady87" target="_blanc"><FaGithub className="my-1 mx-2"/></a>
               <a  href="mailto:elhadi.nennih@gmail.com" target="_blanc"><FaEnvelope className="my-1 mx-2"/></a>
              </div>
              
           </div>
        </div>
     </footer>
    );
}

export default Footer;