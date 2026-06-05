// src/components/Skills.jsx
import React from 'react';
import {
  Code2,
  Coffee,
  Braces,
  FileCode2,
  Palette,
  Layers,
  Wind,
  Server,
  Network,
  Database,
  Leaf,
  MessageSquare,
  Users,
  Clock3,
  Briefcase,
  Lightbulb,
  RefreshCw,
  GitBranch,
  Github,
  Package,
  Send,
  Monitor
} from 'lucide-react';

/* ================= Skill Icon Resolver ================= */

const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();

  if (name.includes('java') && !name.includes('javascript')) return Coffee;
  if (name.includes('javascript')) return FileCode2;
  if (name === 'c') return Braces;
  if (name.includes('html')) return FileCode2;
  if (name.includes('css')) return Palette;
  if (name.includes('react')) return Layers;
  if (name.includes('tailwind')) return Wind;
  if (name.includes('spring boot')) return Server;
  if (name.includes('rest api')) return Network;
  if (name.includes('mysql')) return Database;
  if (name.includes('mongodb')) return Leaf;
  if (name.includes('communication')) return MessageSquare;
  if (name.includes('team')) return Users;
  if (name.includes('time management')) return Clock3;
  if (name.includes('leadership')) return Briefcase;
  if (name.includes('problem solving')) return Lightbulb;
  if (name.includes('adaptability')) return RefreshCw;
  if (name === 'git') return GitBranch;
  if (name === 'github') return Github;
  if (name === 'npm') return Package;
  if (name.includes('postman')) return Send;
  if (name.includes('vs code')) return Monitor;

  return Code2;
};

/* ================= Skill Item ================= */

const SkillItem = ({ skill }) => {
  const Icon = getSkillIcon(skill.name);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-sky-500/20 bg-slate-900/60 px-4 py-3 min-w-[170px]">
      <div className="w-9 h-9 rounded-lg bg-sky-500/15 text-sky-300 flex items-center justify-center border border-sky-500/30">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <span className="font-semibold text-sm md:text-base text-slate-100 whitespace-nowrap">
          {skill.name}
        </span>
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
              <div className="flex flex-wrap gap-3">
                {sub.items.map((skill, idx) => (
                  <SkillItem key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-wrap gap-3">
            {items.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
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
              <h3 className="text-2xl md:text-4xl font-bold text-white">
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