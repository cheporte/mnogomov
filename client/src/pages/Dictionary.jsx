import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Plus, Bookmark } from 'lucide-react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dictionaryEntries, setDictionaryEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ word: '', translation: '', partOfSpeech: '', exampleSentence: '', baseLanguage: '', targetLanguage: '' });
  const [languages, setLanguages] = useState([]);

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

  useEffect(() => {
    const fetchDictionaryEntries = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/dictionary', {
          headers: { 'x-auth-token': token }
        });
        setDictionaryEntries(response.data);
      } catch (error) {
        console.error('Error fetching dictionary entries:', error);
      }
    };

    fetchDictionaryEntries();
  }, []);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/dictionary/search?term=${searchTerm}`, {
        headers: { 'x-auth-token': token }
      });
      setDictionaryEntries(response.data);
    } catch (error) {
      console.error('Error searching dictionary:', error);
    }
  };

  const handleAddEntry = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/dictionary', newEntry, {
        headers: { 'x-auth-token': token }
      });
      // Refresh dictionary entries after adding a new entry
      const response = await axios.get('http://localhost:5000/api/dictionary', {
        headers: { 'x-auth-token': token }
      });
      setDictionaryEntries(response.data);
      setNewEntry({ word: '', translation: '', partOfSpeech: '', exampleSentence: '', baseLanguage: '', targetLanguage: '' });
    } catch (error) {
      console.error('Error adding dictionary entry:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Dictionary</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={newEntry.baseLanguage}
              onChange={(e) => setNewEntry({ ...newEntry, baseLanguage: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Base Language</option>
              {languages.map((language) => (
                <option key={language._id} value={language._id}>
                  {language.name}
                </option>
              ))}
            </select>
            <select
              value={newEntry.targetLanguage}
              onChange={(e) => setNewEntry({ ...newEntry, targetLanguage: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Target Language</option>
              {languages.map((language) => (
                <option key={language._id} value={language._id}>
                  {language.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Word"
              value={newEntry.word}
              onChange={(e) => setNewEntry({ ...newEntry, word: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Translation"
              value={newEntry.translation}
              onChange={(e) => setNewEntry({ ...newEntry, translation: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Part of Speech"
              value={newEntry.partOfSpeech}
              onChange={(e) => setNewEntry({ ...newEntry, partOfSpeech: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Example Sentence"
              value={newEntry.exampleSentence}
              onChange={(e) => setNewEntry({ ...newEntry, exampleSentence: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleAddEntry}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center"
          >
            <Plus className="mr-2" /> Add Entry
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Dictionary Entries</h2>
          <div className="space-y-4">
            {dictionaryEntries.length > 0 ? (
              dictionaryEntries.map((entry) => (
                <div key={entry._id} className="p-4 border rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{entry.word}</h3>
                      <p className="text-gray-600">{entry.translation}</p>
                      <p className="text-sm text-gray-500">{entry.partOfSpeech}</p>
                      <p className="text-sm text-gray-500">{entry.exampleSentence}</p>
                    </div>
                    <Bookmark className="text-blue-600" />
                  </div>
                </div>
              ))
            ) : (
              <p>No dictionary entries found. Add your first entry!</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dictionary;
