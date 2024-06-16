import React, { useState, useEffect } from 'react';
import logo from "../../../public/assets/argentBankLogo.webp";
import './Navbar.scss';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice.js';

export default function Navbar() {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <ul>
                {user && token ? (
                    <>
                        <li>
                            <Link to="/profile" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                            </Link>
                        </li>
                        <li>
                            <a onClick={handleLogout} className="main-nav-item">
                                Sign Out
                            </a>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
