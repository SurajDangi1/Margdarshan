import React, { useEffect } from 'react';


const Logout: React.FC = () => {
  useEffect(() => {
    const logoutIfTokenRemoved = () => {
      if (!sessionStorage.getItem('token')) {
        logout();
      }
    };

    logoutIfTokenRemoved();
  }, []);
                                                                             
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
