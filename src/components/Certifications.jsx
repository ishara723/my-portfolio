import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

/* ------------------ Certification Card ------------------ */
const CertificationCard = ({ cert }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {cert.image ? (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="w-full md:w-72 flex-shrink-0 overflow-hidden rounded-xl border border-sky-500/30 bg-slate-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <img
                src={cert.image}
                alt={`${cert.name} certificate`}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-200 hover:scale-105"
              />
            </button>
          ) : (
            <div className="w-full md:w-72 h-56 md:h-64 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="text-white" size={42} />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sky-400 font-semibold text-xl mb-3">
                  {cert.issuer}
                </p>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 text-lg font-medium whitespace-nowrap"
                >
                  Verify <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div className="flex items-center gap-2 text-xl text-slate-200">
              <Calendar size={24} />
              <span>{cert.date}</span>
            </div>

            {cert.credentialId && (
              <div className="mt-4 text-lg text-slate-300">
                <span className="font-medium text-slate-100">Credential ID:</span> {cert.credentialId}
              </div>
            )}
          </div>
        </div>
      </div>

      {isExpanded && cert.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute -top-4 right-0 text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none"
              aria-label="Close certificate image"
            >
              ×
            </button>
            <img
              src={cert.image}
              alt={`${cert.name} certificate enlarged`}
              className="w-full max-h-[85vh] object-contain rounded-xl border border-sky-500/30 bg-slate-900 shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

/* ------------------ Main Component ------------------ */
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Web Designing & Fundamentals of Web Development",
      issuer: "Zonal Computer Resource Centre, Taxila Central College, Horana",
      date: "2020",
      credentialUrl: null,
      image: "/images/certificates/web-designing.jpg"
    },
    {
      id: 2,
      name: "Computing for Career Development",
      issuer: "University of Colombo School of Computing (UCSC), Colombo",
      date: "2023",
      credentialUrl: null,
      image: "/images/certificates/computing-career-development.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0b1d2a]">
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Certifications
          </h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-6xl mx-auto text-lg md:text-xl">
            Courses and certifications completed to strengthen my technical foundation and support my career growth in software development.
          </p>
        </div>

        {/* List */}
        <div className="space-y-6">
          {certifications.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
            <Award className="text-sky-400 mx-auto mb-4" size={40} />
            <p className="text-4xl font-bold text-white">
              {certifications.length}
            </p>
            <p className="text-slate-200 text-2xl">Courses Completed</p>
          </div>

          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
            <Shield className="text-green-400 mx-auto mb-4" size={40} />
            <p className="text-4xl font-bold text-white">
              {certifications.length}
            </p>
            <p className="text-slate-200 text-2xl">Valid Certifications</p>
          </div>

          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
            <Calendar className="text-purple-400 mx-auto mb-4" size={40} />
            <p className="text-4xl font-bold text-white">
              {new Date().getFullYear()}
            </p>
            <p className="text-slate-200 text-2xl">Latest Learning Year</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-[#0f2232] border border-sky-500/25 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-3">
            Continuous Learning Mindset
          </h3>
          <p className="text-slate-200 text-xl">
            I actively follow courses and certifications to improve my skills and
            prepare for internship and entry-level software development roles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;