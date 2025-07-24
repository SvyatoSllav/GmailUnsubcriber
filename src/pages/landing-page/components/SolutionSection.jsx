import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState('unsubscribe');

  const features = [
    {
      id: 'unsubscribe',
      title: 'Mass Unsubscribe',
      description: 'Instantly unsubscribe from hundreds of newsletters and promotional emails with one click',
      icon: 'UserX',
      color: 'primary',
      stats: '15,000+ subscriptions removed daily',
      beforeAfter: {
        before: 'Manually clicking unsubscribe 200+ times',
        after: 'One click removes all unwanted subscriptions'
      }
    },
    {
      id: 'block',
      title: 'Smart Blocking',
      description: 'Automatically block spam, promotional emails, and unwanted senders before they reach your inbox',
      icon: 'Shield',
      color: 'success',
      stats: '99.7% spam prevention rate',
      beforeAfter: {
        before: 'Spam emails flooding your inbox daily',
        after: 'Clean inbox with only important emails'
      }
    },
    {
      id: 'delete',
      title: 'Bulk Deletion',
      description: 'Delete thousands of old emails by category, date range, or sender in seconds',
      icon: 'Trash2',
      color: 'warning',
      stats: '2.3M emails deleted per day',
      beforeAfter: {
        before: 'Manually selecting and deleting emails',
        after: 'Bulk delete by smart categories'
      }
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          button: 'bg-primary text-primary-foreground'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20',
          button: 'bg-success text-success-foreground'
        };
      case 'warning':
        return {
          bg: 'bg-warning/10',
          text: 'text-warning',
          border: 'border-warning/20',
          button: 'bg-warning text-warning-foreground'
        };
      default:
        return {
          bg: 'bg-muted',
          text: 'text-foreground',
          border: 'border-border',
          button: 'bg-foreground text-background'
        };
    }
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);
  const colors = getColorClasses(activeFeatureData.color);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            One Tool, <span className="text-primary">Three Powers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            InboxPurge combines the three most powerful email cleanup features into one simple Chrome extension. 
            No more juggling multiple tools or manual processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Selection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Choose Your Cleanup Method
            </h3>

            {features.map((feature) => {
              const featureColors = getColorClasses(feature.color);
              const isActive = activeFeature === feature.id;

              return (
                <div
                  key={feature.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-250 ${
                    isActive 
                      ? `${featureColors.bg} ${featureColors.border}` 
                      : 'bg-card border-border hover:border-primary/30'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isActive ? featureColors.bg : 'bg-muted'
                    }`}>
                      <Icon 
                        name={feature.icon} 
                        size={24} 
                        color={isActive ? `var(--color-${feature.color})` : 'var(--color-muted-foreground)'} 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-2 ${
                        isActive ? featureColors.text : 'text-foreground'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {feature.description}
                      </p>
                      <div className={`text-sm font-medium ${featureColors.text}`}>
                        {feature.stats}
                      </div>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0">
                        <Icon name="CheckCircle" size={20} color={`var(--color-${feature.color})`} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Demo */}
          <div className="space-y-6">
            <div className={`rounded-lg border-2 ${colors.border} overflow-hidden card-shadow`}>
              {/* Demo Header */}
              <div className={`${colors.bg} p-4 border-b ${colors.border}`}>
                <div className="flex items-center justify-between">
                  <h4 className={`font-semibold ${colors.text}`}>
                    {activeFeatureData.title} Demo
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="p-6 bg-background">
                <div className="space-y-6">
                  {/* Before */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="X" size={16} color="var(--color-destructive)" />
                      <span className="font-medium text-destructive">Before InboxPurge</span>
                    </div>
                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        {activeFeatureData.beforeAfter.before}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center`}>
                      <Icon name="ArrowDown" size={20} color={`var(--color-${activeFeatureData.color})`} />
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="font-medium text-success">After InboxPurge</span>
                    </div>
                    <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        {activeFeatureData.beforeAfter.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-muted border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Play"
                  iconPosition="left"
                  className={colors.button}
                >
                  Try {activeFeatureData.title}
                </Button>
              </div>
            </div>

            {/* Feature Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                <div className="text-2xl font-bold text-primary mb-1">
                  10x
                </div>
                <p className="text-sm text-muted-foreground">
                  Faster than manual
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                <div className="text-2xl font-bold text-success mb-1">
                  99.9%
                </div>
                <p className="text-sm text-muted-foreground">
                  Accuracy rate
                </p>
              </div>
            </div>

            {/* Trust Message */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={20} color="var(--color-primary)" />
                <div>
                  <h5 className="font-medium text-foreground mb-1">
                    Safe & Reversible
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    All actions can be undone. We never permanently delete important emails without your confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience All Three Powers?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 50,000+ professionals who've transformed their Gmail experience
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="text-lg px-8 py-4"
            >
              Install InboxPurge Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free forever • No credit card required • 30-second setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;