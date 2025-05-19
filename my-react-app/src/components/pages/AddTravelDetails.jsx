

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const AddTravelDetails = () => {
    const Cards = ({ name = "John Doe", review = "Great experience, smooth process!" }) => (
        <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-4 mb-4 gap-4">
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="user" className="w-12 h-12 rounded-full" />
            <div>
                <h4 className="font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-600 text-sm">{review}</p>
            </div>
        </div>
    );

    const [addTravel, setAddTravel] = useState(false);
    const [formData, setFormData] = useState({
        travelby: '',
        username: '',
        pickup: '',
        drop: '',
        date: '',

        ticketNumber: '',
        vehicleNumber: '',
    })
    const [message, setaMesaage] = useState('')
   
    const [file, setFile] = useState(null);

    // In input

    function handleSubmit(e) {
        //check in DB
        e.preventDefault();

        
        setAddTravel(!addTravel);
      //save data in DB

        return;

    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
        <div>
            {addTravel === false && (
                <div className="text-center py-4">
                    <button onClick={()=>setAddTravel(true)}
                        className="bg-gradient-to-r from-slate-300 to-gray-950 text-white px-6 py-3 rounded-lg hover:brightness-110 transition text-lg font-medium"
                    >
                        Verify and Add Travel Details 
                    </button>
                </div>
            )}

            {addTravel === true && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-700 text-center mb-6">
                        Travel Details Verification
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {[{ label: "Username", name: "username", type: "text" },
                        { label: "Pickup Location", name: "pickup", type: "text" },
                        { label: "Drop Location", name: "drop", type: "text" },
                        { label: "Date of Travel", name: "date", type: "date" }].map(({ label, name, type }) => (
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

                        {/* Travel By Selection */}
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
                                <option value="AirWays">AirWays</option>
                                <option value="RoadWays">RoadWays</option>
                            </select>
                        </div>

                        {/* Conditional Field: Ticket Number */}
                        {['AirWays', 'Train', 'WaterWays'].includes(formData.travelby) && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Number</label>
                                <input
                                    type="text"
                                    name="ticketNumber"
                                    value={formData.ticketNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter ticket number"
                                />
                            </div>
                        )}

                        {/* Conditional Field: Vehicle Number */}
                        {formData.travelby === 'RoadWays' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number</label>
                                <input
                                    type="text"
                                    name="vehicleNumber"
                                    value={formData.vehicleNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                    placeholder="e.g., BR01AB1234"
                                />
                            </div>

                        )}


                        {message && <p className="text-center text-sm font-medium text-green-600 mt-2">{message}</p>}

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-lg font-semibold mb-4">Upload Ticket (Optional)</h3>

                            <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Image or Vechile Image </label>
                            <input
                                type="file"
                                accept="image/*"
                                className="mb-4"
                                onChange={(e) => setFile(e.target.files[0])}
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save Data with Us</button>
                        </div>
                    </form>
                </div>

            )}

            { <div className="text-center p-4">
                <Link
                    to='/'
                    className="bg-gradient-to-r to-slate-300 from-gray-950  px-6 py-3 rounded-lg transition text-lg font-medium"
                >
                    Go TO Home Page
                </Link>
            </div>}
            <div className="bg-white rounded-xl shadow-lg p-8 m-10">
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
    )
}

export default AddTravelDetails