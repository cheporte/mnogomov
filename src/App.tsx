import './App.scss'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import Home from "./pages/Home/Home.tsx";
import Profile from "./pages/Profile/Profile.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/" element={<Home />}/>
        <Route
          path="/profile"
          element={
            <Profile
              userName='Cheporté'
              learningLang='French'
              progress={75}/>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
