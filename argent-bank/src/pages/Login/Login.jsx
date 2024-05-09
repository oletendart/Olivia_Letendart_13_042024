import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import InputUsername from '../../components/InputUsername/InputUsername.jsx';
import './Login.scss';
import InputPassword from "../../components/InputPassword/InputPassword.jsx";
import InputRemember from "../../components/InputRemember/InputRemember.jsx";

export default function Login() {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <InputUsername />
                        <InputPassword />
                        <InputRemember />
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
            </>
    )
}