import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: "The Ultimate Guide to Understanding TikTok Demographics in 2025",
            slug: "/blog/demographics-guide",
            summary: "Why knowing your audience's age and gender is the key to viral growth. Learn how to tailor your content to Gen Z vs. Millennials."
        },
        {
            title: "How to Leverage Audience Intent to Skyrocket Your Sales",
            slug: "/blog/audience-intent",
            summary: "Move beyond vanity metrics. Understand if your audience is watching for Entertainment, Education, or to Buy."
        },
        {
            title: "TikTok SEO Strategy: How to Rank Your Videos on Search",
            slug: "/blog/tiktok-seo",
            summary: "Stop relying on the For You Page. Learn the 3 pillars of TikTok SEO to get consistent, evergreen traffic."
        },
        {
            title: "TikTok Engagement Rate Benchmarks: Are You Above Average?",
            slug: "/blog/engagement-benchmarks",
            summary: "Stop guessing. We reveal the 2025 industry standards for engagement rates by follower count."
        },
        {
            title: "Finding Your Best Time to Post on TikTok Using Data",
            slug: "/blog/best-time-to-post",
            summary: "Is there a universal 'Best Time'? No. But there is a best time for YOU. Learn how to find it."
        }
    ];

    return (
        <div className="tade-card">
            <div className="tade-header">
                <h2>TikTok Growth Blog</h2>
                <p>Expert insights, data-driven strategies, and guides.</p>
            </div>
            <div className="tade-content">
                <div className="tade-blog-list">
                    {posts.map((post, index) => (
                        <div key={index} className="tade-blog-item" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px solid #eee' }}>
                            <h3 style={{ marginTop: '0', fontSize: '18px' }}>
                                <Link to={post.slug} style={{ textDecoration: 'none', color: '#111' }}>{post.title}</Link>
                            </h3>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{post.summary}</p>
                            <Link to={post.slug} style={{ fontSize: '14px', fontWeight: '600', color: '#FE2C55', textDecoration: 'none' }}>Read More →</Link>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="tade-btn" style={{ display: 'inline-block', textDecoration: 'none', width: 'auto' }}>Back to Tool</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
