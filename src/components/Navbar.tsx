'use client';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
