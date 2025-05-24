import React from 'react';
import { motion } from 'framer-motion';
import Frontimage from '../../assets/Frontimage.png';
import OfferPage from './OfferPage';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <motion.div
      className="min-h-screen m-4 p-4 rounded-3xl shadow-2xl border border-gray-300 bg-gradient-to-b from-red-200 via-red-300 to-red-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mt-10 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to the Main Page
      </motion.h1>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <OfferPage />
      </motion.div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center px-4 md:px-0">
  <motion.img
    src={Frontimage}
    alt="Front Page"
    className="w-full md:w-3/5 rounded-3xl shadow-2xl"
    initial={{ x: '-100vw', opacity: 0 }}       // smoother full left slide-in
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }}
  />
  
  <motion.div
    className="md:w-2/5 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-400"
    initial={{ x: '100vw', opacity: 0 }}        // full right slide-in
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.4 }}
  >
    <h2 className="text-3xl font-extrabold mb-5 text-red-600 tracking-wide">
      We are here to support you
    </h2>
    <p className="text-gray-700 leading-relaxed text-justify">
      Our platform is designed to simplify your journey. Whether you're traveling, working, or connecting with people,
      we aim to offer the best solutions. Experience efficiency, care, and innovation all in one place.
    </p>
    <div className="mt-6">
      <Link
        to="/travelpage"
        className="inline-flex items-center justify-center px-5 py-3 rounded-full shadow-lg bg-gradient-to-r from-blue-700 to-green-700 text-white font-semibold hover:scale-105 transition-transform duration-300"
      >
        Check Opportunity To Earn
      </Link>
    </div>
  </motion.div>
</div>

    </motion.div>
  );
};

export default MainPage;