import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: `InboxPurge saved my sanity! I went from 18,000 unread emails to inbox zero in 15 minutes. The mass unsubscribe feature alone removed 400+ newsletter subscriptions I forgot I had. Now I actually look forward to checking email.`,
      beforeAfter: {
        before: "18,247 emails",
        after: "23 important emails",
        timeSaved: "3.5 hours weekly"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/sarahjohnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: `As a founder, every minute counts. InboxPurge gave me back 2 hours daily that I was wasting on email management. The smart blocking feature prevents 95% of spam from even reaching my inbox. It's like having a personal email assistant.`,
      beforeAfter: {
        before: "12,500 emails",
        after: "inbox zero",
        timeSaved: "2 hours daily"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/michaelchen"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Global Solutions",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: `I was skeptical about giving an extension access to my Gmail, but InboxPurge's privacy-first approach convinced me. The results speak for themselves - my productivity increased by 40% just from having a clean, organized inbox.`,
      beforeAfter: {
        before: "9,800 emails",
        after: "45 emails",
        timeSaved: "90 minutes daily"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      id: 4,
      name: "David Park",
      role: "Sales Executive",
      company: "Revenue Growth Co.",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      content: `The bulk deletion feature is incredible. I deleted 15,000 old promotional emails in one click, organized by category. My Gmail storage went from 98% full to 45%. InboxPurge literally gave me my email life back.`,
      beforeAfter: {
        before: "22,100 emails",
        after: "inbox organized",
        timeSaved: "4 hours weekly"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/davidpark"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "Efficiency First",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
      content: `I've tried every email management tool out there. InboxPurge is the only one that actually works as advertised. The Chrome integration is seamless, and the results are immediate. My team now uses it company-wide.`,
      beforeAfter: {
        before: "16,750 emails",
        after: "clean inbox",
        timeSaved: "2.5 hours weekly"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/lisathompson"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentUser = testimonials[currentTestimonial];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-primary">50,000+</span> Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real users who transformed their email productivity with InboxPurge
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-xl p-8 border border-border card-shadow">
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {currentUser.name}
                    </h4>
                    {currentUser.verified && (
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {currentUser.role} at {currentUser.company}
                  </p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(currentUser.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} color="var(--color-warning)" />
                    ))}
                  </div>
                </div>
                <a
                  href={currentUser.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Icon name="Linkedin" size={20} color="var(--color-secondary)" />
                </a>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{currentUser.content}"
              </blockquote>

              {/* Before/After Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Before</div>
                  <div className="font-semibold text-destructive">
                    {currentUser.beforeAfter.before}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">After</div>
                  <div className="font-semibold text-success">
                    {currentUser.beforeAfter.after}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Time Saved</div>
                  <div className="font-semibold text-primary">
                    {currentUser.beforeAfter.timeSaved}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="ChevronLeft" size={16} />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <span>Next</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>

          {/* Testimonial Sidebar */}
          <div className="space-y-6">
            {/* Trust Metrics */}
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                User Satisfaction
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">5 Stars</span>
                  <div className="flex-1 mx-3 bg-border rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">4 Stars</span>
                  <div className="flex-1 mx-3 bg-border rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-1/5"></div>
                  </div>
                  <span className="text-sm font-medium">8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">3 Stars</span>
                  <div className="flex-1 mx-3 bg-border rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-1/12"></div>
                  </div>
                  <span className="text-sm font-medium">2%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-center">
                <div className="text-2xl font-bold text-warning mb-1">4.8★</div>
                <p className="text-sm text-muted-foreground">Average rating</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Impact Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Emails Cleaned</span>
                  <span className="font-semibold text-primary">15,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Time Saved Weekly</span>
                  <span className="font-semibold text-success">2.8 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Productivity Boost</span>
                  <span className="font-semibold text-warning">67%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Would Recommend</span>
                  <span className="font-semibold text-primary">98%</span>
                </div>
              </div>
            </div>

            {/* Featured Review */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Quote" size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium text-primary">Featured Review</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                "This extension literally changed my work life. I can't imagine going back to manual email management."
              </p>
              <div className="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="Alex K."
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs text-muted-foreground">Alex K., CEO</span>
              </div>
            </div>

            {/* Auto-play Control */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
                <span>{isAutoPlaying ? "Pause" : "Play"} slideshow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;