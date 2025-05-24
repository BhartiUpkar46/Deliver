import React, { useEffect, useState, useContext, use } from 'react';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import image from '../../assets/Founder1.png'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const EditProfile = () => {
  const currUser = useContext(AuthContext).currentUser;
  const location = useLocation();
  const currentPath = location.pathname
  const [formData, setFormData] = useState({
    name:currUser?.currentuser.username||'',
    email:currUser.currentUser.email||''
  })
  const navigate = useNavigate()
  const [file, setFile] = useState((null));
  // const [showAlert, setShowAlert] = useState(currUser?false:true);
  function onSubmit() {

  }
  const handleFileChange = (e) => {
    const file2 = e.target.files[0];
    if (file) {
      console.log('skbjsjk k')
      setFile(file2)
      console.log(file2);
      console.log(file);
    }

  };


  // console.log(showAlert)
  const username = currUser?.username
  return (
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Friendly Alert */}
      {!currUser && (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-lg">
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
              <span className="text-2xl resize-y- ">⚠️</span>
              <p className="font-medium">No user signed in.</p>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={() => {
                navigate('/login', { state: { from: currentPath } })
              }} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Login
              </button>
              <button onClick={() => {
                navigate('/signup', { state: { from: currentPath } })
              }} className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                Sign Up
              </button>
              <button onClick={() => navigate('/')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400 transition">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {currUser &&
        <div>
          <div className="flex flex-col gap-20">
            <form onSubmit={onSubmit} className='flex flex-col'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-600 h-64 w-64 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-3"
              >
                <img
                  className="rounded-lg w-20 h-20 object-cover"
                  src={image}
                  alt={`${username}'s image`}
                />

                <label className="cursor-pointer bg-white text-blue-600 px-3 py-1 rounded-full font-medium hover:bg-blue-100">
                  Edit Picture
                  <input
                    type="file"
                    name="file"

                    hidden
                    onChange={handleFileChange}
                  />
                </label>

              </motion.div>
              <motion.div>

                <div>
                  <label htmlFor="name">Name</label>
                <input type="text" name='name'value={formData.name} onChange={(e)=>{
                  setFormData((prev)=>({
                    ...prev,[e.target.name]:e.target.value,})
                  )
                }}  />
                </div>
               
                  <div>

                    <label htmlFor="email">Email </label>
                  <input type="email" name="email" value={formData.email} onChange={(e)=>{
                    setFormData((prev)=>{
                      ({...prev,[e.target.name]:e.target.value})
                    })
                  }} />
                  </div>
              </motion.div>
            </form>
          </div>

        </div>}
    </div>
  );
};

export default EditProfile;
