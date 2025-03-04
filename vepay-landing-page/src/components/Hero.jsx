import "./Hero.css";
import heroImage from '../assets/HeroImage.png'
import HeroSectionCards from "./HeroSectionCards.jsx";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Empower Your <span>eCommerce</span> Growth with Interest-Free Financing
                </h1>
                <p>Fast, Transparent, Ethical Solutions for Your Business Success</p>
                <button className="hero-button">Start Your Journey Today</button>
            </div>

            {/* Image (Hidden on Mobile) */}
            <div className="hero-image">
                <img src={heroImage} alt="Business Growth" />
            </div>
        </section>

    );
};

export default Hero;
