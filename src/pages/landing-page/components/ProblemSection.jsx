import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [currentInboxState, setCurrentInboxState] = useState('cluttered');
  const [emailCount, setEmailCount] = useState(15847);
  const [weeklyHours, setWeeklyHours] = useState(2.5);
  const [yearlyCost, setYearlyCost] = useState(3250);

  const mockEmails = [
    { id: 1, sender: "Newsletter Daily", subject: "Your daily dose of spam you never asked for", time: "2m ago", type: "spam" },
    { id: 2, sender: "Promo Alerts", subject: "URGENT: 50% OFF Everything (Again)", time: "5m ago", type: "promo" },
    { id: 3, sender: "Social Updates", subject: "47 people you barely know did something", time: "8m ago", type: "social" },
    { id: 4, sender: "Marketing Blast", subject: "We miss you! Come back for 70% off", time: "12m ago", type: "promo" },
    { id: 5, sender: "Auto Notifications", subject: "Your account statement is ready (again)", time: "15m ago", type: "notification" },
    { id: 6, sender: "Subscription Service", subject: "You\'re still subscribed to this thing", time: "18m ago", type: "subscription" },
    { id: 7, sender: "Deal Hunter", subject: "Flash sale ends in 3 hours (it won't)", time: "22m ago", type: "promo" },
    { id: 8, sender: "Weekly Digest", subject: "Here's what you missed (nothing important)", time: "25m ago", type: "newsletter" }
  ];

  const cleanEmails = [
    { id: 1, sender: "Sarah Johnson", subject: "Project update - Q4 deliverables", time: "1h ago", type: "work", important: true },
    { id: 2, sender: "Team Lead", subject: "Meeting scheduled for tomorrow 2 PM", time: "2h ago", type: "work", important: true },
    { id: 3, sender: "Client Portal", subject: "Invoice #1234 payment received", time: "3h ago", type: "business", important: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentInboxState === 'cluttered') {
        setEmailCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentInboxState]);

  const toggleInboxState = () => {
    setCurrentInboxState(prev => prev === 'cluttered' ? 'clean' : 'cluttered');
  };

  const getEmailTypeColor = (type) => {
    switch (type) {
      case 'spam': return 'bg-destructive/10 border-destructive/20';
      case 'promo': return 'bg-warning/10 border-warning/20';
      case 'social': return 'bg-secondary/10 border-secondary/20';
      case 'work': return 'bg-success/10 border-success/20';
      case 'business': return 'bg-primary/10 border-primary/20';
      default: return 'bg-muted border-border';
    }
  };

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Your Inbox is <span className="text-destructive">Drowning You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The average professional receives 121 emails per day. That's 44,165 emails per year. 
            How many are actually important?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Inbox Simulator */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                {currentInboxState === 'cluttered' ? 'Your Current Reality' : 'After InboxPurge'}
              </h3>
              <button
                onClick={toggleInboxState}
                className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="RotateCcw" size={16} />
                <span>Toggle View</span>
              </button>
            </div>

            {/* Gmail-like Interface */}
            <div className="bg-background rounded-lg border border-border overflow-hidden card-shadow">
              {/* Gmail Header */}
              <div className="bg-card border-b border-border p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} color="var(--color-primary)" />
                  <span className="font-medium">Inbox</span>
                  <span className="text-sm text-muted-foreground">
                    ({currentInboxState === 'cluttered' ? emailCount.toLocaleString() : '3'})
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Search" size={16} />
                  <Icon name="Settings" size={16} />
                </div>
              </div>

              {/* Email List */}
              <div className="max-h-96 overflow-y-auto">
                {currentInboxState === 'cluttered' ? (
                  <>
                    {mockEmails.map((email) => (
                      <div
                        key={email.id}
                        className={`p-4 border-b border-border hover:bg-muted/50 transition-colors ${getEmailTypeColor(email.type)}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="User" size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-foreground truncate">
                                {email.sender}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {email.time}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {email.subject}
                            </p>
                          </div>
                          <Icon name="Trash2" size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                    {/* Overflow indicator */}
                    <div className="p-4 text-center bg-destructive/5 border-t-2 border-destructive/20">
                      <p className="text-sm text-destructive font-medium">
                        + {(emailCount - 8).toLocaleString()} more emails below...
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {cleanEmails.map((email) => (
                      <div
                        key={email.id}
                        className={`p-4 border-b border-border hover:bg-muted/50 transition-colors ${getEmailTypeColor(email.type)}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="User" size={16} color="var(--color-success)" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-foreground truncate">
                                {email.sender}
                              </span>
                              <div className="flex items-center space-x-2">
                                {email.important && (
                                  <Icon name="Star" size={12} color="var(--color-warning)" />
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {email.time}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {email.subject}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="p-8 text-center bg-success/5">
                      <Icon name="CheckCircle" size={48} color="var(--color-success)" className="mx-auto mb-4" />
                      <p className="text-success font-medium">
                        Inbox cleaned! Only important emails remain.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Pain Point Statistics */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              The Hidden Cost of Email Chaos
            </h3>

            {/* Time Wasted */}
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} color="var(--color-destructive)" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Time Wasted Weekly</h4>
                  <p className="text-muted-foreground">Managing unwanted emails</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-destructive mb-2">
                {weeklyHours} hours
              </div>
              <p className="text-sm text-muted-foreground">
                That's 130 hours per year - over 3 work weeks!
              </p>
            </div>

            {/* Productivity Cost */}
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Icon name="DollarSign" size={24} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Annual Productivity Loss</h4>
                  <p className="text-muted-foreground">Based on $50/hour rate</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-warning mb-2">
                ${yearlyCost.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                Money lost to email management instead of real work
              </p>
            </div>

            {/* Stress Factor */}
            <div className="bg-background rounded-lg p-6 border border-border card-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={24} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Mental Overload</h4>
                  <p className="text-muted-foreground">Cognitive burden of clutter</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">
                89%
              </div>
              <p className="text-sm text-muted-foreground">
                Of professionals report email stress affects their work quality
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Ready to Break Free?
              </h4>
              <p className="text-muted-foreground mb-4">
                Join thousands who've reclaimed their productivity
              </p>
              <div className="text-2xl font-bold text-primary">
                {emailCount.toLocaleString()} emails cleaned today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;