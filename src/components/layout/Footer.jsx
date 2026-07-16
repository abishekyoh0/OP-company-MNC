import React, { useState } from 'react';
import { FiActivity, FiGithub, FiTwitter, FiLinkedin, FiDisc, FiCheck } from 'react-icons/fi';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'OmniCloud Core', href: '#products' },
        { name: 'SafeGuard AI', href: '#products' },
        { name: 'flowState Telemetry', href: '#products' },
        { name: 'Multi-Cloud Engines', href: '#services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Developer Portal', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Status Monitor', href: '#' },
        { name: 'Platform Roadmap', href: '#timeline' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Corporate Vision', href: '#about' },
        { name: 'Infrastructure Specs', href: '#services' },
        { name: 'Customer Testimonials', href: '#testimonials' },
        { name: 'Partners Network', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Security Policy', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Service SLA SLA', href: '#' },
        { name: 'Privacy Ledger', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-bg-surface border-t border-border-main/50 pt-20 pb-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-premium opacity-[0.03] blur-3xl -z-10 rounded-full" />

      <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand Information & Newsletter Column */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-premium flex items-center justify-center text-white shadow-glow">
              <FiActivity className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="font-extrabold font-heading text-lg md:text-xl text-gradient tracking-tight">
              AETHERIS
            </span>
          </a>
          <p className="text-sm text-text-muted leading-relaxed max-w-sm">
            Deploying cloud orchestration, secure network nodes, and real-time telemetry systems for leading multinational companies worldwide.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Twitter"
            >
              <FiTwitter className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Discord"
            >
              <FiDisc className="w-4.5 h-4.5" />
            </a>
          </div>
          <form id="newsletter" onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-sm mt-2">
            <span className="text-xs font-semibold font-heading text-text-main/80 uppercase tracking-widest">
              Subscribe to System Logs
            </span>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="developer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="grow"
              />
              <Button type="submit" variant={subscribed ? 'success' : 'secondary'} className="px-4.5">
                {subscribed ? <FiCheck className="w-4 h-4" /> : 'Join'}
              </Button>
            </div>
            {subscribed && (
              <span className="text-xs font-semibold text-success tracking-wide">
                Linked successfully. Check inbox.
              </span>
            )}
          </form>
        </div>

        {/* Links Grid Column */}
        <div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <span className="text-xs font-bold font-heading text-text-main uppercase tracking-widest">
                {section.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-secondary hover:translate-x-0.5 transition-all duration-300 inline-block font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Border */}
      <div className=" mx-auto px-6 border-t border-border-main/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs font-medium text-text-muted">
          © {new Date().getFullYear()} Aetheris Systems Inc. All sovereign computing rights reserved.
        </span>

        {/* Social Icons List */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub"
          >
            <FiGithub className="w-4.5 h-4.5" />
          </a>
          <a
            href="#"
            className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Twitter"
          >
            <FiTwitter className="w-4.5 h-4.5" />
          </a>
          <a
            href="#"
            className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="#"
            className="p-2 border border-border-main/50 rounded-full text-text-muted hover:text-secondary hover:bg-bg-surface-hover hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Discord"
          >
            <FiDisc className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
