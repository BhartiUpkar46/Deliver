import React from 'react';
import MainPage from './MainPage';
import ServicesPopup from '../ServicesPopup';
import About from './About';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <MainPage />

      <div className="mx-52 mt-6 rounded-3xl py-6 text-center text-white text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md hover:scale-105 transition-transform duration-300">
        <Link to="/travelpage">Check Opportunity To Earn</Link>
      </div>

      <ServicesPopup />
      <About />
    </div>
  );
};

export default Home;
