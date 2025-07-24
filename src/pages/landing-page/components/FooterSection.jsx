import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#benefits' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Chrome Extension', href: 'https://chrome.google.com/webstore' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: 'mailto:support@inboxpurge.com' },
      { name: 'Live Chat', href: '/chat' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/inboxpurge' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/inboxpurge' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/inboxpurge' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/inboxpurge' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-foreground">InboxPurge</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The only Chrome extension that combines mass unsubscribe, email blocking, and bulk deletion. 
              Transform your chaotic inbox into an organized productivity powerhouse.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-success">435M+</div>
                <div className="text-xs text-muted-foreground">Emails Cleaned</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} InboxPurge. All rights reserved.
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={14} color="var(--color-success)" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Lock" size={14} color="var(--color-primary)" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Award" size={14} color="var(--color-warning)" />
                <span>Chrome Verified</span>
              </div>
            </div>

            {/* Chrome Web Store Link */}
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-primary hover:underline"
            >
              <Icon name="ExternalLink" size={14} />
              <span>View in Chrome Store</span>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              InboxPurge is not affiliated with Google Inc. Gmail is a trademark of Google Inc.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ for email productivity • Built for Chrome • Trusted by professionals worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;