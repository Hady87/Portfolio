
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

import './App.css';
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
   
     <Router>
          <Header />
         
        <AnimatedPage/>
         <Footer/>
        </Router>
    </>
  );
}

export default App;
