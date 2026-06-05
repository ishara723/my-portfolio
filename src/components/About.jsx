// src/components/About.jsx

import React, { useState } from 'react';

const About = ({ data }) => {
  const { about, personal } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 md:py-28 bg-[#0b1d2a]">
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="w-24 h-2 bg-sky-500 mx-auto mt-4"></div>
        </div>

        {/* Card */}
        <div className="bg-[#0f2232] border border-sky-500/30 rounded-3xl p-10 md:p-12 shadow-[0_16px_40px_rgba(2,10,20,0.45)] w-full">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-sky-400/60 blur-sm"></div>
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-sky-500/40">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzE5MzA0MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjgwIiBmaWxsPSIjYWVjZmZmIiBmb250LWZhbWlseT0iQXJpYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj88L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {personal.title || 'Frontend Developer'}
            </h3>
            <p className="text-slate-200 leading-relaxed max-w-9xl text-lg md:text-xl">
              {about.summary ||
                'I’m an undergraduate Computer Science student with a strong interest in software development and problem-solving. I enjoy building full-stack applications using Java, Spring Boot, React, and databases, and I’m passionate about writing clean, efficient, and maintainable code.'}
            </p>

            {isExpanded && (
              <div className="mt-10 text-slate-200 max-w-5xl text-lg md:text-xl">
                {about.highlights && about.highlights.length > 0 && (
                  <ul className="grid gap-3 text-left">
                    {about.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {about.interests && about.interests.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sky-300 text-2xl uppercase tracking-[0.25em] mb-4">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {about.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-slate-900/60 border border-sky-500/25 text-slate-100 px-6 py-3 rounded-full text-lg"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="mt-8 px-8 py-3 rounded-full bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;