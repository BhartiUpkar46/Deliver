import React, { useContext } from 'react';
import { AuthContext } from '../../App';



const Profile = () => {
  const currentUserState = useContext(AuthContext);
  const ProfileCard = ({ title, from, to, date, payment }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold text-blue-600">{title}</p>
        <p className="text-sm text-gray-600">Date: {date}</p>
        <p className="text-sm">From: <strong>{from}</strong> → To: <strong>{to}</strong></p>
        <p className="text-sm text-green-700">Payment: ₹{payment}</p>
      </div>
    );
  };
  
  const currentUser = currentUserState?.currentUser || null;

  if (!currentUser) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        No user is logged in.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{currentUser.username}</h2>
          <p className="text-gray-500 mb-4">{currentUser.email}</p>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Contributions Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Previous Contributions</h3>
          <ProfileCard
            title="Type: Luggage/Travel"
            from="Hyderabad"
            to="Bangalore"
            date="2025-04-10"
            payment={500}
          />
          <ProfileCard
            title="Type: Electronics"
            from="Delhi"
            to="Mumbai"
            date="2025-03-28"
            payment={750}
          />
          <ProfileCard
            title="Type: Food Delivery"
            from="Pune"
            to="Nagpur"
            date="2025-02-15"
            payment={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
