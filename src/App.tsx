import './app.sass'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NotFoundPage from "@pages/NotFoundPage";
import Home from "@pages/Home";
import Profile from "@pages/Profile";

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

export default App;
