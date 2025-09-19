'use client';

import LocalBadge from './LocalBadge';

const skills = [
  { name: 'Rust', imagePath: '/icons/rust.png', color: '#f74c00' },
  { name: 'Python', imagePath: '/icons/python.png', color: '#3776ab' },
  { name: 'TypeScript', imagePath: '/icons/typescript.svg', color: '#3178c6' },
  { name: 'Lua', imagePath: '/icons/lua.png', color: '#000080' },
  { name: 'C', imagePath: '/icons/c.png', color: '#649ad2' },
  { name: 'HTML', imagePath: '/icons/html.png', color: '#e44d26' },
  { name: 'Tailwind', imagePath: '/icons/tailwind.png', color: '#06b6d4' },
  { name: 'Next.js', imagePath: '/icons/nextjs.svg', color: '#000000' },
  { name: 'WASM', imagePath: '/icons/wasm.png', color: '#654ff0' },
  { name: 'Git', imagePath: '/icons/git.png', color: '#f14e32' },
  { name: 'Docker', imagePath: '/icons/docker.png', color: '#2496ed' },
  { name: 'Linux', imagePath: '/icons/linux.png', color: '#fcc624' },
];


export default function InteractiveSkills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="transform transition-all duration-500 animate-fade-in-up"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <LocalBadge
            name={skill.name}
            imagePath={skill.imagePath}
            color={skill.color}
          />
        </div>
      ))}
    </div>
  );
}
