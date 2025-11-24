import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>Terms of Service</h2>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="tade-content">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing this tool, you agree to be bound by these Terms of Service.</p>

                <h3>2. Use License</h3>
                <p>Permission is granted to temporarily use this tool for personal, non-commercial transitory viewing only.</p>

                <h3>3. Disclaimer</h3>
                <p>The materials on TikTok Audience Estimator are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>

                <h3>4. Accuracy of Materials</h3>
                <p>The estimations provided are heuristic-based and should not be considered as official data from TikTok.</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Back to Tool</Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
