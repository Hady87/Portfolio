
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <>
   
     <Router>
          <Header />
         
              <Routes>
                <Route
                  path="/projects"
                  element={ <Projects />}
                />

                <Route
                  path="/about"
                  
                  element={ <About />}
                />
                <Route
                  path="/contact"
                  
                  element={<Contact />}
                />
                <Route
                  path=""
                  element={ <Navigate to="/about" />}
                />
              </Routes>
           
         
        </Router>
    </>
  );
}

export default App;
