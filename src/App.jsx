import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Aboutme from './Pages/Aboutme/Aboutme';
import Projects from './Pages/Projects/Projects';
import Loader from './Components/Loader/Loader';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const pageVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.7
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Inicia en true para mostrar el loader al inicio

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Tiempo mayor para pruebas

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
      {loading && <Loader />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="page-container"
          layoutId="page-container"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
