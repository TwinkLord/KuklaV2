import React from 'react';
import './HomePage.css'; // Import CSS file

function Homepage() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="hero">
                <div className="hero-content">
                    <h1>Welcome to My Website</h1>
                    <p>A place where creativity meets technology.</p>
                    <a href="#contact" className="btn">Get in Touch</a>
                </div>
            </section>

            <section id="about">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et dui fermentum, in malesuada elit aliquam. </p>
                </div>
            </section>

            <section id="services">
                <div className="services-content">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Web Design</li>
                        <li>Graphic Design</li>
                        <li>Mobile App Development</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>
            </section>

            <section id="portfolio">
                <div className="portfolio-content">
                    <h2>Portfolio</h2>
                    {/* Add portfolio items here */}
                </div>
            </section>

            <section id="contact">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    {/* Add contact form or contact information here */}
                </div>
            </section>

            <footer>
                <p>&copy; 2024 My Homepage. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Homepage;