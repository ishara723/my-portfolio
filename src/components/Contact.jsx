// src/components/Contact.jsx

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-7xl md:text-7xl font-bold text-white mb-5">
            Get In Touch
          </h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-9xl mx-auto text-3xl md:text-3xl">
            Interested in internships, collaborations, or projects?  
            Feel free to reach out I’d love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <h3 className="text-4xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return method.href ? (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-5 p-7 bg-[#0f2232] border border-sky-500/25 rounded-2xl hover:shadow-md transition"
                  >
                    <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="text-lg text-slate-300">{method.label}</p>
                      <p className="font-semibold text-white text-2xl">{method.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-5 p-7 bg-[#0f2232] border border-sky-500/25 rounded-2xl">
                    <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="text-lg text-slate-300">{method.label}</p>
                      <p className="font-semibold text-white text-2xl">{method.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-5">
                Find Me Online
              </h4>
              <div className="flex gap-4">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#0f2232] border border-sky-500/25 rounded-xl flex items-center justify-center text-slate-200 hover:text-sky-400 hover:shadow-md transition"
                >
                  <Linkedin size={38} />
                </a>

                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#0f2232] border border-sky-500/25 rounded-xl flex items-center justify-center text-slate-200 hover:text-sky-400 hover:shadow-md transition"
                >
                  <Github size={38} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 p-8 bg-green-500/10 rounded-2xl border border-green-500/30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-white text-3xl">
                  Open to Internship Opportunities
                </span>
              </div>
              <p className="text-xl text-slate-300">
                Actively seeking internships and entry-level software roles
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl shadow-md p-10">
            <h3 className="text-4xl font-bold text-white mb-8">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-white">Message Sent!</h4>
                <p className="text-slate-300 text-lg">
                  Thank you — I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-5 border border-sky-500/25 rounded-xl bg-slate-900 text-white placeholder:text-slate-400 text-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-5 border border-sky-500/25 rounded-xl bg-slate-900 text-white placeholder:text-slate-400 text-lg"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-5 border border-sky-500/25 rounded-xl bg-slate-900 text-white placeholder:text-slate-400 text-lg"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-5 border border-sky-500/25 rounded-xl bg-slate-900 text-white placeholder:text-slate-400 text-lg"
                />

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-slate-900 py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-sky-400 transition text-2xl font-semibold"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;