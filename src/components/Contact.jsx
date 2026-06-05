// src/components/Contact.jsx

import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';

const Contact = () => {
  const personal = {
    name: "Ishara Hewawitharana",
    email: "hewawitharanaishara@gmail.com",
    phone: "0768792088",
    location: "Handapangoda, Sri Lanka"
  };

  const social = {
    linkedin: "www.linkedin.com/in/ishara-hewawitharana-701539333",
    github: "https://github.com/ishara723"
  };

  // Contact form removed per request; only static contact info remains.

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-28 bg-[#0b1d2a]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Get In Touch
          </h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-9xl mx-auto text-lg md:text-xl">
            Interested in internships, collaborations, or projects?  
            Feel free to reach out I’d love to connect.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered column */}
          <div className="w-full max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-3 mb-7">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return method.href ? (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-5 bg-[#0f2232] border border-sky-500/25 rounded-2xl hover:shadow-md transition"
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-base text-slate-300">{method.label}</p>
                      <p className="font-semibold text-white text-lg">{method.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-4 p-5 bg-[#0f2232] border border-sky-500/25 rounded-2xl">
                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-base text-slate-300">{method.label}</p>
                      <p className="font-semibold text-white text-lg">{method.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Find Me Online
              </h4>
              <div className="flex gap-4">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0f2232] border border-sky-500/25 rounded-xl flex items-center justify-center text-slate-200 hover:text-sky-400 hover:shadow-md transition"
                >
                  <Linkedin size={30} />
                </a>

                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0f2232] border border-sky-500/25 rounded-xl flex items-center justify-center text-slate-200 hover:text-sky-400 hover:shadow-md transition"
                >
                  <Github size={30} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-green-500/10 rounded-2xl border border-green-500/30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-white text-xl">
                  Open to Internship Opportunities
                </span>
              </div>
              <p className="text-base text-slate-300">
                Actively seeking internships and entry-level software roles
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;