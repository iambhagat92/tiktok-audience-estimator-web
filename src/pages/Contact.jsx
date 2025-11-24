import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>Contact Us</h2>
            </div>
            <div className="tade-content">
                <p>Have questions, suggestions, or feedback? We'd love to hear from you!</p>

                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
                    <p><strong>Email:</strong> support@tiktokestimator.com</p>
                    <p><strong>Twitter:</strong> @TikTokEstimator</p>
                </div>

                <p>We aim to respond to all inquiries within 24-48 hours.</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Back to Tool</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
