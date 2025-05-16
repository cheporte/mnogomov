import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Dictionary from './pages/Dictionary';
import FlashcardPage from './pages/FlashcardPage';
import AddFlashcard from './pages/AddFlashcard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/flashcards" element={<FlashcardPage />} />
          <Route path="/add-flashcard" element={<AddFlashcard />} />
        </Routes>
    </Router>
  );
}

export default App
