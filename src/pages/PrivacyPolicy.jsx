import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>Privacy Policy</h2>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="tade-content">
                <h3>1. Introduction</h3>
                <p>Welcome to TikTok Audience Estimator. We respect your privacy and are committed to protecting your personal data.</p>

                <h3>2. Data Collection</h3>
                <p>We do not collect any personal data from users. All estimations are performed client-side using public metrics you input.</p>

                <h3>3. Cookies</h3>
                <p>We may use cookies to improve your experience. You can instruct your browser to refuse all cookies.</p>

                <h3>4. Third-Party Services</h3>
                <p>We may use third-party services like Google Analytics or AdSense which may collect data used to identify you.</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Back to Tool</Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
