import React, { useState } from 'react';
import { Bookings } from '../../assets/data';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import { useEffect } from 'react';

const Verifytraveldetails = () => {
  const navigate=useNavigate();
  const currentUserState=useContext(AuthContext);
  
  const [addTravel, setAddTravel] = useState(0);
 useEffect(() => {
  if (currentUserState.currentUser == null) {
    navigate('/login', { replace: true });
  }
}, []);
  const [formData, setFormData] = useState({
    username: '',
    travelby: 'WaterWays',
    pickup: '',
    drop: '',
    date: '',
  });
  const [message, setMessage] = useState('');
  // const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key].trim() === '') {
        setMessage('❌ Please fill in all fields.');
        return;
      }
    }

    const alreadyHave = checkDetailsInDB();
    if (alreadyHave) {
      setMessage('⚠️ These travel details are already saved.');
      return;
    }

    console.log('Travel Details Submitted:', formData);
    
    setTimeout(() => setAddTravel(2), 1000);
  };

  const checkDetailsInDB = () => {
    return Bookings.some(element =>
      element.pickup === formData.pickup &&
      element.drop === formData.drop &&
      element.date === formData.date &&
      element.username === formData.username
    );
  };

  const Cards = ({ name = "John Doe", review = "Great experience, smooth process!" }) => (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-4 mb-4 gap-4">
      <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="user" className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600 text-sm">{review}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Add Travel Button */}
        {(addTravel===0) && (
          <div className="text-center">
            <button
              onClick={()=>setAddTravel(1)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-medium"
            >
              ➕ Add Travel Details
            </button>
          </div>
        )}

        {/* Form */}
        {(addTravel===1) && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            {console.log(addTravel)}
            <h2 className="text-2xl font-bold text-slate-700 text-center mb-6">
              Travel Details Verification
            </h2>
            <form onSubmit={handleSubmit1} className="space-y-5">
              {[
                { label: "Username", name: "username", type: "text" },
                { label: "Pickup Location", name: "pickup", type: "text" },
                { label: "Drop Location", name: "drop", type: "text" },
                { label: "Date of Travel", name: "date", type: "date" }
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel By</label>
                <select
                  name="travelby"
                  value={formData.travelby}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                >
                  <option value="WaterWays">WaterWays</option>
                  <option value="Train">Train</option>
                  <option value="AirWays">Airways</option>
                  <option value="RoadWays">Roadways</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Save With Us
              </button>

              {message && <p className="text-center text-sm font-medium text-green-600 mt-2">{message}</p>}
            </form>
          </div>
        )}
        {(addTravel===2)&&(<>
        {(formData.travelby==='WaterWays'||formData.travelby==='AirWays'||formDaata.travelby==='Train')&&(<>
        <form action={handleSubmit2}>
          <label htmlFor="">Ticket Image</label>
          <input type="image"  />
        </form>
        </>)}
        
        
        </>)}

        {/* Travel Policy Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Our Travel Partner Policy</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We believe in safe, transparent, and comfortable journeys. Our travel partner policy ensures that each
            registered traveler shares verified details and commits to safety and respect while traveling with co-passengers.
            Only verified entries are allowed in our system to maintain trust and integrity. Join us in building a safe travel network.
          </p>

          {/* Reviews */}
          <h3 className="text-lg font-semibold text-slate-600 mb-3">Trusted Reviews</h3>
          {[...Array(5)].map((_, i) => (
            <Cards key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Verifytraveldetails;
