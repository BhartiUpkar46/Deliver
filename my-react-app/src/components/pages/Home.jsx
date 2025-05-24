import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import ServicesPopup from '../ServicesPopup';
import About from './About';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="  min-h-screen m-4 p-4 rounded-3xl shadow-2xl border border-gray-300 bg-gradient-to-b from-red-100 via-red-200 to-red-500  "
    >
      {/* Hero Section */}
      <MainPage />

      {/* CTA Section */}
      

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 pb-"
      >
        <ServicesPopup />
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="flex justify-center mt-8"
        >

        <About />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
