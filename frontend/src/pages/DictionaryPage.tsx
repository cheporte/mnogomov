import React, { useState } from "react";

import { useLocation, Link } from "react-router-dom";

import Button from "../components/ui/Button";
import SearchInput from "../components/ui/SearchInput";

import "../styles/pages/dict.sass";

interface WordEntry {
  native: string;
  translation: string;
  language: string;
  note?: string;
}

const mockWords: WordEntry[] = [
  // French 🇫🇷
  {
    native: "Bonjour",
    translation: "Hello",
    language: "fr",
    note: "Formal greeting",
  },
  { native: "Merci", translation: "Thank you", language: "fr" },
  {
    native: "Chat",
    translation: "Cat",
    language: "fr",
    note: "Masculine noun (m)",
  },
  { native: "Pomme", translation: "Apple", language: "fr" },

  // Japanese 🇯🇵
  {
    native: "こんにちは",
    translation: "Hello",
    language: "jp",
    note: "Formal greeting",
  },
  { native: "ありがとう", translation: "Thank you", language: "jp" },
  { native: "猫", translation: "Cat", language: "jp", note: "ねこ (neko)" },
  { native: "りんご", translation: "Apple", language: "jp" },

  // Ukrainian 🇺🇦
  {
    native: "Привіт",
    translation: "Hello",
    language: "ua",
    note: "Casual greeting",
  },
  { native: "Дякую", translation: "Thank you", language: "ua" },
  {
    native: "Кіт",
    translation: "Cat",
    language: "ua",
    note: "Masculine noun (m)",
  },
  { native: "Яблуко", translation: "Apple", language: "ua" },
];

const DictionaryPage: React.FC = () => {
  const currentLang = useLocation().pathname.split("/").pop() || "all";
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const toggleSortOrder = () => {
    setSortAsc((prev) => !prev);
  };

  const filteredWords = mockWords
    .filter((word) => {
      const query = searchQuery.toLowerCase();
      const langMatch = currentLang === "all" || word.language === currentLang;
      return (
        langMatch &&
        (word.native.toLowerCase().includes(query) ||
          word.translation.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (sortAsc) {
        return a.native.localeCompare(b.native);
      } else {
        return b.native.localeCompare(a.native);
      }
    });

  return (
    <div id="dictionary-page">
      <div className="dictionary-page__navbar">
        <Link to="/">
          <Button variant="ghost" size="lg">
            Go Back
          </Button>
        </Link>
        <SearchInput onSearch={handleSearchChange} />
        <Button variant="ghost" size="lg" onclick={toggleSortOrder}>
          Sort {sortAsc ? "Z → A" : "A → Z"}
        </Button>
      </div>

      <div className="dict">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <div key={index} className="dict__entry">
              <h3>{word.native}</h3>
              <p>
                <strong>Translation:</strong> {word.translation}
              </p>
              <p>
                <strong>Language:</strong> {word.language}
              </p>
              {word.note && <em>{word.note}</em>}
            </div>
          ))
        ) : (
          <p className="dict__empty">No matching words found... 🥺</p>
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;
