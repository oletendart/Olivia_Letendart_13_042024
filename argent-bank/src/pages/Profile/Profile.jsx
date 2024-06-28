import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TransactionItem from "../../components/TransactionItem/TransactionItem.jsx";
import './Profile.scss';
import jsonData from '../../data/dataTransactionItem.json';
import { getUserProfile, nameChange } from "../../store/authSlice.js";
import InputFirstAndLastName from "../../components/InputFirstAndLastName/InputFirstAndLastName.jsx";
import BtnProfile from "../../components/BtnProfile/BtnProfile.jsx";

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }
    }, [user]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }
        setIsEditing(false);
    };

    const handleSaveClick = () => {
        dispatch(nameChange({ firstName, lastName })).then(() => {
            dispatch(getUserProfile()).then(() => {
                setIsEditing(false);
            });
        });
    };

    return (
        <>
            <Navbar />
            <main className="main bg-dark transaction-padding">
                <div className="header">
                    <h1 className="margin-h1">
                        Welcome back<br/>
                        {isEditing ? (
                            <>
                                <InputFirstAndLastName
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <InputFirstAndLastName
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </>
                        ) : (
                            <>
                                {firstName} {lastName}
                            </>
                        )}
                    </h1>
                    {isEditing ? (
                        <>
                            <BtnProfile
                                className="save-button"
                                onClick={handleSaveClick}
                                text="Save"
                            />
                            <BtnProfile
                                className="cancel-button"
                                onClick={handleCancelClick}
                                text="Cancel"
                            />
                        </>
                    ) : (
                        <BtnProfile
                            className="edit-button"
                            onClick={handleEditClick}
                            text="Edit Name"
                        />
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
                {jsonData.map((item, index) => (
                    <TransactionItem
                        key={index}
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                    />
                ))}
            </main>
            <Footer />
        </>
    );
}
