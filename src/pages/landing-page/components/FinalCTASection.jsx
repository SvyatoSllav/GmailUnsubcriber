import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userCount, setUserCount] = useState(50247);
  const [isChromeDetected, setIsChromeDetected] = useState(false);

  useEffect(() => {
    // Chrome detection
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    setIsChromeDetected(isChrome);

    // Animate user counter
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Handle email submission logic here
      console.log('Email submitted:', email);
    }
  };

  const handleChromeInstall = () => {
    // Chrome Web Store redirect logic
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  const urgencyMessages = [
    "Your inbox is getting messier every minute you wait",
    "Join the productivity revolution happening right now",
    "Don't let email chaos control another day of your life",
    "50,000+ professionals can't be wrong"
  ];

  const [currentUrgencyMessage, setCurrentUrgencyMessage] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentUrgencyMessage(prev => (prev + 1) % urgencyMessages.length);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [urgencyMessages.length]);

  return (
    <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center text-primary-foreground">
          {/* Urgency Message */}
          <div className="mb-8">
            <p className="text-lg opacity-90 transition-all duration-500">
              {urgencyMessages[currentUrgencyMessage]}
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Email Life
            <br />
            <span className="text-warning">Right Now</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join {userCount.toLocaleString()}+ professionals who've already reclaimed their productivity. 
            Your future organized self will thank you.
          </p>

          {/* Social Proof Counter */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">
                  {userCount.toLocaleString()}+
                </div>
                <p className="text-sm opacity-80">Happy Users</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">
                  435M+
                </div>
                <p className="text-sm opacity-80">Emails Cleaned</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">
                  4.8★
                </div>
                <p className="text-sm opacity-80">Rating</p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          {isChromeDetected ? (
            <div className="space-y-4 mb-8">
              <Button
                variant="secondary"
                size="xl"
                onClick={handleChromeInstall}
                iconName="Download"
                iconPosition="left"
                className="text-xl px-12 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Install InboxPurge Now - It's Free
              </Button>
              <p className="text-sm opacity-80">
                ✓ Installs in 10 seconds ✓ Works immediately ✓ No credit card required
              </p>
            </div>
          ) : (
            <div className="space-y-6 mb-8">
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center space-x-2 text-warning mb-2">
                  <Icon name="AlertTriangle" size={16} />
                  <span className="font-medium">Chrome Required</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  InboxPurge works with Google Chrome. Get notified when we support your browser.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                  <div className="flex space-x-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Button
                      type="submit"
                      variant="secondary"
                      iconName="Bell"
                      iconPosition="left"
                      className="bg-warning text-warning-foreground hover:bg-warning/90"
                    >
                      Notify Me
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-success/10 border border-success/20 rounded-lg p-4 max-w-md mx-auto">
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={16} />
                    <span className="font-medium">You're on the list!</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    We'll notify you as soon as InboxPurge supports your browser.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="#video"
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Icon name="Play" size={16} />
              <span>Watch Demo Video</span>
            </a>
            <a
              href="#testimonials"
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Icon name="Users" size={16} />
              <span>Read Success Stories</span>
            </a>
            <a
              href="#faq"
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Icon name="HelpCircle" size={16} />
              <span>Common Questions</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm opacity-80 mb-4">Trusted by professionals at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-sm font-medium">Google</div>
              <div className="text-sm font-medium">Microsoft</div>
              <div className="text-sm font-medium">Amazon</div>
              <div className="text-sm font-medium">Apple</div>
              <div className="text-sm font-medium">Meta</div>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-warning mb-2">
              <Icon name="Clock" size={16} />
              <span className="font-medium">Don't Wait Another Day</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Every day you delay is another day of email chaos. Your productivity is worth more than the 10 seconds it takes to install InboxPurge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;