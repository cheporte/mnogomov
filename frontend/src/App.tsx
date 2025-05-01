import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";

import Home from "./pages/Home";
import FlashcardsPage from "./pages/FlashcardsPage";
import DictionaryPage from "./pages/DictionaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mnogomov/*" element={<AuthPage authType="login" />} />
        <Route path="/mnogomov/login" element={<AuthPage authType="login" />} />
        <Route path="/mnogomov/register" element={<AuthPage authType="signup" />} />

        <Route path="/mnogomov" element={<Home />} />
        <Route path="/mnogomov/flashcards/:lang" element={<FlashcardsPage />} />
        <Route path="/mnogomov/dict/:lang" element={<DictionaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
