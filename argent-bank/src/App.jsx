import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/transaction" element={<Transaction />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
