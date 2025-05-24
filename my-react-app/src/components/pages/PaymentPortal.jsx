import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PaymentPortal = () => {
  const currentUserState = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const receivedData = location.state?.data || {};
  console.log('Hellopppp',receivedData)
  const [cardNumber, setCardNumber] = useState('');
  const [cVV, setCVV] = useState('');
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUserState?.currentUser) {
      navigate('/login', { replace: true });
    }
  }, []);

  const totalAmount = receivedData.amount || 500; // Default amount if not passed

  const handlePayment = () => {
    if (!cardNumber.trim()) {
      setError('⚠️ Please enter your card number');
      return;
    }
    setError('');
    // Simulate payment

    setPaid(true);

    console.log("Payment successful. Card:", cardNumber);
    // You can also navigate or make backend API call here.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Payment Portal</h2>

        <p className="text-lg font-medium text-gray-700 mb-4">Total Amount to Pay: <span className="text-green-600">₹{totalAmount}</span></p>

        {!paid ? (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              value={cVV}
              onChange={(e) => setCVV(e.target.value)}
              placeholder="CVV"
              maxLength={3}
              className="w-1/3 px-4 py-2  border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400"
            />

            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

            <button
              onClick={handlePayment}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Pay ₹{totalAmount}
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-semibold text-lg mb-4">✅ Payment Successful!</p>
            <button
              onClick={() => navigate('/',{replace:true})}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Go to Home
            </button>
          </div>
        )}
            <div>
              <div className='pt-3  '>
                <p className=' p-4 border-spacing-1 rounded-3xl font-medium bg-slate-300'>It is only money taken as collateral when the luggage will be at its place the money will be reimbursed with commision</p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default PaymentPortal;
