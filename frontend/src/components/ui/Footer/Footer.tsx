import React from 'react';
import './Footer.sass';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3 className="footer__title">Navigation</h3>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="/">Home</a></li>
                        <li className="footer__item"><a href="/about">About</a></li>
                        <li className="footer__item"><a href="/courses">Courses</a></li>
                        <li className="footer__item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3 className="footer__title">Follow Us</h3>
                    <div className="footer__social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} color="#FFD1E3" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={24} color="#FFD1E3" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} color="#FFD1E3" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} color="#FFD1E3" />
                        </a>
                    </div>
                </div>
                <div className="footer__section">
                    <h3 className="footer__title">Contact Us</h3>
                    <p className="footer__contact">Email: contact@mnogomov.com</p>
                    <p className="footer__contact">Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2025 Mnogomov. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
