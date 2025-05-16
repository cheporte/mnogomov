import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentLanguages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchCurrentLanguages = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/current-languages', {
          headers: { 'x-auth-token': token }
        });
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching current languages:', error);
      }
    };

    fetchCurrentLanguages();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-4">Current Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((language) => (
          <div key={language._id} className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold">{language.name}</h3>
            <p>Progress: {language.progress || 0}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentLanguages;
