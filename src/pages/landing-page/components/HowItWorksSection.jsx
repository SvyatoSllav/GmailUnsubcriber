import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Install Extension',
      description: 'Add InboxPurge to Chrome in 10 seconds',
      icon: 'Download',
      color: 'primary',
      duration: '10 seconds',
      details: {
        action: 'Click "Add to Chrome" button',
        result: 'Extension installed and ready',
        screenshot: 'Chrome Web Store installation page'
      },
      subSteps: [
        'Click the "Add to Chrome" button',
        'Confirm installation in popup',
        'Extension icon appears in toolbar',
        'Ready for Gmail connection'
      ]
    },
    {
      id: 2,
      title: 'Connect Gmail',
      description: 'Securely link your Gmail account',
      icon: 'Link',
      color: 'success',
      duration: '30 seconds',
      details: {
        action: 'Authorize Gmail access',
        result: 'Secure connection established',
        screenshot: 'Google OAuth permission screen'
      },
      subSteps: [
        'Click "Connect Gmail" button',
        'Sign in to your Google account',
        'Review and approve permissions',
        'Connection confirmed and secured'
      ]
    },
    {
      id: 3,
      title: 'Start Cleaning',
      description: 'Watch your inbox transform instantly',
      icon: 'Sparkles',
      color: 'warning',
      duration: '2 minutes',
      details: {
        action: 'Choose cleanup options',
        result: 'Clean, organized inbox',
        screenshot: 'Before and after inbox comparison'
      },
      subSteps: [
        'Select cleanup categories',
        'Review suggested actions',
        'Click "Start Cleanup"',
        'Enjoy your organized inbox'
      ]
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

  const activeStepData = steps.find(step => step.id === activeStep);
  const colors = getColorClasses(activeStepData.color);

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to inbox zero in under 3 minutes. No technical knowledge required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const stepColors = getColorClasses(step.color);
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;

              return (
                <div key={step.id} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
                  )}
                  
                  <div
                    className={`flex items-start space-x-4 p-6 rounded-lg border-2 cursor-pointer transition-all duration-250 ${
                      isActive 
                        ? `${stepColors.bg} ${stepColors.border}` 
                        : isCompleted
                        ? 'bg-success/5 border-success/20' :'bg-background border-border hover:border-primary/30'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted 
                        ? 'bg-success/10' 
                        : isActive 
                        ? stepColors.bg 
                        : 'bg-muted'
                    }`}>
                      {isCompleted ? (
                        <Icon name="Check" size={24} color="var(--color-success)" />
                      ) : (
                        <Icon 
                          name={step.icon} 
                          size={24} 
                          color={isActive ? `var(--color-${step.color})` : 'var(--color-muted-foreground)'} 
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-semibold ${
                          isActive ? stepColors.text : isCompleted ? 'text-success' : 'text-foreground'
                        }`}>
                          Step {step.id}: {step.title}
                        </h3>
                        <span className={`text-sm px-2 py-1 rounded ${
                          isActive ? stepColors.bg : 'bg-muted'
                        } ${isActive ? stepColors.text : 'text-muted-foreground'}`}>
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      
                      {/* Sub-steps for active step */}
                      {isActive && (
                        <div className="space-y-2">
                          {step.subSteps.map((subStep, subIndex) => (
                            <div key={subIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{subStep}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="flex-shrink-0">
                        <Icon name="ChevronRight" size={20} color={`var(--color-${step.color})`} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Visualization */}
          <div className="space-y-6">
            <div className={`rounded-lg border-2 ${colors.border} overflow-hidden card-shadow`}>
              {/* Step Header */}
              <div className={`${colors.bg} p-4 border-b ${colors.border}`}>
                <div className="flex items-center justify-between">
                  <h4 className={`font-semibold ${colors.text}`}>
                    {activeStepData.title} Demo
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Interactive</span>
                  </div>
                </div>
              </div>

              {/* Step Visualization */}
              <div className="p-6 bg-background min-h-80">
                {activeStep === 1 && (
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Chrome" size={48} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">
                        Chrome Web Store
                      </h5>
                      <p className="text-muted-foreground mb-4">
                        Click "Add to Chrome" to install InboxPurge
                      </p>
                      <Button
                        variant="default"
                        iconName="Download"
                        iconPosition="left"
                        className={colors.button}
                      >
                        Add to Chrome
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ✓ Free forever • ✓ No credit card • ✓ 10 second setup
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Mail" size={48} color="var(--color-success)" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">
                        Connect to Gmail
                      </h5>
                      <p className="text-muted-foreground mb-4">
                        Securely authorize InboxPurge to access your Gmail
                      </p>
                      <Button
                        variant="default"
                        iconName="Link"
                        iconPosition="left"
                        className={colors.button}
                      >
                        Connect Gmail
                      </Button>
                    </div>
                    <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-sm text-success">
                        <Icon name="Shield" size={14} />
                        <span>Your privacy is protected - we never read email content</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-warning/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Sparkles" size={48} color="var(--color-warning)" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">
                        Start Cleaning
                      </h5>
                      <p className="text-muted-foreground mb-4">
                        Choose your cleanup options and watch the magic happen
                      </p>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-muted rounded p-2 text-xs">
                          <Icon name="UserX" size={16} className="mx-auto mb-1" />
                          <div>Unsubscribe</div>
                        </div>
                        <div className="bg-muted rounded p-2 text-xs">
                          <Icon name="Shield" size={16} className="mx-auto mb-1" />
                          <div>Block Spam</div>
                        </div>
                        <div className="bg-muted rounded p-2 text-xs">
                          <Icon name="Trash2" size={16} className="mx-auto mb-1" />
                          <div>Delete Old</div>
                        </div>
                      </div>
                      <Button
                        variant="default"
                        iconName="Play"
                        iconPosition="left"
                        className={colors.button}
                      >
                        Start Cleanup
                      </Button>
                    </div>
                    <div className="text-sm text-success">
                      ✨ Average cleanup time: 2 minutes
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="bg-background rounded-lg p-4 border border-border card-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Setup Progress</span>
                <span className="text-sm text-muted-foreground">
                  Step {activeStep} of {steps.length}
                </span>
              </div>
              <div className="bg-border rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-250"
                  style={{ width: `${(activeStep / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {activeStep === 1 ? '2:30' : activeStep === 2 ? '2:00' : '0:30'}
              </div>
              <p className="text-sm text-muted-foreground">
                Estimated time remaining
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-background border border-border rounded-lg p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 50,000+ professionals who've already transformed their email experience
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
              Free forever • No credit card required • Works with any Gmail account
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;