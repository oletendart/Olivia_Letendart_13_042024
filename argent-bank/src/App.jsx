import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute/PublicRoute.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<PublicRoute element={<Login />} />}
                    />
                    <Route
                        path="/profile"
                        element={<ProtectedRoute element={<Profile />} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
