import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  companyLogo?: string;
  headquarterCity?: string;
  address?: string;
  email?: string;
  phone?: string;
  sections?: FooterSection[];
  legalLinks?: FooterLink[];
  backgroundColor?: string;
}

/**
 * Enterprise Footer Component
 * Corporate, trustworthy, investor-ready
 *
 * Design Philosophy:
 * - Structured layout = trust
 * - Predictable navigation = credibility
 * - No distractions = seriousness
 * - Annual report quality
 */
const Footer: React.FC<FooterProps> = ({
  companyName = 'MPS Enterprise',
  companyDescription = 'A leading manufacturing and technology-driven organization delivering scalable solutions across industries.',
  companyLogo,
  headquarterCity = 'New Delhi, India',
  address = 'Corporate Office, New Delhi, India',
  email = 'info@mbgenterprise.com',
  phone = '+91 11 4567 8900',
  sections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: ROUTES.ABOUT },
        { label: 'Business Divisions', href: '/business' },
        { label: 'Industries We Serve', href: '/industries' },
        { label: 'Sustainability / ESG', href: '/sustainability' },
      ],
    },
    {
      title: 'Investors & Careers',
      links: [
        { label: 'Investor Relations', href: '/investors' },
        { label: 'Financial Reports', href: '/investors/reports' },
        { label: 'Corporate Governance', href: '/investors/governance' },
        { label: 'Careers', href: ROUTES.CAREERS },
      ],
    },
    {
      title: 'Contact & Support',
      links: [
        { label: 'Contact Us', href: ROUTES.CONTACT },
        { label: 'Customer Support', href: '/support' },
        { label: 'Media Enquiries', href: '/media' },
        { label: 'Partner With Us', href: '/partners' },
      ],
    },
  ],
  legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
  backgroundColor = 'bg-gray-900',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${backgroundColor} text-gray-300`}>
      {/* Top Footer - Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-1">
            {/* Logo */}
            {companyLogo ? (
              <img
                src={companyLogo}
                alt={`${companyName} Logo`}
                className="h-10 mb-6 filter brightness-0 invert opacity-90"
              />
            ) : (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{companyName}</h3>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{companyDescription}</p>

            {/* Headquarters */}
            {headquarterCity && (
              <p className="text-xs text-gray-500 font-medium">{headquarterCity}</p>
            )}
          </div>

          {/* Column 2-4: Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information (Alternative placement - below grid) */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="text-gray-500 block mb-1">Address</span>
              <span className="text-gray-400">{address}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Email</span>
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {email}
              </a>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Phone</span>
              <a
                href={`tel:${phone}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer - Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} {companyName}. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
