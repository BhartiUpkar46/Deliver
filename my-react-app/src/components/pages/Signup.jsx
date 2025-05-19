import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { motion } from 'framer-motion';

const Signup = () => {
  const currentUserState = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, email, password, password2 } = formData;

    if (!username || !email || !password || !password2) {
      setError('Set all details');
      return;
    }

    if (password !== password2) {
      setError('Passwords should be same');
      return;
    }

    setError('');
    currentUserState.setCurrentUser({ username, email, password });
    localStorage.setItem("user", JSON.stringify(userData));
    navigate('/', { replace: true });
  }

  if (currentUserState.currentUser) {
    return (
      <motion.h1
        className="text-3xl font-bold text-center text-green-600 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ✅ Already Signed Up
      </motion.h1>
    );
  }

  return (
    <motion.div
      className='max-w-md mx-auto p-6 mt-4 bg-red-100 shadow-lg rounded-md'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="emailSignup"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password2" className="block text-sm font-medium">Retype Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.password2}
            onChange={handleChange}
          />
        </div>

        {error && (
          <motion.p
            className="text-red-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
          >
            Sign Up
          </motion.button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
