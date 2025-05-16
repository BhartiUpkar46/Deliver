import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Card = ({ extension, title, description, moreText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`w-full md:w-72 bg-white shadow-md rounded-lg p-4 border transition-all duration-300 
        ${expanded ? 'scale-105 shadow-xl border-blue-400' : 'hover:shadow-lg'}`}
    >
      <Link to={`/${extension}`}><button className="text-lg font-semibold mb-2">{title}</button></Link>
      <p className="text-gray-600 text-sm">{description}</p>

      {expanded && (
        <p className="text-gray-700 text-sm mt-2">
          {moreText}
        </p>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-blue-600 hover:underline"
      >
        {expanded ? 'Show Less' : 'Know More'}
      </button>
    </div>
  );
};

const ServicesPopup = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <Card
          extension="travelpage"
          title="Travelling Partner"
          description="Connect with fellow travelers heading your way and share the journey."
          moreText="Find people you can travel with, split costs, and make the ride more enjoyable and safe."
        />
        <Card
          extension="actualcustomer"
          title="Actual Customer"
          description="Deliver items personally while traveling and earn rewards or cover expenses."
          moreText="Help others by carrying their packages responsibly, and earn while you move."
        />
        <Card
          extension="careers"
          title="Carriers"
          description="Professional delivery service for packages and parcels across locations."
          moreText="Become a trusted carrier and deliver goods swiftly across cities or regions."
        />
      </div>
    </div>
  );
};

export default ServicesPopup;
