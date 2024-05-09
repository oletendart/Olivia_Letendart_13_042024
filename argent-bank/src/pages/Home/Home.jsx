import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FeatureItem from "../../components/FeatureItem/FeatureItem.jsx";
import HeroContent from "../../components/HeroContent/HeroContent.jsx";
import './Home.scss';
import jsonData from '../../data/dataFeatureItem.json';

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
                    {jsonData.map((item, index) => (
                        <FeatureItem key={index}
                                     alt={item.alt}
                                     img={item.img}
                                     title={item.title}
                                     description={item.description}
                        />

                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}