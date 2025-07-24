import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [emailsCleanedCount, setEmailsCleanedCount] = useState(435133947);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Animate counter on load
    const interval = setInterval(() => {
      setEmailsCleanedCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleChromeInstall = () => {
    // Chrome Web Store redirect logic
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-4 py-2 mb-6">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 50,000+ Gmail users
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Clean Years of Gmail Clutter in{' '}
              <span className="text-primary">Minutes</span>, Not Hours
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              The only Chrome extension that combines mass unsubscribe, email blocking, and bulk deletion. 
              Transform your chaotic inbox into an organized productivity powerhouse with one click.
            </p>

            {/* Stats Counter */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8 card-shadow">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {emailsCleanedCount.toLocaleString()}
                </div>
                <p className="text-muted-foreground">Emails cleaned and counting...</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-success">Live counter</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleChromeInstall}
                iconName="Download"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Add to Chrome - It's Free
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleVideoPlay}
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Watch 30s Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} color="var(--color-warning)" />
                <span>4.8/5 Chrome Store</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>50,000+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span>Privacy-first</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative bg-card rounded-xl overflow-hidden card-shadow">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop"
                    alt="Gmail inbox cleanup demonstration"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      <Icon name="Play" size={32} color="white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    30 seconds
                  </div>
                </div>
              ) : (
                <div className="w-full h-80 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Play" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                    <p className="text-muted-foreground">Video would play here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Showing Gmail cleanup in action
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium">
              ✓ Works with Gmail
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-4 py-2 rounded-full text-sm font-medium">
              🚀 Install in 10 seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;