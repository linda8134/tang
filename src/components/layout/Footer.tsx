import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="bg-secondary py-12">
      <Container>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="px-12 sm:px-4">
                <h3 className="text-white text-center font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href} className='text-center'>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-center"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 Particle Network. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 