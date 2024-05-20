import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                  path="/transaction"
                  element={
                            <ProtectedRoute>
                                <Transaction />
                            </ProtectedRoute>
                  }
              />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
