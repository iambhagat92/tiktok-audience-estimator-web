import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>How It Works & User Intent</h2>
                <p>Unlocking the secrets of TikTok Audience Demographics</p>
            </div>
            <div className="tade-content">
                <h3>The Power of Heuristic Estimation</h3>
                <p>
                    Understanding your audience on TikTok is crucial for growth, but accessing detailed demographic data can be difficult without expensive enterprise tools.
                    <strong>TikTok Audience Demographics Estimator</strong> bridges this gap using <em>heuristic modeling</em>.
                </p>
                <p>
                    By analyzing public metrics—specifically your <strong>Niche</strong>, <strong>Follower Count</strong>, and <strong>Average Views</strong>—our algorithm estimates the most likely composition of your audience.
                    While not a direct access to private API data, these estimates are based on industry benchmarks and behavioral patterns observed across millions of accounts.
                </p>

                <h3>Decoding User Intent</h3>
                <p>
                    Beyond just age and gender, understanding <em>why</em> people watch your content is the key to conversion. We categorize audience intent into four primary drivers:
                </p>
                <ul>
                    <li><strong>Entertainment:</strong> Users looking for fun, humor, and relaxation. High engagement but lower conversion intent.</li>
                    <li><strong>Education:</strong> Users seeking to learn a skill or gain knowledge. High trust and authority potential.</li>
                    <li><strong>Inspiration:</strong> Users looking for ideas, lifestyle goals, or motivation. Great for brand building.</li>
                    <li><strong>Purchase:</strong> Users ready to buy products or services. The "holy grail" for e-commerce brands.</li>
                </ul>

                <h3>How to Use This Data</h3>
                <p>
                    Use these insights to refine your content strategy. If your audience is primarily seeking <strong>Education</strong>, focus on tutorials and "how-to" videos.
                    If <strong>Entertainment</strong> dominates, lean into trends and storytelling. Aligning your content with your audience's intent is the fastest way to boost engagement and growth.
                </p>

                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Start Estimating Now</Link>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
