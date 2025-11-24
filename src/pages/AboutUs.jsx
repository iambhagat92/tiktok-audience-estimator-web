import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>About Us</h2>
            </div>
            <div className="tade-content">
                <p><strong>TikTok Audience Estimator</strong> is a free tool designed to help creators and marketers understand their potential audience demographics.</p>

                <h3>How it Works</h3>
                <p>Since private demographic data is restricted, our tool uses <strong>heuristic modeling</strong> based on industry benchmarks. We analyze your Niche, Follower Count, and Engagement Rate to estimate:</p>
                <ul>
                    <li>Gender Distribution</li>
                    <li>Age Group Dominance</li>
                    <li>Audience Intent (Why they watch)</li>
                </ul>

                <p>Our goal is to provide actionable insights to help you tailor your content strategy.</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Back to Tool</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
