import React, { useState, useEffect, useContext } from 'react';
import { Bookings } from '../../assets/data';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useRef } from 'react';
const Verifytraveldetails = () => {
  
  const location =useLocation();
  let receivedData=useRef(location.state||{})
  const [gotUser,setGotUser]=useState(false)
  useEffect(() => {
  if (Object.keys(receivedData.current).length !== 0) {
    setGotUser(true);
  }
}, []);

  console.log(receivedData,gotUser)
  const[tktUpload,setktUpload]=useState(false);
  console.log(receivedData.length,"aakmanm")
  const navigate = useNavigate();
  const currentUserState = useContext(AuthContext);
  
  const [addTravel, setAddTravel] = useState(false);
  const [formData, setFormData] = useState({
    travelby: 'Train',
    username:'',
    pickup:'',
    drop: '',
    date: '',

    ticketNumber: '',
    vehicleNumber: '',
   });
   let datatemp;
   useEffect(()=>{
    if(gotUser==1){

      datatemp={
        travelby: receivedData.current?.data.travelby,
        username: receivedData.current?.data.traveller_username||'',
        pickup: receivedData.current?.data.pickup||'',
        drop: receivedData.current?.data.pickup||'',
        date: receivedData.current?.data.date||'',
        
        ticketNumber: '',
        vehicleNumber: '',
      }
    }
   },[])
   useEffect(() => {
  if (gotUser && receivedData.current?.data) {
    const data = receivedData.current.data;
    setFormData({
      travelby: data.travelby || 'Train',
      username: data.traveller_username || '',
      pickup: data.pickup || '',
      drop: data.drop || '',
      date: data.date || '',
      ticketNumber: '',
      vehicleNumber: '',
    });
  }
}, [gotUser]);



  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentUserState.currentUser == null) {
      navigate('/login',{replace: true ,state:{ from:location.pathname}});
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  
  const handleSubmit1 = (e) => {
    e.preventDefault();

    // Basic field check
    for (let key of ['username', 'pickup', 'drop', 'date']) {
      if (formData[key].trim() === '') {
        setMessage('❌ Please fill in all fields.');
        return;
      }
    }

    // Additional check based on travel type
    if (
      ['AirWays', 'Train', 'WaterWays'].includes(formData.travelby) &&
      !formData.ticketNumber.trim()
    ) {
      setMessage('❌ Ticket number required.');
      return;
    }

    if (formData.travelby === 'RoadWays' && !formData.vehicleNumber.trim()) {
      setMessage('❌ Vehicle number required.');
      return;
    }

    const alreadyHave = checkDetailsInDB();
    if (alreadyHave) {
      setMessage('⚠️ These travel details are already saved.');
      return;
    }

    console.log('Travel Details Submitted:', formData);
    setMessage('✅ Travel details saved successfully.');
    const sendData=  formData
    console.log(sendData);
    
    
    setTimeout(() => navigate('paymentportal',{
      state:{
        data:sendData
      }
    }), 1000);

  };

  const checkDetailsInDB = () => {
    return Bookings.some(element =>
      element.pickup === formData.pickup &&
      element.drop === formData.drop &&
      element.date === formData.date &&
      element.username === formData.username
    );
  };
  function handleClick(){
    if(gotUser===false){
      navigate('/addtraveldetails')
    }
    else{
      setAddTravel(true)
    }
  }

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Add Travel Button */}
        {addTravel === false && (
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-medium"
            >
             {gotUser?<>Verify Travel Details</>:<>Not yet Got User Then Save data with us</>}
            </button>
          </div>
        )}

        {/* Travel Details Form */}
        {addTravel ===true && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-700 text-center mb-6">
              Travel Details Verification
            </h2>
            <form onSubmit={handleSubmit1} className="space-y-5">
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
            <h3 className="text-lg font-semibold mb-4">Upload Ticket</h3>
            
              <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Image or Vechile Image </label>
              <input type="file" accept="image/*" className="mb-4" required />
              
               <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                {gotUser?<>Proceed</>:<>Save Data with Us</>}
              </button>
          </div>
           </form>
          </div>
          
        )}

        {/* Ticket Upload Section if addTravel == 2 */}
         
          
        

        {/* Travel Policy Section */}
        
      </div>
    </div>
  );
};

export default Verifytraveldetails;
