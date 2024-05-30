import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TransactionItem from "../../components/TransactionItem/TransactionItem.jsx";
import './Profile.scss';
import jsonData from '../../data/dataTransactionItem.json';
import {useSelector} from "react-redux";

export default function Profile() {
    const user = useSelector((state) => state.auth.user);

    console.log(user);

    if(!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <main className="main bg-dark transaction-padding">
                <div className="header">
                    <h1 className="margin-h1">Welcome back<br/>{user.firstname} {user.lastname} !</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                {jsonData.map((item, index) => (
                    <TransactionItem key={index}
                                     title={item.title}
                                     amount={item.amount}
                                     description={item.description}
                    />
                ))}
            </main>
            <Footer />
        </>
    )
}