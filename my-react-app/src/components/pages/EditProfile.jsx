import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/Founder1.png'
const EditProfile = () => {
  const navigate = useNavigate();
  const currUser = useContext(AuthContext).currentUser;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!currUser) {
      setShowAlert(true);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000); // Navigate after 2 seconds
    }
  }, [currUser, navigate]);
  const username=currUser?.username
  return (
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Friendly Alert */}
      {showAlert && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          ⚠️ No User Signed In. Redirecting to homepage...
        </div>
      )}

      {/* Main Content */}
      <div>
        <div>
            <img src={image} alt={`${username}'s image`} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
