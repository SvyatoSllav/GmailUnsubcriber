import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'time',
      title: 'Save 2.5 Hours Weekly',
      description: 'Reclaim your time from email management and focus on what matters most',
      icon: 'Clock',
      color: 'primary',
      stats: '130 hours saved per year',
      animation: 'Stopwatch counting down from 2.5 hours to 5 minutes',
      details: [
        'Automated unsubscribe process',
        'Bulk email categorization',
        'Smart filtering rules',
        'One-click cleanup actions'
      ]
    },
    {
      id: 'productivity',
      title: 'Boost Focus by 89%',
      description: 'Eliminate distractions and maintain deep work sessions without email interruptions',
      icon: 'Target',
      color: 'success',
      stats: 'Average focus improvement',
      animation: 'Focus meter rising from 30% to 89%',
      details: [
        'Reduced email notifications',
        'Clean, organized inbox',
        'Priority email highlighting',
        'Distraction-free environment'
      ]
    },
    {
      id: 'stress',
      title: 'Reduce Email Stress',
      description: 'Transform email anxiety into confidence with a clean, manageable inbox',
      icon: 'Heart',
      color: 'warning',
      stats: '76% stress reduction reported',
      animation: 'Stress level dropping from high to low',
      details: [
        'Inbox zero achievement',
        'Automated email sorting',
        'Clear action priorities',
        'Peace of mind guarantee'
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
          hover: 'hover:bg-primary/20'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20',
          hover: 'hover:bg-success/20'
        };
      case 'warning':
        return {
          bg: 'bg-warning/10',
          text: 'text-warning',
          border: 'border-warning/20',
          hover: 'hover:bg-warning/20'
        };
      default:
        return {
          bg: 'bg-muted',
          text: 'text-foreground',
          border: 'border-border',
          hover: 'hover:bg-muted'
        };
    }
  };

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your <span className="text-primary">Email Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the life-changing benefits that 50,000+ professionals experience daily with InboxPurge
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const colors = getColorClasses(benefit.color);
            const isHovered = hoveredBenefit === benefit.id;

            return (
              <div
                key={benefit.id}
                className={`bg-background rounded-lg border-2 p-8 transition-all duration-250 cursor-pointer card-shadow ${
                  isHovered ? `${colors.border} ${colors.hover}` : 'border-border hover:border-primary/30'
                }`}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mx-auto mb-4 transition-all duration-250 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    <Icon 
                      name={benefit.icon} 
                      size={32} 
                      color={`var(--color-${benefit.color})`} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>

                {/* Animation Demo */}
                <div className={`${colors.bg} rounded-lg p-4 mb-6 min-h-24 flex items-center justify-center transition-all duration-250`}>
                  {isHovered ? (
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                        {benefit.id === 'time' && '⏱️ 5 min'}
                        {benefit.id === 'productivity' && '🎯 89%'}
                        {benefit.id === 'stress' && '😌 Low'}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {benefit.animation}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className={`text-lg font-semibold ${colors.text}`}>
                        {benefit.stats}
                      </div>
                    </div>
                  )}
                </div>

                {/* Feature Details */}
                <div className="space-y-2">
                  {benefit.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} color="var(--color-success)" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Action */}
                {isHovered && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                      <Icon name="MousePointer" size={14} />
                      <span>Click to see demo</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-background rounded-lg border border-border overflow-hidden card-shadow">
          <div className="p-6 border-b border-border">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Before vs After InboxPurge
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Aspect</th>
                  <th className="text-center p-4 font-semibold text-destructive">Before</th>
                  <th className="text-center p-4 font-semibold text-success">After</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Daily Email Management</td>
                  <td className="p-4 text-center text-destructive">2.5 hours</td>
                  <td className="p-4 text-center text-success">5 minutes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Inbox Count</td>
                  <td className="p-4 text-center text-destructive">15,000+ emails</td>
                  <td className="p-4 text-center text-success">Under 50 emails</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Unsubscribe Process</td>
                  <td className="p-4 text-center text-destructive">Manual, one by one</td>
                  <td className="p-4 text-center text-success">Bulk, one click</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Email Stress Level</td>
                  <td className="p-4 text-center text-destructive">High anxiety</td>
                  <td className="p-4 text-center text-success">Peace of mind</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Focus Quality</td>
                  <td className="p-4 text-center text-destructive">Constantly interrupted</td>
                  <td className="p-4 text-center text-success">Deep work sessions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Real Results from Real Users
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Report improved productivity</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="text-3xl font-bold text-success mb-2">2.3M</div>
              <p className="text-muted-foreground">Emails cleaned daily</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="text-3xl font-bold text-warning mb-2">4.8★</div>
              <p className="text-muted-foreground">Chrome Store rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;