import React from 'react';
import Header from '../../components/ui/Header';
import ExitIntentModal from '../../components/ui/ExitIntentModal';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import VideoSection from './components/VideoSection';
import TestimonialsSection from './components/TestimonialsSection';
import TrustSection from './components/TrustSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Above the fold */}
        <HeroSection />
        
        {/* Problem Agitation Section */}
        <ProblemSection />
        
        {/* Solution Overview Section */}
        <SolutionSection />
        
        {/* Key Benefits Section */}
        <BenefitsSection />
        
        {/* Video Demonstration Section */}
        <VideoSection />
        
        {/* User Testimonials Section */}
        <TestimonialsSection />
        
        {/* Trust & Privacy Section */}
        <TrustSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Final Conversion CTA Section */}
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <FooterSection />
      
      {/* Exit Intent Modal */}
      <ExitIntentModal />
    </div>
  );
};

export default LandingPage;