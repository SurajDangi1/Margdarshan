import React from 'react';

const Logout: React.FC = () => {
  const logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/login';
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
