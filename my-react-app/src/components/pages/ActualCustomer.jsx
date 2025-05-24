import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserDetails } from '../../assets/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
  }),
};

const ActualCustomer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    st_date: '',
    en_date: '',
    product_value: '',
    product_weight: '',
    product_image: '',
    receiver_username: '',
    receiver_email: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const currentUserState = useContext(AuthContext);
  const currentUser = currentUserState.currentUser;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isValidReceiver = UserDetails.some(
        (u) =>
          u.email === formData.receiver_email &&
          u.username === formData.receiver_username
      );

      if (isValidReceiver) {
        setSuccessMessage('Shipping details submitted successfully!');
        console.log('Submitted:', formData);

        setFormData({
          pickup: '',
          drop: '',
          st_date: '',
          en_date: '',
          product_value: '',
          product_weight: '',
          product_image: '',
          receiver_username: '',
          receiver_email: '',
        });
      } else {
        alert('Invalid receiver credentials. Please check the username and email.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const roleDescriptions = [
    'Ensure item is packed securely.',
    'Provide accurate pickup and drop addresses.',
    'Be available for communication during delivery.',
    'Confirm item receipt on time.',
  ];

  const formFields = [
    ['pickup', 'Pickup Location'],
    ['drop', 'Drop Location'],
    ['st_date', 'Start Date'],
    ['en_date', 'End Date'],
    ['product_weight', 'Product Weight (in kg)'],
    ['product_value', 'Product Value'],
    ['product_image', 'Product Image'],
    ['receiver_username', 'Receiver Username'],
    ['receiver_email', 'Receiver Email'],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Role of The Customer</h1>
      <p className="text-gray-600 mb-4">
        As a customer, you are expected to ensure smooth and secure shipping by following these key responsibilities:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {roleDescriptions.map((desc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
          >
            <h3 className="text-blue-700 font-semibold mb-2">Role {index + 1}</h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </div>

      {!currentUser ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => navigate('/login', { state: { from: currentPath } })}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
            <p className="text-sm">If you already have an account</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Signup
            </button>
            <p className="text-sm">Join us now</p>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Shipping Details</h2>

            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-green-100 text-green-800 rounded shadow"
                >
                  {successMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map(([name, label], index) => (
                <motion.div
                  key={name}
                  custom={index}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label htmlFor={name} className="block text-sm font-medium mb-1 text-gray-700">
                    {label}
                  </label>
                  <input
                    type={
                      name.includes('date')
                        ? 'date'
                        : name.includes('email')
                        ? 'email'
                        : name.includes('image')
                        ? 'file'
                        : name.includes('value') || name.includes('weight')
                        ? 'number'
                        : 'text'
                    }
                    id={name}
                    name={name}
                    onChange={handleChange}
                    {...(name !== 'product_image' && {
                      value: formData[name],
                    })}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:ring-blue-200 outline-none"
                    required
                    {...((name === 'product_weight' || name === 'product_value') && {
                      min: 0,
                      step: 0.1,
                    })}
                  />
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit Shipping Details
              </motion.button>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default ActualCustomer;

