import React, { useState } from "react";

import "./SearchInput.sass";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search words..."
        value={query}
        onChange={handleInputChange}
        className="search-bar__input"
      />
      {query && (
        <button className="search-bar__clear" onClick={clearSearch}>
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchInput;
