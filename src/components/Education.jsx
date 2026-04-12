import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users
} from 'lucide-react';

/* ------------------ Education Card ------------------ */
const EducationCard = ({ edu }) => {
  return (
    <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 md:p-10">
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className="hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="text-white" size={30} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl md:text-xl font-bold text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-3xl text-sky-400 font-semibold mb-2">
              {edu.field}
            </p>
            <p className="text-2xl text-slate-200 mb-3">
              {edu.institution}
            </p>

            <div className="flex flex-wrap gap-5 text-xl text-slate-200">
              <div className="flex items-center gap-1">
                <MapPin size={26} />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={23} />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="bg-green-500/10 text-green-200 px-5 py-3 rounded-xl border border-green-500/30 text-xl font-medium">
              Undergraduate – Ongoing
            </div>
          </div>

          {/* Relevant Coursework */}
          {edu.relevantCoursework?.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 font-semibold text-slate-100 mb-4 text-2xl">
                <BookOpen size={22} className="text-sky-400" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.relevantCoursework.map((course, index) => (
                  <span
                    key={index}
                    className="bg-slate-900 text-slate-300 px-4 py-2 rounded-full text-xl"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {edu.activities?.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-slate-100 mb-4 text-2xl">
                <Users size={22} className="text-sky-400" />
                Activities & Learning
              </h4>
              <ul className="space-y-2">
                {edu.activities.map((activity, index) => (
                  <li key={index} className="text-slate-200 flex items-start gap-3 text-xl">
                    <span className="text-sky-400 mt-1">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main Component ------------------ */
const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (Hons)",
      field: "Computer Science",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      location: "Malabe, Sri Lanka",
      period: "2024 – 2027",
      relevantCoursework: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering Principles",
        "Operating Systems",
        "Distributed Systems",
        "Web Application Development"
      ],
      activities: [
        "Academic Projects using Java, Spring Boot, and React",
        "Group-based software development assignments",
        "Continued learning through online courses and tutorials",
        "Labs and practical sessions to apply theoretical knowledge",
        "Competitive programming contests and hackathons"
      ]
    }
  ]; 

  return (
    <section id="education" className="py-24 md:py-28 bg-[#0b1d2a]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-8xl md:text-4xl font-bold text-white mb-5">
            Education
          </h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-5xl mx-auto text-4xl md:text-xl">
            My academic background and ongoing learning journey in computer science
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-6 md:px-12 xl:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
              <GraduationCap className="text-sky-400 mx-auto mb-4" size={40} />
              <p className="text-4xl font-bold text-white">1</p>
              <p className="text-slate-200 text-2xl">Degree Program</p>
            </div>

            <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
              <Award className="text-green-400 mx-auto mb-4" size={40} />
              <p className="text-4xl font-bold text-white">Ongoing</p>
              <p className="text-slate-200 text-2xl">Academic Status</p>
            </div>

            <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
              <BookOpen className="text-purple-400 mx-auto mb-4" size={40} />
              <p className="text-4xl font-bold text-white">5+</p>
              <p className="text-slate-200 text-2xl">Core CS Subjects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;