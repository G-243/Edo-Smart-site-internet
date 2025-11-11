'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#story', label: 'Notre Histoire' },
    { href: "/Services", label: 'Nos services' },
    { href: '/Portfolio', label: 'Portfolio' },
    { href: '/Avis', label: 'Avis' },
    { href: "/contact", label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    if (href === '/Portfolio') {
      window.location.href = '/Portfolio';
      return;
    }
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#011826] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-[#B96B25] transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B96B25] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#B96B25] transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B96B25] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#011826] z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg`}
      >
        <div className="flex flex-col items-start px-6 py-10 space-y-6">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left text-white hover:text-[#B96B25] transition-colors duration-200 py-2 font-medium"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="w-full text-left text-white hover:text-[#B96B25] transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
