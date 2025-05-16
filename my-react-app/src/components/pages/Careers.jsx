import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';

const deliveryPartners = [
  { name: 'Anita Sharma', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Rahul Mehta', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Priya Desai', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { name: 'Vikram Singh', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
];

const Careers = () => {
  const currentUserState = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    aadhar: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Shipping Partner Info:', formData);
    // TODO: Send data to backend
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Become a Local Shipping Partner</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Help us deliver packages on time. Join our local delivery network and earn by delivering goods in your area.
        </p>
      </section>

      {showForm ? (
        <section className="bg-white p-8 max-w-2xl mx-auto  rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              ['email', 'Email Address', 'email'],
              ['aadhar', 'Aadhar Number', 'text'],
              ['phone', 'Phone Number', 'text'],
              ['city', 'City', 'text'],
              ['state', 'State', 'text'],
              ['country', 'Country', 'text'],
              ['pincode', 'Pin Code', 'text'],
            ].map(([name, label, type]) => (
              <div key={name}>
                <label htmlFor={name} className="block font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </section>
      ) : (
        <div className="bg-white p-8 max-w-2xl mx-auto rounded-2xl shadow text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Your application is in queue. Please wait!</h2>
          <p className="text-gray-600">In the meantime, meet some of our amazing local delivery partners:</p>
        </div>
      )}
          <div className=" mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {deliveryPartners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center p-4 border rounded-lg shadow">
                <img src={partner.image} alt={partner.name} className="h-16 w-16 object-cover rounded-full mb-2" />
                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Careers;