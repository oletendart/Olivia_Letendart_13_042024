import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Login.scss';
import InputForm from "../../components/InputForm/InputForm.jsx";
import InputRemember from "../../components/InputRemember/InputRemember.jsx";

export default function Login() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="main bg-dark login-bg">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <InputForm htmlFor="username" text="Username" type="text" id="username" />
                        <InputForm htmlFor="password" text="Password" type="password" id="password" />
                        <InputRemember />
                        <button className="sign-in-button" type="submit">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}