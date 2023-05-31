import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface ScholarshipData {
    // Define the properties of your scholarship data here
  }
  

export const ApiContext = createContext<ScholarshipData[]>([]);
export const ApiDataProvider: React.FC = ({ children }:any) => {
    const [apidata, setApiData] = useState<ScholarshipData[]>([]);
  
    useEffect(() => {
      const fetchApiData = async () => {
        try {
          const accessToken = sessionStorage.getItem('token');
          const response = await axios.get('http://localhost:9000/scholarship', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setApiData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchApiData();
    }, []);
  
    console.log("apidata", apidata);
  
    return (
      <ApiContext.Provider value={apidata}>
        {children}
      </ApiContext.Provider>
    );
  };
  