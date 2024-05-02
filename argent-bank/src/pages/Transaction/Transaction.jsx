import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TransactionItem from "../../components/TransactionItem/TransactionItem.jsx";
import './Transaction.scss';

export default function Transaction() {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br/>Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <TransactionItem title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"}/>
                <TransactionItem title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"}/>
                <TransactionItem title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"}/>
            </main>
            <Footer />
        </>
    )
}