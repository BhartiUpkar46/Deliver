import React from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const PersonalProfile = () => {
  const navigate=useNavigate()
  const currentUser = useContext(AuthContext)
  const setCurrentUser = useContext(AuthContext).setCurrentUser


  function handleEdit() {
    navigate('editprofile')
    
  }
  return (
    <div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center"
      >

        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover shadow-md mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{currentUser.username}</h2>
        <p className="text-gray-500 mb-4">{currentUser.email}</p>

        <div className="mt-4">
          <button onClick={handleEdit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default PersonalProfile