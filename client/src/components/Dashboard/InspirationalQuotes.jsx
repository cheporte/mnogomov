import React, { useState, useEffect } from 'react';

const InspirationalQuotes = () => {
  const [quote, setQuote] = useState('');

  // Predefined list of inspirational quotes
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
  ];

  useEffect(() => {
    // Function to get a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    getRandomQuote();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-4">A Quote For You</h2>
      <div className="bg-gray-200 p-4 rounded">
        <p className="text-lg italic">"{quote}"</p>
      </div>
    </div>
  );
};

export default InspirationalQuotes;
