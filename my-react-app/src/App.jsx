import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import NoPage from './components/pages/NoPage';
import Home from './components/pages/Home';
import TravelPage from './components/pages/TravelPage';
import Verifytraveldetails from './components/pages/verifytraveldetails';
import Profile from './components/pages/Profile';
import ActualCustomer from './components/pages/ActualCustomer';
import Careers from './components/pages/Careers';
import ContextProvider from './components/context/ContextProvider';
import PaymentPortal from './components/pages/PaymentPortal';
import AddTravelDetails from './components/pages/AddTravelDetails';
import EditProfile from './components/pages/EditProfile';
import { AuthContext } from './components/context/AuthContext'; 

const ThemeContext = React.createContext('light');
const NotificationContext = React.createContext(true);

const App = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <NotificationContext.Provider value={{ notification, setNotification }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <ContextProvider>
              <Navbar />
              <div className="flex-grow bg-red-200">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/editprofile" element={<EditProfile />} />
                  <Route path="/travelpage" element={<TravelPage />} />
                  <Route path="/travelpage/verifytraveldetails" element={<Verifytraveldetails />} />
                  <Route path="/travelpage/verifytraveldetails/paymentportal" element={<PaymentPortal />} />
                  <Route path="/addtraveldetails" element={<AddTravelDetails />} />
                  <Route path="/actualcustomer" element={<ActualCustomer />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </div>
              <Footer />
            </ContextProvider>
          </ThemeContext.Provider>
        </NotificationContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export { NotificationContext, ThemeContext };
export default App;
