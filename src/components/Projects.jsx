// src/components/Projects.jsx

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github, Play, Star, X } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const images = Array.isArray(project.images)
    ? project.images
    : project.image
    ? [project.image]
    : [];

  const activeImage = images[activeImageIndex] || '';

  return (
    <div
      className="bg-[#0f2232] border border-sky-500/25 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <Star size={14} fill="currentColor" />
              Featured
            </span>
          </div>
        )}
        
        {activeImage ? (
          <button
            type="button"
            className="w-full h-full flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
            aria-label={`Open ${project.name} images`}
          >
            <img
              src={activeImage}
              alt={project.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzk0YTNiOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjZmZmIiBmb250LWZhbWlseT0iQXJpYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlByb2plY3QgSW1hZ2U8L3RleHQ+PC9zdmc+';
              }}
            />
          </button>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300 text-lg">
            No image
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Play size={16} />
                Video
              </a>
            )}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="px-6 pb-4">
          <div className="flex gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                  setIsModalOpen(true);
                }}
                className={`h-16 w-20 overflow-hidden rounded-md border transition-colors ${
                  index === activeImageIndex
                    ? 'border-sky-400'
                    : 'border-slate-700 hover:border-slate-500'
                }`}
                aria-label={`Select image ${index + 1} for ${project.name}`}
              >
                <img
                  src={image}
                  alt={`${project.name} preview ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Project Details */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-lg text-sky-400 font-medium">{project.tagline}</p>
          <p className="text-md text-slate-400 mt-1">{project.date}</p>
        </div>

        {/* Description */}
        <p className={`text-slate-200 mb-4 text-lg ${showDetails ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xl font-bold text-slate-400 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {(showDetails ? project.features : project.features.slice(0, 3)).map((feature, index) => (
                <li key={index} className="text-lg text-slate-200 flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showDetails && (
          <>
            {/* Outcome */}
            <div className="mb-4 p-3 bg-slate-900/70 rounded-lg border border-sky-500/20">
              <p className="text-xl text-slate-200">
                <span className="font-semibold text-sky-400">Impact:</span> {project.outcome}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-bold text-slate-400 uppercase tracking-wide mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-900 text-slate-200 px-3 py-1 rounded-full text-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="text-sky-400 text-lg font-semibold hover:text-sky-300 transition-colors"
          >
            {showDetails ? 'View Less' : 'View More Details'}
          </button>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        activeIndex={activeImageIndex}
        setActiveIndex={setActiveImageIndex}
        title={project.name}
      />
    </div>
  );
};

const ImageModal = ({ isOpen, onClose, images, activeIndex, setActiveIndex, title }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeImage = images[activeIndex] || '';

  if (typeof document === 'undefined') return null;

  return createPortal((
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image viewer`}
    >
      <div
        className="relative w-full max-w-6xl rounded-2xl border border-white/15 bg-slate-900/80 p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 md:right-4 md:top-4 rounded-full bg-white/10 p-2 text-slate-100 hover:bg-white/20 transition-colors"
          aria-label="Close image viewer"
        >
          <X size={20} />
        </button>
        <div className="flex items-center justify-center">
          <img
            src={activeImage}
            alt={title}
            className="max-h-[82vh] w-full object-contain rounded-xl"
          />
        </div>
        {images.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-16 w-20 overflow-hidden rounded-md border transition-colors ${
                  index === activeIndex
                    ? 'border-sky-400'
                    : 'border-slate-700 hover:border-slate-500'
                }`}
                aria-label={`Select image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  ), document.body);
};

const Projects = ({ data }) => {
  const { projects } = data;
  const [filter, setFilter] = useState('all'); // 'all', 'featured'

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-24 md:py-28 bg-[#0b1d2a]">
      <div className="max-w-none px-6 md:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Projects</h2>
          <div className="w-28 h-2 bg-sky-500 mx-auto mb-5"></div>
          <p className="text-slate-200 max-w-9xl mx-auto mb-8 text-lg md:text-xl">
            A showcase of my best work, demonstrating problem-solving abilities and technical expertise
          </p>

          {/* Filter Buttons */}
          <div className="inline-flex bg-[#0f2232] border border-sky-500/20 rounded-xl p-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-lg text-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-sky-500 text-slate-900'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-8 py-3 rounded-lg text-lg font-medium transition-colors ${
                filter === 'featured'
                  ? 'bg-sky-500 text-slate-900'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Featured ({projects.filter(p => p.featured).length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-300 text-2xl">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <p className="text-slate-300 mb-5 text-2xl">Want to see more of my work?</p>
          <a
            href="https://github.com/ishara723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-sky-500 text-slate-900 px-8 py-4 rounded-xl hover:bg-sky-400 transition-colors text-xl font-semibold"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;