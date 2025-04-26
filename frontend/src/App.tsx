import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";

import Home from "./pages/Home";
import FlashcardsPage from "./pages/FlashcardsPage";
import DictionaryPage from "./pages/DictionaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AuthPage authType="login" />} />
        <Route path="/login" element={<AuthPage authType="login" />} />
        <Route path="/register" element={<AuthPage authType="signup" />} />

        <Route path="/" element={<Home />} />
        <Route path="/flashcards/:lang" element={<FlashcardsPage />} />
        <Route path="/dict/:lang" element={<DictionaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
