import iconChat from '../../assets/icon-chat.png';
import iconCurrency from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FeatureItem from "../../components/FeatureItem/FeatureItem.jsx";
import HeroContent from "../../components/HeroContent/HeroContent.jsx";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="hero">
                    <HeroContent />
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem img={iconChat}
                                 alt={"Chat Icon"}
                                 title={"You are our #1 priority"}
                                 description={"Need to talk to a representative? You can get in touch through our\n" +
                                    "24/7 chat or through a phone call in less than 5 minutes."} />
                    <FeatureItem img={iconCurrency}
                                 alt={"Currency Icon"}
                                 title={"More savings means higher rates"}
                                 description={"The more you save with us, the higher your interest rate will be!"} />
                    <FeatureItem img={iconSecurity}
                                 alt={"Security Icon"}
                                 title={"Security you can trust"}
                                 description={"We use top of the line encryption to make sure your data and money\n" +
                                     "is always safe."} />
                </section>
            </main>
            <Footer />
        </>
    )
}