import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Is InboxPurge safe to use with my Gmail account?",
      answer: `Absolutely. InboxPurge is built with privacy-first architecture and follows industry-leading security standards:\n\n• We never read the content of your emails - only metadata like sender and subject\n• All processing happens locally in your browser\n• We're SOC 2 certified and GDPR compliant\n• Chrome Web Store verified and trusted by 50,000+ users\n• You can revoke access anytime through your Google Account settings`,
      category: "Security"
    },
    {
      id: 1,
      question: "What Gmail permissions does InboxPurge need?",
      answer: `InboxPurge requests minimal permissions to function effectively:\n\n• Read email metadata (sender, subject, date) - to identify cleanup candidates\n• Modify labels and filters - to organize and categorize emails\n• Delete emails - only when you explicitly choose to delete\n• Unsubscribe from lists - to process mass unsubscribe requests\n\nWe never request permission to compose, send, or read email content.`,
      category: "Privacy"
    },
    {
      id: 2,
      question: "Can I undo actions performed by InboxPurge?",
      answer: `Yes, most actions can be reversed:\n\n• Deleted emails go to Gmail's Trash folder (recoverable for 30 days)\n• Unsubscribe actions can be re-subscribed manually if needed\n• Blocked senders can be unblocked through Gmail settings\n• Email labels and filters can be modified or removed\n\nWe recommend reviewing suggested actions before confirming bulk operations.`,
      category: "Functionality"
    },
    {
      id: 3,
      question: "How much does InboxPurge cost?",
      answer: `InboxPurge is completely free to use:\n\n• No subscription fees or hidden costs\n• No credit card required for installation\n• All core features (unsubscribe, block, delete) are free\n• No limits on the number of emails you can clean\n• Free forever - we believe email productivity should be accessible to everyone\n\nWe may introduce premium features in the future, but the core cleanup functionality will always remain free.`,
      category: "Pricing"
    },
    {
      id: 4,
      question: "Does InboxPurge work with G Suite/Google Workspace accounts?",
      answer: `Yes, InboxPurge works with all types of Gmail accounts:\n\n• Personal Gmail accounts (@gmail.com)\n• G Suite/Google Workspace business accounts\n• Educational Gmail accounts\n• Custom domain Gmail accounts\n\nThe functionality is identical across all account types. However, some enterprise accounts may have administrator restrictions that could limit certain features.`,
      category: "Compatibility"
    },
    {
      id: 5,
      question: "How long does the cleanup process take?",
      answer: `Cleanup time depends on your inbox size:\n\n• Small inbox (under 1,000 emails): 30 seconds - 1 minute\n• Medium inbox (1,000 - 10,000 emails): 1 - 3 minutes\n• Large inbox (10,000+ emails): 3 - 10 minutes\n• Very large inbox (50,000+ emails): 10 - 30 minutes\n\nThe process runs in the background, so you can continue using Gmail normally during cleanup.`,
      category: "Performance"
    },
    {
      id: 6,
      question: "What happens if I uninstall InboxPurge?",
      answer: `Uninstalling is simple and clean:\n\n• All Gmail permissions are automatically revoked\n• No data remains on our servers (we don't store any anyway)\n• Your cleaned inbox stays organized\n• Gmail filters created by InboxPurge remain active (you can remove them manually)\n• You can reinstall anytime without losing your Gmail organization\n\nTo uninstall: Right-click the extension icon → "Remove from Chrome"`,
      category: "Installation"
    },
    {
      id: 7,
      question: "Can InboxPurge accidentally delete important emails?",
      answer: `InboxPurge has multiple safeguards to protect important emails:\n\n• Smart detection identifies potentially important emails and excludes them from bulk actions\n• Preview mode shows exactly what will be affected before any action\n• Confirmation dialogs for all bulk operations\n• Important emails (starred, from contacts, recent conversations) are automatically protected\n• All deletions go to Trash folder first, not permanent deletion\n\nYou have full control over what gets cleaned and can review everything before confirming.`,
      category: "Safety"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? -1 : id);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Security': return 'text-success';
      case 'Privacy': return 'text-primary';
      case 'Functionality': return 'text-warning';
      case 'Pricing': return 'text-secondary';
      case 'Compatibility': return 'text-primary';
      case 'Performance': return 'text-warning';
      case 'Installation': return 'text-secondary';
      case 'Safety': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about InboxPurge. Can't find what you're looking for? 
            <a href="mailto:support@inboxpurge.com" className="text-primary hover:underline ml-1">
              Contact our support team
            </a>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium bg-muted ${getCategoryColor(category)}`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            
            return (
              <div
                key={faq.id}
                className="bg-card border border-border rounded-lg overflow-hidden card-shadow transition-all duration-250 hover:border-primary/30"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(faq.category)} bg-muted`}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <Icon 
                      name={isOpen ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="transition-transform duration-250"
                    />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of InboxPurge
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="mailto:support@inboxpurge.com"
                className="flex items-center justify-center space-x-2 p-3 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Mail" size={16} />
                <span className="text-sm">Email Support</span>
              </a>
              
              <a
                href="/help-center"
                className="flex items-center justify-center space-x-2 p-3 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="HelpCircle" size={16} />
                <span className="text-sm">Help Center</span>
              </a>
              
              <a
                href="/live-chat"
                className="flex items-center justify-center space-x-2 p-3 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                <span className="text-sm">Live Chat</span>
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Zap" size={14} />
                  <span>Average response: 2 hours</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>4.9/5 satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;