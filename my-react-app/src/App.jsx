import React, { createContext, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import MainPage from './components/pages/MainPage';
import Signup from './components/pages/Signup';
import NoPage from './components/pages/NoPage';
import Home from './components/pages/Home';
import { useNavigate } from 'react-router-dom';
import TravelPage from './components/pages/TravelPage';
import Verifytraveldetails from './components/pages/verifytraveldetails';
import Profile from './components/pages/Profile';
import ActualCustomer from './components/pages/ActualCustomer';
import Careers from './components/pages/Careers';
import { DataCard } from './components/context/ContextProvider';
// Create the contexts
const ThemeContext = createContext('light');
const AuthContext = createContext(null);
const NotificationContext=createContext(false);
const App = () => {
  const navigate=useNavigate()
  const [notification,setNotification]=useState(false);
  const [theme, setTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState({username:'Upkar'});
  const [showMainPage, setShowMainPage] = useState(false); // State for delayed rendering


  return (
    
        <div className="flex flex-col min-h-screen bg-slate-200">
         <AuthContext.Provider value={{currentUser,setCurrentUser}}>
          <NotificationContext.Provider value={{notification,setNotification}}>

          <Navbar />

          
          <div className='flex-grow'>
            <Routes>
                <Route path='/' element={<Home/>}/>
              <Route path='/careers' element={<Careers/>} />
                <Route path={'/actualcustomer'} element={<ActualCustomer/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='profile' element={<Profile/>} />
                {/* {(currentUser==null)?<Route path={'signup'} element={<Signup/>} />:navigate('/')} */}
                <Route path='signup' element={<Signup/>}/>
                <Route path='/travelpage' element={<TravelPage/>}/>
                <Route path='/verifytraveldetails' element={<Verifytraveldetails/>}/>
                
              <Route path="*" element={<NoPage />}/>

            </Routes>
        

          </div>

          <Footer  />
         
          </NotificationContext.Provider>
         </AuthContext.Provider>
          
          
        </div>
      
  );
};

export default App;
export { ThemeContext, NotificationContext, AuthContext };
