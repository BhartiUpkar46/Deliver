import React, { useContext, useState } from 'react';
import { Bookings } from '../../assets/data.js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App.jsx';
import { MyAppContext } from '../context/ContextProvider.jsx';

const TravelPage = () => {
  
  const navigate = useNavigate();
  const currentUserState = useContext(AuthContext);
 
  const [showList, setShowList] = useState([]);
  const [canShow, setCanShow] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    travelby: 'Train',
    pickup: '',
    drop: '',
    date: '',
    email: ''
  });
  
  
  function handleAccept(data) {
    if (!currentUserState.currentUser) {
      navigate('/login');
      return;
    }
    console.log('sjskbs,')
    navigate('verifytraveldetails', {
      state: {
        from:location.pathname,
        data:data
        
      }
    });
    
  }

  function Cards({
    id,
    sender_username,
    receiver_username,
    pickup,
    drop,
    receiver_email,
    sender_email,
    value_of_good,
    weight_of_good,
    commision,
    luggage_id
  }) {
    const sendData = {
      traveller_username: formData.username,
      traveller_email: formData.email,
      receiver_username: receiver_username,
      sender_username: sender_username,
      travelby: formData.travelby,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      traveller_email: formData.email,
      receiver_email,
      sender_email,
      value_of_good,
      weight_of_good,
      commision,
      luggage_id
    };

    return (
      <div className="w-72 h-auto bg-gradient-to-br from-gray-100 via-blue-50 to-gray-500 rounded-xl shadow-lg p-4 m-2 flex flex-col justify-between text-center">
        <div className="mb-2">
          <p className="text-xs text-gray-500">ID: {id}</p>
          <p className="text-lg font-semibold text-blue-900">{sender_username}</p>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-700">From: <span className="font-medium text-blue-800">{pickup}</span></p>
          <p className="text-sm text-gray-700">To: <span className="font-medium text-blue-800">{drop}</span></p>
        </div>
        <div className='gap-6'>
          <p className="text-sm font-semibold text-green-700 bg-green-100 inline-block px-2 py-1 rounded">
            Commission: ₹{commision}
          </p>
          <button
            onClick={() => handleAccept(sendData)}
            className="text-sm ml-4 font-semibold text-green-700 bg-green-100 inline-block px-2 py-1 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key] === '') {
        setError(`Fill all details ${key}`);
        return;
      }
    }

    if (new Date(formData.date) <= new Date()) {
      setError('Choose a correct date in the future');
      return;
    }

    setError('');
    await findCustomers();
    setCanShow(true);
  }

  function findCustomers() {
    const matched = Bookings.filter(element => {
      return element.pickup === formData.pickup && element.drop === formData.drop;
    });

    const simplified = matched.map(({
      username,
      pickup,
      drop,
      receiver_email,
      sender_email,
      value_of_good,
      weight_of_good,
      commision,
      receiver_username,
      luggage_id
    }) => ({
      sender_username: username,
      receiver_username,
      pickup,
      drop,
      receiver_email,
      sender_email,
      value_of_good,
      weight_of_good,
      commision,
      luggage_id
    }));

    setShowList(simplified);
  }

  return (
    <div className="flex flex-col items-center py-6 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-6">
        Check an Opportunity According to Your Travel Plan
      </h1>

      <div className="w-full max-w-xl bg-gradient-to-br from-slate-500 via-slate-300 to-white shadow-lg rounded-lg p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold text-slate-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="username" className="block font-semibold text-slate-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="travelby" className="block font-semibold text-slate-600 mb-1">Travel By</label>
            <select
              name="travelby"
              value={formData.travelby}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="Train">Train</option>
              <option value="AirWays">AirWays</option>
              <option value="WaterWays">WaterWays</option>
              <option value="Roadways">Roadways</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickup" className="block font-semibold text-slate-600 mb-1">City From</label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="drop" className="block font-semibold text-slate-600 mb-1">City To</label>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block font-semibold text-slate-600 mb-1">Date of Travel</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <p className="text-red-500 font-sans">{error}</p>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Find
            </button>
          </div>
        </form>
      </div>

      <div>
        {canShow ? (
          <>
            <div className="text-center mt-6">
              <h1 className="text-xl font-semibold text-gray-700 mb-4">
                There are {showList.length} opportunities
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {showList.map((element, index) => (
                <Cards
                  key={index}
                  id={index + 1}
                  {...element}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TravelPage;
