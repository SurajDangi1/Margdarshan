import React from 'react';

const Logout: React.FC = () => {
  const logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
