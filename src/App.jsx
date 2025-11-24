import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EstimatorCard from './components/EstimatorCard';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import DemographicsGuide from './pages/blog/DemographicsGuide';
import AudienceIntent from './pages/blog/AudienceIntent';
import TikTokSEO from './pages/blog/TikTokSEO';
import EngagementBenchmarks from './pages/blog/EngagementBenchmarks';
import BestTimePost from './pages/blog/BestTimePost';

function App() {
  return (
    <Router>
      <div className="tade-wrapper">
        <Routes>
          <Route path="/" element={<EstimatorCard />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/demographics-guide" element={<DemographicsGuide />} />
          <Route path="/blog/audience-intent" element={<AudienceIntent />} />
          <Route path="/blog/tiktok-seo" element={<TikTokSEO />} />
          <Route path="/blog/engagement-benchmarks" element={<EngagementBenchmarks />} />
          <Route path="/blog/best-time-to-post" element={<BestTimePost />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
