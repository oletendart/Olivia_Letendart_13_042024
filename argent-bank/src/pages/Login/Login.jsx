import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authSlice.js';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Login.scss';
import InputForm from "../../components/InputForm/InputForm.jsx";
import InputRemember from "../../components/InputRemember/InputRemember.jsx";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credentials)).then((result) => {
            if (loginUser.fulfilled.match(result)) {
                navigate('/transaction');
            }
        });
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="main bg-dark login-bg">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <InputForm htmlFor="username" text="Username" type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
                        <InputForm htmlFor="password" text="Password" type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
                        <InputRemember />
                        <button className="sign-in-button" type="submit" disabled={loading}>Sign In</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}
