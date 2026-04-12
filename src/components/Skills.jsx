// src/components/Skills.jsx
import React from 'react';

/* ================= Skill Progress Bar ================= */

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-base md:text-lg text-slate-200 mb-2.5">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-slate-400">{skill.level}%</span>
      </div>

      <div
        className="h-3.5 rounded-md bg-slate-900/70 border border-sky-500/30 overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

/* ================= Skill Card ================= */

const SkillCard = ({ category, items, subcategories }) => {
  return (
    <div className="bg-[#0f2232] border border-sky-500/30 rounded-2xl p-10 md:p-12 shadow-[0_10px_30px_rgba(2,10,20,0.4)] w-full">
      <h3 className="text-lg md:text-xl font-semibold text-slate-100 uppercase tracking-widest mb-8">
        {category}
      </h3>

      <div>
        {subcategories && subcategories.length > 0 ? (
          subcategories.map((sub, i) => (
            <div key={i} className="mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-sky-200 uppercase tracking-[0.2em] mb-5 pb-2 border-b border-sky-500/20">
                {sub.title}
              </h4>
              {sub.items.map((skill, idx) => (
                <SkillBar key={idx} skill={skill} />
              ))}
            </div>
          ))
        ) : (
          items.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))
        )}
      </div>
    </div>
  );
};

/* ================= Tool Badge ================= */

const ToolBadge = ({ name }) => {
  return (
    <div className="px-5 py-3 bg-slate-900/70 border border-sky-500/30 rounded-xl text-slate-200 text-sm md:text-base font-medium hover:border-sky-400 hover:scale-105 transition-all duration-300 text-center w-full">
      {name}
    </div>
  );
};

/* ================= Main Skills Section ================= */

const Skills = ({ data }) => {
  const { skills, toolsAndPlatforms } = data;

  return (
    <section id="skills" className="py-24 md:py-28 bg-[#0b1d2a]">
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        
        {/* ===== Section Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-5"></div>
        </div>

        {/* ===== Skills Grid ===== */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 justify-items-center mb-24">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              items={skillGroup.items || []}
              subcategories={skillGroup.subcategories || []}
            />
          ))}
        </div>

        {/* ===== Tools & Platforms Section ===== */}
        {toolsAndPlatforms && toolsAndPlatforms.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Tools & Platforms
              </h3>
              <div className="w-20 h-1 bg-sky-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {toolsAndPlatforms.map((tool, index) => (
                <ToolBadge key={index} name={tool} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;