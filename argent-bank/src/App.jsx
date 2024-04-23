import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Connection from "./pages/Connection/Connection.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/profil" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
