'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  technologies: string[];
}

// Map technology names to their corresponding icon paths
const getTechIcon = (tech: string): string | null => {
  const techMap: { [key: string]: string } = {
    'Rust': '/icons/rust.png',
    'Python': '/icons/python.png',
    'TypeScript': '/icons/typescript.svg',
    'Docker': '/icons/docker.png',
    'Linux': '/icons/linux.png',
    'Next.js': '/icons/nextjs.svg',
    'Tailwind': '/icons/tailwind.png',
    'Neovim': '/icons/neovim.svg',
    'HTML': '/icons/html.png',
    'C': '/icons/c.png',
    'Lua': '/icons/lua.png',
    'LaTeX': '/icons/latex.png',
    'WASM': '/icons/wasm.png',
    'Git': '/icons/git.png',
  };
  
  // Check for exact match first
  if (techMap[tech]) {
    return techMap[tech];
  }
  
  // Check for partial matches (case insensitive) but avoid false matches
  const lowerTech = tech.toLowerCase();
  for (const [key, value] of Object.entries(techMap)) {
    const lowerKey = key.toLowerCase();
    // Only match if the key is a substantial part of the tech name (at least 3 chars)
    // and avoid matching single letters like 'C' unless it's an exact match
    if (lowerKey.length > 2 && (lowerKey.includes(lowerTech) || lowerTech.includes(lowerKey))) {
      return value;
    }
  }
  
  return null;
};

export default function ProjectShowcase({ 
  title, 
  description, 
  githubUrl, 
  demoUrl, 
  imageUrl, 
  technologies 
}: ProjectShowcaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Project Image/Demo */}
        <div className="relative">
          {imageUrl ? (
            <div 
              className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl cursor-pointer group transition-transform hover:scale-105"
              onClick={openModal}
            >
              {imageUrl.endsWith('.gif') ? (
                // For GIFs, use img tag to preserve animation
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={`${title} demonstration`}
                  className="w-full h-full object-cover transition-transform"
                />
              ) : (
                // For static images, use Next.js Image
                <Image
                  src={imageUrl}
                  alt={`${title} screenshot`}
                  fill
                  className="object-cover transition-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              
              {/* Click indicator overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // Placeholder if no image provided
            <div className="relative w-full aspect-video rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-400">Project Preview</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">{title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
          </div>

          {/* Technologies with icons */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Built with:</h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => {
                const iconPath = getTechIcon(tech);
                return (
                  <div
                    key={tech}
                    className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                  >
                    {iconPath && (
                      <div className="w-5 h-5 relative">
                        <Image
                          src={iconPath}
                          alt={tech}
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                    )}
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium border border-gray-600"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
            
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && imageUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal image container */}
            <div 
              className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {imageUrl.endsWith('.gif') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={`${title} demonstration - fullscreen`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt={`${title} screenshot - fullscreen`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              )}
            </div>

            {/* Image title */}
            <div className="absolute -bottom-12 left-0 text-white">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-300 text-sm">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
