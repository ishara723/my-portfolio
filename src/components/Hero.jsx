// src/components/Hero.jsx

import React from 'react';
import { Mail, Phone, Linkedin, Github, Download, MapPin, Globe } from 'lucide-react';

const Hero = ({ data }) => {
  const { personal } = data;

  const contactButtons = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personal.email}`,
      color: 'bg-white text-blue-600 hover:bg-blue-50',
    },
    {
      icon: Phone,
      label: 'Call',
      href: `tel:${personal.phone}`,
      color: 'bg-white text-blue-600 hover:bg-blue-50',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://${personal.linkedin}`,
      color: 'bg-white text-blue-600 hover:bg-blue-50',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: `https://${personal.github}`,
      color: 'bg-white text-blue-600 hover:bg-blue-50',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0b1d2a] text-white pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-[2000px] mx-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="text-center md:text-left">
            {/* Availability Badge */}
            <div className="mb-6 flex justify-center md:justify-start">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-base md:text-lg font-medium">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-10xl lg:text-9xl font-bold mb-6 leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-3xl md:text-6xl mb-8 text-blue-100 font-light">
              {personal.title}
            </h2>

            {/* Location & Website */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-blue-100 text-lg md:text-3xl justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={22} />
                <span>{personal.location}</span>
              </div>

              {personal.website && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Globe size={22} />
                    <a
                      href={`https://${personal.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {personal.website}
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
              {contactButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <a
                    key={index}
                    href={button.href}
                    target={button.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      button.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all transform hover:scale-105 ${button.color} shadow-lg`}
                  >
                    <Icon size={22} />
                    <span className="text-base md:text-lg font-medium">
                      {button.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Download Resume */}
            <div className="flex justify-center md:justify-start">
              <a
                href="/documents/CV.pdf"
                download
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 text-lg md:text-xl rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold shadow-xl"
              >
                <Download size={24} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 md:w-[780px] md:h-[780px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzk0YTNiOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjgwIiBmaWxsPSIjZmZmIiBmb250LWZhbWlseT0iQXJpYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllOPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-4 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;