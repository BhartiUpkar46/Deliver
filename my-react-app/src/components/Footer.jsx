import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const footerStyle = isDark
    ? 'bg-gray-900 text-white'
    : 'bg-gray-200 text-gray-800';

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={`w-full py-10 mt-auto ${footerStyle} rounded-t-2xl shadow-inner`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-1">Supportify</h2>
          <p className="text-sm">Helping you travel smarter.</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="hover:underline hover:text-blue-500">Home</a>
          <a href="/about" className="hover:underline hover:text-blue-500">About</a>
          <a href="/contact" className="hover:underline hover:text-blue-500">Contact</a>
          <a href="/services" className="hover:underline hover:text-blue-500">Services</a>
        </nav>

        {/* Theme Info */}
        <div className="text-center md:text-right text-sm">
          <p>Theme: <span className="font-medium capitalize">{theme}</span></p>
          <p className="text-xs mt-1">© {new Date().getFullYear()} Supportify. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
