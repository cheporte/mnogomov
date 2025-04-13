import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dictionary.sass';

import CustomButton from '@components/CustomButton';

const words = [
  { word: 'bonjour', translation: 'hello', partOfSpeech: 'interjection', language: 'French' },
  { word: 'дім', translation: 'house', partOfSpeech: 'noun', language: 'Ukrainian' },
  { word: 'chien', translation: 'dog', partOfSpeech: 'noun', language: 'French' },
  { word: 'говорити', translation: 'to speak', partOfSpeech: 'verb', language: 'Ukrainian' },
];

const Dictionary: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredWords = words.filter((w) =>
    w.word.toLowerCase().includes(search.toLowerCase()) ||
    w.translation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="dictionary">
      <Link to='/'>
        <CustomButton className='backBtn' variant='ghost' size='lg'>Go Back</CustomButton>
      </Link>
      <header className="dictionary-header">
        <h1>Your Dictionary</h1>
        <input
          type="text"
          placeholder="Search words..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <section className="word-list">
        {filteredWords.map((item, index) => (
          <div className="word-entry" key={index}>
            <div className="word-row">
              <span className="word">{item.word}</span>
              <span className="translation">{item.translation}</span>
            </div>
            <div className="details">
              <span className="part-of-speech">{item.partOfSpeech}</span>
              <span className="language-tag">{item.language}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Dictionary;
