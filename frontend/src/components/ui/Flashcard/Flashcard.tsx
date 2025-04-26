import React from 'react';

import './Flashcard.sass';

type FlashcardProps = {
  language: 'French' | 'Japanese' | 'Ukrainian';
  word: string;
  romaji?: string;
  transliteration?: string;
  translation: string;
  details: string | null;
}

const Flashcard: React.FC<FlashcardProps> = ({
  language,
  word,
  romaji,
  transliteration,
  translation,
  details
}) => {
  return (
    <div className='flashcard'>
      <div className='flashcard__content'>
        <h2 className={language === 'Japanese' ? 'jp-text' : ''}>{word}</h2>
        {romaji && <p><strong>Romaji:</strong> {romaji}</p>}
        {transliteration && <p><strong>Transliteration:</strong> {transliteration}</p>}
        <p><strong>Translation:</strong> {translation}</p>
        <p><strong>Language:</strong> {language}</p>
        {details && <p><em>{details}</em></p>}
      </div>
    </div>
  );
};

export default Flashcard;