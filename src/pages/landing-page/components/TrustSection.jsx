import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const trustBadges = [
    {
      id: 'chrome-verified',
      title: 'Chrome Web Store Verified',
      description: 'Officially verified by Google Chrome team',
      icon: 'Shield',
      color: 'success'
    },
    {
      id: 'gdpr-compliant',
      title: 'GDPR Compliant',
      description: 'Full compliance with European privacy regulations',
      icon: 'Lock',
      color: 'primary'
    },
    {
      id: 'soc2-certified',
      title: 'SOC 2 Certified',
      description: 'Industry-standard security and availability controls',
      icon: 'Award',
      color: 'warning'
    },
    {
      id: 'ssl-encrypted',
      title: 'SSL Encrypted',
      description: 'All data transmission protected with 256-bit encryption',
      icon: 'Key',
      color: 'secondary'
    }
  ];

  const privacyFeatures = [
    {
      title: 'We Never Read Your Emails',
      description: 'InboxPurge only processes email metadata (sender, subject, date) - never the actual content of your emails.',
      icon: 'EyeOff'
    },
    {
      title: 'Local Processing Only',
      description: 'All email analysis happens locally in your browser. Your email data never leaves your device.',
      icon: 'Smartphone'
    },
    {
      title: 'Minimal Permissions',
      description: 'We request only the minimum Gmail permissions needed for cleanup operations - no access to compose or send.',
      icon: 'Settings'
    },
    {
      title: 'Instant Revocation',
      description: 'Remove InboxPurge access anytime through your Google Account settings. All permissions are instantly revoked.',
      icon: 'UserX'
    },
    {
      title: 'No Data Storage',
      description: 'We don\'t store, backup, or retain any of your email data on our servers. Everything stays with you.',
      icon: 'Database'
    },
    {
      title: 'Open Source Audited',
      description: 'Our core algorithms are open source and regularly audited by security researchers.',
      icon: 'Code'
    }
  ];

  const securityStats = [
    { label: 'Users Trust Us', value: '50,000+', icon: 'Users' },
    { label: 'Security Incidents', value: '0', icon: 'ShieldCheck' },
    { label: 'Data Breaches', value: '0', icon: 'Lock' },
    { label: 'Uptime', value: '99.9%', icon: 'Activity' }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted text-foreground border-border';
    }
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Your <span className="text-primary">Privacy</span> is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand email contains your most sensitive information. That's why InboxPurge is built with privacy-first architecture and industry-leading security standards.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-card border-2 rounded-lg p-6 text-center card-shadow transition-all duration-250 hover:scale-105 ${getColorClasses(badge.color)}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                <Icon name={badge.icon} size={32} color={`var(--color-${badge.color})`} />
              </div>
              <h3 className="font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Privacy Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              How We Protect Your Data
            </h3>
            
            <div className="space-y-6">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Stats & Guarantees */}
          <div className="space-y-8">
            {/* Security Statistics */}
            <div className="bg-card border border-border rounded-lg p-6 card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Security Track Record
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {securityStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <Icon name={stat.icon} size={24} color="var(--color-success)" className="mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Our Privacy Guarantee
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you're not 100% satisfied with our privacy practices, we'll help you completely remove InboxPurge and all associated permissions within 24 hours.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <Icon name="Phone" size={14} />
                    <span>24/7 Privacy Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="bg-card border border-border rounded-lg p-6 card-shadow">
              <h4 className="font-semibold text-foreground mb-4">
                Compliance & Certifications
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">GDPR Compliance</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">Verified</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SOC 2 Type II</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">Certified</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ISO 27001</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">Compliant</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Chrome Web Store</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Security */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Have security questions? Our privacy team is here to help.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <a href="mailto:privacy@inboxpurge.com" className="flex items-center space-x-1 text-primary hover:underline">
                  <Icon name="Mail" size={14} />
                  <span>privacy@inboxpurge.com</span>
                </a>
                <a href="/privacy-policy" className="flex items-center space-x-1 text-primary hover:underline">
                  <Icon name="FileText" size={14} />
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;