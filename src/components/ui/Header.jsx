import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChromeDetected, setIsChromeDetected] = useState(false);

  const navigationItems = [
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'benefits', label: 'Benefits', href: '#benefits' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'privacy', label: 'Privacy', href: '#privacy' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  useEffect(() => {
    // Chrome detection
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    setIsChromeDetected(isChrome);

    // Scroll detection for sticky navigation
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.2;
      
      setIsScrolled(scrollPosition > scrollThreshold);

      // Active section detection
      const sections = navigationItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleChromeInstall = () => {
    // Chrome extension installation logic would go here
    console.log('Installing Chrome extension...');
  };

  return (
    <>
      {/* Chrome Detection Banner */}
      {!isChromeDetected && (
        <div className="bg-secondary text-secondary-foreground py-2 px-6 text-center text-sm z-50 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <Icon name="AlertCircle" size={16} />
            <span>For best experience, please use Google Chrome browser</span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-background border-b border-border relative z-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-foreground">InboxPurge</span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden initially, shown after scroll */}
            <nav className={`hidden md:flex items-center space-x-8 transition-all duration-250 ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}>
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-250 hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                onClick={handleChromeInstall}
                iconName="Download"
                iconPosition="left"
                className="hidden sm:flex"
              >
                {isChromeDetected ? 'Add to Chrome' : 'Get Chrome Extension'}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block text-sm font-medium transition-colors duration-250 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  onClick={handleChromeInstall}
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                >
                  {isChromeDetected ? 'Add to Chrome' : 'Get Chrome Extension'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Navigation Bar - Appears after scroll */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-100 transition-all duration-250">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Icon name="Mail" size={14} color="white" />
                </div>
                <span className="text-lg font-semibold text-foreground">InboxPurge</span>
              </div>

              <nav className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-sm font-medium transition-colors duration-250 hover:text-primary ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <Button
                variant="default"
                size="sm"
                onClick={handleChromeInstall}
                iconName="Download"
                iconPosition="left"
              >
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-100">
          <div 
            className="h-full bg-primary transition-all duration-250 ease-out"
            style={{
              width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          />
        </div>
      )}
    </>
  );
};

export default Header;