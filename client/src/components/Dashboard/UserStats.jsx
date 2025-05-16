import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserStats = () => {
  const [userStats, setUserStats] = useState({
    flashcardsReviewed: 0,
    dictionarySize: 0,
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user-stats', {
          headers: { 'x-auth-token': token }
        });
        setUserStats(response.data);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchUserStats();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-4">User Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="font-bold">Flashcards Reviewed</h3>
          <p>{userStats.flashcardsReviewed}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="font-bold">Dictionary Size</h3>
          <p>{userStats.dictionarySize}</p>
        </div>
      </div>
      <Link to="/add-flashcard" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Some Flashcards
      </Link>
    </div>
  );
};

export default UserStats;
