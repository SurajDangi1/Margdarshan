import React from 'react';

const Logout: React.FC = () => {
    const logout = () => {
        // Clear user data or tokens (e.g., remove from local storage)
        sessionStorage.removeItem('token');
        // Redirect to the login page or perform any other action
        window.location.href = '/login';
      };     
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
