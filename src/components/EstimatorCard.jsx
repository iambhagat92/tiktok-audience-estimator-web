import React, { useState } from 'react';
import { calculateDemographics } from '../utils/calculateDemographics';

const EstimatorCard = () => {
    const [formData, setFormData] = useState({
        niche: '',
        followers: '',
        views: ''
    });
    const [results, setResults] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);

    const ageInsights = {
        '13-17': "Viral trends, high engagement, low purchasing power.",
        '18-24': "Trendsetters, impulsive buyers, mobile-first.",
        '25-34': "Career-focused, high purchasing power, value authenticity.",
        '35-44': "Parents/Professionals, research-driven, higher AOV.",
        'Others': "Mixed demographics with varied interests."
    };

    const handleAgeClick = (age) => {
        if (selectedAge === age) {
            setSelectedAge(null); // Toggle off
        } else {
            setSelectedAge(age);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = calculateDemographics(
            formData.niche,
            parseInt(formData.followers) || 0,
            parseInt(formData.views) || 0
        );
        setResults(data);
        setSelectedAge(null); // Reset selection on new calc
    };

    const handleReset = () => {
        setResults(null);
        setFormData({ niche: '', followers: '', views: '' });
        setSelectedAge(null);
    };

    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>TikTok Audience Estimator</h2>
                <p>Estimate demographics based on public metrics.</p>
            </div>

            {!results ? (
                <form onSubmit={handleSubmit}>
                    <div className="tade-input-group">
                        <label htmlFor="tade-niche">Niche / Category</label>
                        <select
                            id="tade-niche"
                            name="niche"
                            value={formData.niche}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a niche</option>
                            <option value="entertainment">Entertainment & Comedy</option>
                            <option value="beauty">Beauty & Fashion</option>
                            <option value="tech">Tech & Gaming</option>
                            <option value="education">Education & Tips</option>
                            <option value="fitness">Health & Fitness</option>
                            <option value="lifestyle">Lifestyle & Vlog</option>
                            <option value="business">Business & Finance</option>
                        </select>
                    </div>

                    <div className="tade-input-group">
                        <label htmlFor="tade-followers">Follower Count</label>
                        <input
                            type="number"
                            id="tade-followers"
                            name="followers"
                            placeholder="e.g. 10000"
                            min="0"
                            value={formData.followers}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="tade-input-group">
                        <label htmlFor="tade-views">Avg. Views per Video</label>
                        <input
                            type="number"
                            id="tade-views"
                            name="views"
                            placeholder="e.g. 5000"
                            min="0"
                            value={formData.views}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="tade-btn">Estimate Demographics</button>
                </form>
            ) : (
                <div className="tade-results">
                    <h3>Estimated Audience Profile</h3>

                    <div className="tade-metric-box">
                        <span className="tade-label">Engagement Rate</span>
                        <span className="tade-value">{results.engagementRate}%</span>
                    </div>

                    <div className="tade-chart-section">
                        <h4>Gender Distribution</h4>
                        <div className="tade-bar-container">
                            <div
                                className="tade-bar tade-female"
                                style={{ width: `${results.gender.female}%` }}
                            >
                                <span className="tade-bar-label">Female {results.gender.female}%</span>
                            </div>
                            <div
                                className="tade-bar tade-male"
                                style={{ width: `${results.gender.male}%` }}
                            >
                                <span className="tade-bar-label">Male {results.gender.male}%</span>
                            </div>
                        </div>
                    </div>

                    <div className="tade-chart-section">
                        <h4>Age Group Dominance (Click for Insights)</h4>
                        <div className="tade-tags">
                            <span
                                className={`tade-tag highlight clickable ${selectedAge === results.ages.primary ? 'active' : ''}`}
                                onClick={() => handleAgeClick(results.ages.primary)}
                            >
                                {results.ages.primary} (Primary)
                            </span>
                            {results.ages.secondary && (
                                <span
                                    className={`tade-tag clickable ${selectedAge === results.ages.secondary ? 'active' : ''}`}
                                    onClick={() => handleAgeClick(results.ages.secondary)}
                                >
                                    {results.ages.secondary}
                                </span>
                            )}
                            <span
                                className={`tade-tag clickable ${selectedAge === 'Others' ? 'active' : ''}`}
                                onClick={() => handleAgeClick('Others')}
                            >
                                Others
                            </span>
                        </div>
                        {selectedAge && (
                            <div className="tade-age-insight">
                                <strong>Insight for {selectedAge}:</strong>
                                <p>{ageInsights[selectedAge] || ageInsights['Others']}</p>
                            </div>
                        )}
                    </div>

                    <div className="tade-chart-section">
                        <h4>Audience Intent</h4>
                        <div className="tade-intent-grid">
                            {Object.entries(results.intent).map(([key, value]) => (
                                <div key={key} className="tade-intent-item">
                                    <div className="tade-intent-label">
                                        <span className="tade-intent-name">{key}</span>
                                        <span className="tade-intent-pct">{value}%</span>
                                    </div>
                                    <div className="tade-intent-bar-bg">
                                        <div
                                            className="tade-intent-bar-fill"
                                            style={{ width: `${value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="tade-disclaimer">
                        * Estimates based on industry benchmarks for the selected niche. Actual data requires private API access.
                    </p>

                    <button onClick={handleReset} className="tade-btn tade-btn-outline">Start Over</button>
                </div>
            )}
        </div>
    );
};

export default EstimatorCard;
