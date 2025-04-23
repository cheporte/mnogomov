import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AuthPage authType='login' />}/>
        <Route path="/login" element={<AuthPage authType='login' />}/>
        <Route path="/register" element={<AuthPage authType='signup' />}/>

        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
