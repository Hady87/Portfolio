import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";

const AnimatedPage = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/about" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPage;
