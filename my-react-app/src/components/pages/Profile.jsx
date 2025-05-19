import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../App';
import { MyAppContext } from '../context/ContextProvider';
import PersonalProfile from './PersonalProfile';

const Profile = () => {
 
  const currentUserState = useContext(AuthContext);
  const { DataCard } = useContext(MyAppContext);

  const CardWrapper = (props) => (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mb-4"
    >
      <DataCard {...props} />
    </motion.div>
  );

  const currentUser = currentUserState?.currentUser || null;

  const [formData, setFormData] = useState({
    userType: '',
    status: '',
    from: '',
    to: '',
    st_date: '',
    en_date: '',
    paystart: '',
    payend: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Filter applied with:', formData);
    // Add your filtering logic here
  };


  if (!currentUser) {
    console.log('jbsbkj ')
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        No user is logged in.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gray-100 py-10 px-4"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <PersonalProfile  />

        {/* Contributions & Filter Section */}
        {<motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contributions</h3>
          <motion.form
            onSubmit={onSubmit}
            className="space-y-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* User Type */}
            <div>
              <label htmlFor="userType" className="block font-medium mb-1">User Type</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
              >
                <option value="">Select User Type</option>
                <option value="Traveler">Traveler</option>
                <option value="Shipper">Shipper</option>
                <option value="Receiver">Receiver</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block font-medium mb-1">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            {/* From and To */}
            <div>
              <label htmlFor="from" className="block font-medium mb-1">From</label>
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                placeholder="Pickup location"
              />
            </div>

            <div>
              <label htmlFor="to" className="block font-medium mb-1">To</label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                placeholder="Drop location"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="st_date" className="block font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  id="st_date"
                  name="st_date"
                  value={formData.st_date}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>

              <div>
                <label htmlFor="en_date" className="block font-medium mb-1">End Date</label>
                <input
                  type="date"
                  id="en_date"
                  name="en_date"
                  value={formData.en_date}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>

            {/* Payment Range */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-medium mb-1">Payment Min</label>
                <input
                  type="number"
                  name="paystart"
                  value={formData.paystart}
                  onChange={handleChange}
                  placeholder="Min"
                  className="w-full border rounded px-2 py-1"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Payment Max</label>
                <input
                  type="number"
                  name="payend"
                  value={formData.payend}
                  onChange={handleChange}
                  placeholder="Max"
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Filter
            </button>
          </motion.form>

          {/* Contributions List */}
          <div className="mt-6">
            <CardWrapper
              status="Delivered"
              from="Hyderabad"
              to="Bangalore"
              st_date="2025-04-10"
              en_date="2025-04-12"
              payment={500}
            />
            <CardWrapper
              status="Pending"
              from="Delhi"
              to="Mumbai"
              st_date="2025-03-28"
              en_date="2025-03-30"
              payment={750}
            />
            <CardWrapper
              status="Ongoing"
              from="Pune"
              to="Nagpur"
              st_date="2025-02-15"
              en_date="2025-02-18"
              payment={300}
            />
          </div>
        </motion.div>}
      </div>
    </motion.div>
  );
};

export default Profile;
