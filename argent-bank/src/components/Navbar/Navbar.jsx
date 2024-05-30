import React from 'react';
import logo from "../../../public/assets/argentBankLogo.webp";
import './Navbar.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        //dispatch(logoutUser());
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
                {user ? (
                    <>
                        <li>
                            <Link to="/profile" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                {user.firstname} {user.lastname}
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
    )
}
