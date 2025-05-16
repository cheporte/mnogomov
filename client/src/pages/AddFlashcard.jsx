import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFlashcard = () => {
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [baseLanguage, setBaseLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/languages');
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/flashcards', {
        frontText,
        backText,
        baseLanguage,
        targetLanguage
      }, {
        headers: {
          'x-auth-token': token
        }
      });
      navigate('/flashcards');
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="baseLanguage">
            Base Language
          </label>
          <select
            id="baseLanguage"
            value={baseLanguage}
            onChange={(e) => setBaseLanguage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Base Language</option>
            {languages.map((language) => (
              <option key={language._id} value={language._id}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetLanguage">
            Target Language
          </label>
          <select
            id="targetLanguage"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Target Language</option>
            {languages.map((language) => (
              <option key={language._id} value={language._id}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frontText">
            Front Text
          </label>
          <input
            type="text"
            id="frontText"
            value={frontText}
            onChange={(e) => setFrontText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="backText">
            Back Text
          </label>
          <input
            type="text"
            id="backText"
            value={backText}
            onChange={(e) => setBackText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Flashcard
        </button>
      </form>
    </div>
  );
};

export default AddFlashcard;
