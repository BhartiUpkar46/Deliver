import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, PackageCheck, Truck } from 'lucide-react'; // Lucide icons

const Card = ({ extension, title, description, moreText, Icon }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{scale:1.08,transition:{duration:0.1}}}
      className={`w-full md:w-80 bg-white rounded-2xl border p-6 shadow-md transition-all duration-300 
        ${expanded ? 'scale-105 border-blue-400 shadow-xl' : 'hover:shadow-lg'}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-blue-600" size={28} />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      <p className="text-gray-600 text-sm">{description}</p>

      {expanded && (
        <p className="text-gray-700 text-sm mt-2 border-l-4 border-blue-300 pl-3 italic">
          {moreText}
        </p>
      )}

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/${extension}`}
          className="text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Explore
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {expanded ? 'Show Less' : 'Know More'}
        </button>
      </div>
    </motion.div>
  );
};

const ServicesPopup = () => {
  return (
    <motion.div
      className="flex justify-center p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center">
        <Card
          extension="travelpage"
          title="Travelling Partner"
          description="Connect with fellow travelers heading your way and share the journey."
          moreText="Find people to travel with, split expenses, and make the ride safer and more fun."
          Icon={Users}
        />
        <Card
          extension="actualcustomer"
          title="Actual Customer"
          description="Deliver items personally while traveling and earn rewards or cover costs."
          moreText="Help others by carrying their packages responsibly — and earn while you move."
          Icon={PackageCheck}
        />
        <Card
          extension="careers"
          title="Carriers"
          description="Provide professional delivery service across various locations."
          moreText="Become a trusted carrier and transport goods efficiently across cities or regions."
          Icon={Truck}
        />
      </div>
    </motion.div>
  );
};

export default ServicesPopup;
