import { useState } from "react";
import "./Nav.css"; // Import the CSS file
import navBarLogo from '../assets/VePayLogo.jpg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo on the Left */}
                <div className="nav-logo">
                    <img src={navBarLogo}/>
                </div>

                {/* Menu and Button Wrapper (Aligned to the Right) */}
                <div className="nav-right">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#">Invoice Financing</a></li>
                        <li><a href="#">Business Funding</a></li>
                        <li><a href="#">Invest with VePay</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Other Services</a></li>
                        <li><a href="#">Sustainability</a></li>
                    </ul>

                    {/* Contact Us Button */}
                    <button className="nav-button">Contact Us</button>

                    {/* Hamburger Menu */}
                    <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
