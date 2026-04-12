import React from 'react';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

/* ------------------ Certification Card ------------------ */
const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl shadow-md hover:shadow-lg transition-all p-10 md:p-12">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
            <Award className="text-white" size={38} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {cert.name}
            </h3>
            <p className="text-sky-400 font-semibold mb-3 text-2xl">
              {cert.issuer}
            </p>

            <div className="flex items-center gap-2 text-2xl text-slate-200">
              <Calendar size={30} />
              <span>{cert.date}</span>
            </div>
          </div>
        </div>

        {/* Verify link (optional) */}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sky-400 hover:text-sky-300 text-lg font-medium"
          >
            Verify <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
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
      credentialUrl: null
    },
    {
      id: 2,
      name: "Computing for Career Development",
      issuer: "University of Colombo School of Computing (UCSC), Colombo",
      date: "2023",
      credentialUrl: null
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0b1d2a]">
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-8xl md:text-7xl font-bold text-white mb-5">
            Certifications
          </h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-6xl mx-auto text-4xl md:text-3xl">
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
            <p className="text-5xl font-bold text-white">
              {certifications.length}
            </p>
            <p className="text-slate-200 text-3xl">Courses Completed</p>
          </div>

          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
            <Shield className="text-green-400 mx-auto mb-4" size={40} />
            <p className="text-5xl font-bold text-white">
              {certifications.length}
            </p>
            <p className="text-slate-200 text-3xl">Valid Certifications</p>
          </div>

          <div className="bg-[#0f2232] border border-sky-500/25 rounded-2xl p-8 text-center shadow-sm">
            <Calendar className="text-purple-400 mx-auto mb-4" size={40} />
            <p className="text-5xl font-bold text-white">
              {new Date().getFullYear()}
            </p>
            <p className="text-slate-200 text-3xl">Latest Learning Year</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-[#0f2232] border border-sky-500/25 rounded-2xl p-10 text-white">
          <h3 className="text-4xl font-bold mb-3">
            Continuous Learning Mindset
          </h3>
          <p className="text-slate-200 text-2xl">
            I actively follow courses and certifications to improve my skills and
            prepare for internship and entry-level software development roles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;