import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { ROUTES, SOCIAL_LINKS, CONTACT_INFO } from '@utils/constants';
import Container from '@components/Container/Container';

/**
 * Footer Component
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-gray-300">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-white">Enterprise Solutions</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading provider of enterprise-grade solutions, delivering innovation and excellence
              across industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.INDUSTRIES} className="hover:text-primary-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CAREERS} className="hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {CONTACT_INFO.PHONE}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT_INFO.ADDRESS}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={SOCIAL_LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-center text-sm">
          <p>
            © {currentYear} Enterprise Solutions. All rights reserved. | Designed with excellence
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
