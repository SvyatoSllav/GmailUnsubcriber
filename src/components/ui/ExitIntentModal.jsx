import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userEngagement, setUserEngagement] = useState({
    timeSpent: 0,
    sectionsViewed: [],
    scrollDepth: 0
  });

  useEffect(() => {
    let startTime = Date.now();
    let maxScrollDepth = 0;
    const viewedSections = new Set();

    // Track time spent and scroll behavior
    const trackEngagement = () => {
      const currentTime = Date.now();
      const timeSpent = Math.floor((currentTime - startTime) / 1000);
      const scrollDepth = Math.floor((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
      }

      // Track sections viewed
      const sections = ['how-it-works', 'benefits', 'testimonials', 'privacy', 'faq'];
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            viewedSections.add(sectionId);
          }
        }
      });

      setUserEngagement({
        timeSpent,
        sectionsViewed: Array.from(viewedSections),
        scrollDepth: maxScrollDepth
      });
    };

    // Desktop exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !isSubmitted && userEngagement.timeSpent > 10) {
        setIsVisible(true);
      }
    };

    // Mobile back button detection
    const handlePopState = () => {
      if (!isSubmitted && userEngagement.timeSpent > 10) {
        setIsVisible(true);
        window.history.pushState(null, '', window.location.href);
      }
    };

    // Set up event listeners
    const scrollInterval = setInterval(trackEngagement, 1000);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);

    // Push initial state for mobile back detection
    window.history.pushState(null, '', window.location.href);

    return () => {
      clearInterval(scrollInterval);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isSubmitted, userEngagement.timeSpent]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle email submission logic here
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      
      // Show success message briefly then close
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  const getPersonalizedMessage = () => {
    const { timeSpent, sectionsViewed, scrollDepth } = userEngagement;
    
    if (sectionsViewed.includes('privacy') && sectionsViewed.includes('testimonials')) {
      return {
        title: "Still concerned about security?",
        subtitle: "Get our detailed privacy guide before you go",
        benefit: "Learn exactly how we protect your Gmail data"
      };
    } else if (sectionsViewed.includes('benefits') && scrollDepth > 50) {
      return {
        title: "Interested but need more time?",
        subtitle: "Get our inbox cleanup checklist",
        benefit: "Start cleaning your inbox manually while you decide"
      };
    } else if (timeSpent > 30) {
      return {
        title: "Don't let your inbox get worse!",
        subtitle: "Get our free Gmail productivity guide",
        benefit: "5 proven strategies to tame email chaos"
      };
    } else {
      return {
        title: "Wait! Don't leave empty-handed",
        subtitle: "Get our free inbox cleanup guide",
        benefit: "Learn the secrets to Gmail productivity"
      };
    }
  };

  if (!isVisible) return null;

  const message = getPersonalizedMessage();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-1000 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-2xl max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-250">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} color="var(--color-primary)" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {message.title}
                </h2>
                <p className="text-muted-foreground">
                  {message.subtitle}
                </p>
              </div>

              {/* Benefit highlight */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Free Instant Download</p>
                    <p className="text-sm text-muted-foreground">{message.benefit}</p>
                  </div>
                </div>
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                
                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    variant="default"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Get Free Guide
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClose}
                    className="px-4"
                  >
                    No Thanks
                  </Button>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={12} />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Lock" size={12} />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="UserX" size={12} />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} color="var(--color-success)" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Check your email!
              </h2>
              <p className="text-muted-foreground">
                Your free inbox cleanup guide is on its way.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;