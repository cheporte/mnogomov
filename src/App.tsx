import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";

import Home from "./pages/Home";
import FlashcardsPage from "./pages/FlashcardsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AuthPage authType='login' />}/>
        <Route path="/login" element={<AuthPage authType='login' />}/>
        <Route path="/register" element={<AuthPage authType='signup' />}/>

        <Route path="/" element={<Home />}/>
        <Route path="/flashcards/:lang" element={<FlashcardsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
