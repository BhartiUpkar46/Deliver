import React, { createContext, useState, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import MainPage from './components/pages/MainPage';
import Signup from './components/pages/Signup';
import NoPage from './components/pages/NoPage';
import Home from './components/pages/Home';
import TravelPage from './components/pages/TravelPage';
import Verifytraveldetails from './components/pages/verifytraveldetails';
import Profile from './components/pages/Profile';
import ActualCustomer from './components/pages/ActualCustomer';
import Careers from './components/pages/Careers';
import ContextProvider, { MyAppContext } from './components/context/ContextProvider';
import PaymentPortal from './components/pages/PaymentPortal';
import AddTravelDetails from './components/pages/AddTravelDetails';
import EditProfile from './components/pages/EditProfile';
// Contexts
import { useEffect } from 'react';

const ThemeContext = createContext('light');
const AuthContext = createContext(null);
const NotificationContext = createContext(false);
const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  const [notification, setNotification] = useState(false);
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    setCurrentUser(user);
  }
}, []);
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <NotificationContext.Provider value={{ notification, setNotification }}>
          <ContextProvider>
            <Navbar />

            <div className='flex-grow'>
              <Routes>

                <Route path='addtraveldetails' element={<AddTravelDetails />} />
                <Route path='/travelpage/verifytraveldetails/paymentportal' element={<PaymentPortal />} />
                <Route path='/' element={<Home />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/actualcustomer' element={<ActualCustomer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/editprofile' element={<EditProfile />} />

                <Route path='/signup' element={<Signup />} />
                <Route path='/travelpage' element={<TravelPage />} />
                <Route path='/travelpage/verifytraveldetails' element={<Verifytraveldetails />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </div>

            {/* Use DataCard below */}


            <Footer />
          </ContextProvider>
        </NotificationContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

// 🧩 Wrapper Component to use context


export default App;
export { ThemeContext, NotificationContext, AuthContext };
