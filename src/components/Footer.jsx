// src/components/Footer.jsx

import React from 'react';
import { Heart, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ data }) => {
  const { personal, social } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialIcons = [
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: social.github, label: 'GitHub' }
  ].filter(link => link.href);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-3xl font-bold mb-5">{personal.name}</h3>
            <p className="text-slate-300 mb-5 text-xl">
              {personal.title}
            </p>
            <p className="text-slate-300 text-lg">
              Building digital experiences with passion and precision. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-5">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact & Social */}
          <div>
            <h4 className="text-2xl font-semibold mb-5">Connect With Me</h4>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${personal.email}`}
                className="block text-slate-300 hover:text-white transition-colors text-lg"
              >
                {personal.email}
              </a>
              <p className="text-slate-300 text-lg">{personal.location}</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                    title={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-slate-300 text-lg text-center md:text-left">
              © {currentYear} {personal.name}. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-slate-300 text-lg flex items-center gap-2">
              Made by {personal.name.split(' ')[0]}
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-lg"
            >
              Back to top
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;