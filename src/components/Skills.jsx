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

const getSkillImagePath = (skillName) => {
  const name = skillName.trim();
  const normalized = name.toLowerCase().replace(/\s+/g, '');

  const imageMap = {
    java: '/images/skills/java.png',
    python: '/images/skills/python.png',
    c: '/images/skills/C.png',
    'c#': '/images/skills/C-sharp.png',
    'c-sharp': '/images/skills/C-sharp.png',
    csharp: '/images/skills/C-sharp.png',
    javascript: '/images/skills/javascript.png',
    kotlin: '/images/skills/kotlin.png',
    sql: '/images/skills/sql.png',
    html: '/images/skills/html.png',
    css: '/images/skills/css.png',
    'tailwindcss': '/images/skills/tailwindcss.png',
    'tailwind css': '/images/skills/tailwindcss.png',
    react: '/images/skills/react.png',
    'node.js': '/images/skills/nodejs.png',
    nodejs: '/images/skills/nodejs.png',
    'springboot': '/images/skills/springboot.png',
    'spring boot': '/images/skills/springboot.png',
    '.net': '/images/skills/dotnet.png',
    dotnet: '/images/skills/dotnet.png',
    vite: '/images/skills/vite.png',
    mysql: '/images/skills/mysql.png',
    postgresql: '/images/skills/postgresql.png',
    mongodb: '/images/skills/mongodb.png',
    supabase: '/images/skills/supabase.png',
    firebase: '/images/skills/firebase.png',
    azure: '/images/skills/azure.png',
    aws: '/images/skills/AWS.png',
    docker: '/images/skills/docker.png',
    jenkins: '/images/skills/jenkins.png',
    github: '/images/skills/github.png',
    linux: '/images/skills/linux.png',
    ubuntu: '/images/skills/ubuntu.png',
    grafana: '/images/skills/grafana.png',
    selenium: '/images/skills/Selenium.png',
    jmeter: '/images/skills/jmeter.png',
    k6: '/images/skills/k6.png',
    junit: '/images/skills/junit.png',
    postman: '/images/skills/postman.png',
    android: '/images/skills/android.png',
    'androidstudio': '/images/skills/android-studio.png',
    'android studio': '/images/skills/android-studio.png',
    tensorflow: '/images/skills/tensorflow.png',
    opencv: '/images/skills/opencv.png',
    figma: '/images/skills/figma.png',
    balsamiq: '/images/skills/balsamiq.png',
    canva: '/images/skills/canva.png',
    blender: '/images/skills/blender.png',
    unity: '/images/skills/unity.png',
    'unity3d': '/images/skills/unity.png',
    agile: '/images/skills/agile.png',
    jira: '/images/skills/jira.png'
  };

  return encodeURI(imageMap[normalized] || '') || null;
};

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
  const customImage = getSkillImagePath(skill.name);

  return (
    <div className="flex items-center justify-center rounded-xl border border-sky-500/20 bg-white px-3 py-3 w-[72px] h-[72px] shadow-sm">
      {customImage ? (
        <img
          src={customImage}
          alt={`${skill.name} icon`}
          className="w-full h-full object-contain p-1"
        />
      ) : (
        <div className="w-10 h-10 rounded-lg bg-sky-500/15 text-sky-300 flex items-center justify-center border border-sky-500/30">
          <Icon size={22} />
        </div>
      )}
    </div>
  );
};

const SoftSkillItem = ({ skill }) => (
  <span className="px-4 py-2 rounded-full border border-sky-500/30 bg-slate-900/50 text-slate-100 text-base md:text-lg font-medium whitespace-nowrap">
    {skill.name}
  </span>
);

/* ================= Skill Card ================= */

const SkillCard = ({ category, items, subcategories }) => {
  const isSoftSkills = category.toLowerCase() === 'soft skills';

  return (
    <div className="bg-[#0f2232] border border-sky-500/30 rounded-2xl p-10 md:p-12 shadow-[0_10px_30px_rgba(2,10,20,0.4)] w-full">
      <h3 className="text-lg md:text-xl font-semibold text-slate-100 uppercase tracking-widest mb-8">
        {category}
      </h3>

      <div>
        {isSoftSkills ? (
          <div className="flex flex-wrap gap-3">
            {items.map((skill, index) => (
              <SoftSkillItem key={index} skill={skill} />
            ))}
          </div>
        ) : subcategories && subcategories.length > 0 ? (
          <div className="space-y-8">
            {subcategories.map((sub, i) => (
              <div key={i}>
                <h4 className="text-base md:text-lg font-semibold text-sky-200 uppercase tracking-[0.2em] mb-4 pb-2 border-b border-sky-500/20">
                  {sub.title}
                </h4>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {sub.items.map((skill, idx) => (
                    <SkillItem key={idx} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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

  const technicalSkillsGroup = skills.find((group) => group.category === 'Technical Skills');
  const softSkillsGroup = skills.find((group) => group.category === 'Soft Skills');

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
        <div className="space-y-10 mb-24">
          {technicalSkillsGroup && (
            <SkillCard
              category={technicalSkillsGroup.category}
              items={technicalSkillsGroup.items || []}
              subcategories={technicalSkillsGroup.subcategories || []}
            />
          )}

          {softSkillsGroup && (
            <SkillCard
              category={softSkillsGroup.category}
              items={softSkillsGroup.items || []}
              subcategories={[]}
            />
          )}
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