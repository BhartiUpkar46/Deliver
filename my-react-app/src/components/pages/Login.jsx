import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { useLocation } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const currentUserState = useContext(AuthContext);
  const from=location.state?.from||'/';
  console.log('Hero we are' ,from);
  
  // States for form inputs
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      setError('Please fill in all fields.');
      return;
    }

    currentUserState.setCurrentUser({
      email:email,
      password:password,
      username:username
    });

    setError('');
    navigate(from,{replace:true})

    console.log(currentUserState);
  };

  return (
    <div className="max-w-md mt-14 mx-auto p-6 bg-neutral-300 shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input 
            type="text"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-yellow-50"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-yellow-50"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-yellow-50"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
