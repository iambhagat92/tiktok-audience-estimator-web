import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="tade-footer">
            <div className="tade-footer-links">
                <Link to="/blog">Blog</Link>
                <Link to="/how-it-works">How It Works</Link>
                <Link to="/about">About Us</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <p className="tade-copyright">
                © {new Date().getFullYear()} TikTok Audience Estimator. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
