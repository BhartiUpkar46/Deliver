import React from 'react';
import MainPage from './MainPage';
import ServicesPopup from '../ServicesPopup';
import About from './About';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainPage />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="mx-52 mt-6 rounded-3xl py-6 text-center text-white text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md transition-transform duration-300"
      >
        <Link to="/travelpage">Check Opportunity To Earn</Link>
      </motion.div>

      <ServicesPopup />
      <About />
    </motion.div>
  );
};

export default Home;
