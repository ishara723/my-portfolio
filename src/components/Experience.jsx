import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceCard = ({ job, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
      )}

      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 ml-0 md:ml-16 relative">
        <div className="absolute -left-16 top-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
          <Briefcase className="text-white" size={24} />
        </div>

        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {job.title}
            </h3>
            <p className="text-lg text-blue-600 font-semibold mb-2">
              {job.company}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{job.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-600 mb-4">
          {job.description}
        </p>

        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-slate-700 font-semibold mb-2 hover:text-blue-600 transition-colors"
            >
              <span>Key Responsibilities</span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            {isExpanded && (
              <ul className="space-y-2 ml-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {job.achievements && job.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <span className="text-blue-600">🏆</span>
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {job.achievements.map((achievement, index) => (
                <li key={index} className="text-slate-600 flex items-start gap-3 pl-2">
                  <span className="text-blue-600 font-bold flex-shrink-0 mt-1">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {job.technologies && job.technologies.length > 0 && (
          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-semibold text-slate-700 mb-2 text-sm">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = ({ data }) => {
  const { experience } = data;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A journey of professional growth, impactful projects, and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <ExperienceCard
              key={job.id}
              job={job}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-3xl font-bold">
              {new Date().getFullYear() - new Date(experience[experience.length - 1]?.startDate || '2017').getFullYear()}+ Years
            </p>
            <p className="text-blue-100 text-sm">of Professional Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;