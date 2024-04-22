import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
