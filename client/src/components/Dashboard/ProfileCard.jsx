import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Mail, BookOpen, Plus } from 'lucide-react';

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { 'x-auth-token': token }
        });
        setUser(userResponse.data);

        const languagesResponse = await axios.get('http://localhost:5000/api/users/languages');
        setLanguages(languagesResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleAddLanguage = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/users/languages', { languageId: newLanguage }, {
        headers: { 'x-auth-token': token }
      });
      // Refresh user data after adding a new language
      const userResponse = await axios.get('http://localhost:5000/api/users/profile', {
        headers: { 'x-auth-token': token }
      });
      setUser(userResponse.data);
      setNewLanguage('');
    } catch (error) {
      console.error('Error adding language:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded shadow mb-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <User className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-gray-600 flex items-center">
            <Mail className="w-4 h-4 mr-2" /> {user.email}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Flashcards Reviewed</span>
          <span className="font-bold">{user.flashcardsReviewed || 0}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Languages Learning</span>
          <span className="font-bold">{user.learningLanguages.map(lang => lang.name).join(', ')}</span>
        </div>
        <div className="mb-2">
          <select
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a Language</option>
            {languages.map((language) => (
              <option key={language._id} value={language._id}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddLanguage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
        >
          <Plus className="mr-2" /> Add Language
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
