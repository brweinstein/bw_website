import ProjectShowcase from '@/components/ProjectShowcase';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProfilePicture from '@/components/ProfilePicture';
import InteractiveSkills from '@/components/InteractiveSkills';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        <div className="text-center relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hello, I&apos;m <span className="text-blue-400">Ben Weinstein</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about <span className="text-orange-400 font-semibold">Rust</span>, <span className="text-blue-400 font-semibold">Python</span>, and <span className="text-green-400 font-semibold">unique projects</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile and description */}
            <div className="space-y-8">
              <ProfilePicture />
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I&apos;m an 
                  <span className="text-blue-400 font-semibold"> Honours Mathematics student at University of Waterloo</span> with 
                  a passion for systems programming, learning, and innovative problem-solving.
                </p>
                <p>
                  The combination of mathematical rigor, creative thinking, and cutting-edge technology 
                  drives my excitement for building efficient, elegant solutions to complex problems.
                </p>
                <p>
                  When I&apos;m not coding or studying, I enjoy working out and diving deep into mathematical 
                  literature like <span className="text-purple-400 font-medium">&quot;How to Prove It&quot; by Daniel Velleman</span> to sharpen my logical reasoning skills.
                </p>
              </div>
            </div>

            {/* Right side - Interactive skills */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-white">Tech Stack</h3>
              <InteractiveSkills />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800">
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-white mb-8">Featured Projects</h2>
          <p className="text-gray-300 text-lg mb-16">A showcase of my latest work and experiments</p>
        </div>

        {/* Project 1: corsa */}
        <ProjectShowcase
          title="corsa"
          description="RSA visualizer with a Rust/WASM core and a modern Next.js UI. Explore RSA encryption and decryption interactively with real-time visual feedback and step-by-step demonstrations of the cryptographic process."
          githubUrl="https://github.com/brweinstein/corsa"
          technologies={["Rust", "WASM", "Next.js", "TypeScript", "Cryptography"]}
          imageUrl="/demo/corsa-demo.gif"
        />

        {/* Project 2: greprs */}
        <ProjectShowcase
          title="greprs"
          description="A lightning-fast grep clone written in Rust with parallel processing and modern features. Optimized to be competitive with GNU Grep (~5% slower) on most workloads. greprs scales with larger workloads due to parallelism and efficient memory usage."
          githubUrl="https://github.com/brweinstein/greprs"
          technologies={["Rust", "CLI", "Regex", "Parallel Processing"]}
          imageUrl="/demo/greprs-demo.png"
        />

        {/* Project 3: Tree Navigator */}
        <ProjectShowcase
          title="Tree Navigator"
          description="A lightweight Obsidian plugin that adds a dedicated, keyboard-navigable tree view of your vault. Expand, collapse, and open folders and files without touching the mouse. Features smooth animations and intuitive navigation."
          githubUrl="https://github.com/brweinstein/obsidian-tree"
          technologies={["TypeScript", "Plugin", "CSS", "Obsidian API"]}
          imageUrl="/demo/tree-navigator-demo.gif"
        />

        {/* Project 4: runmd */}
        <ProjectShowcase
          title="runmd"
          description="A high-performance Rust tool to execute code blocks in Markdown files and insert their outputs inline. Perfect for maintaining up-to-date documentation with live code examples and automated output generation."
          githubUrl="https://github.com/brweinstein/runmd"
          technologies={["Rust", "CLI", "Markdown", "Documentation"]}
          imageUrl="/demo/runmd-demo.gif"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Let&apos;s Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Have a question or want to work together? I&apos;d love to hear from you. 
                  Drop me a message and I&apos;ll get back to you as soon as possible.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/benweinsteinhttps://www.linkedin.com/in/benjamin-weinstein-5a0924287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:brweinstein68@gmail.com"
                  className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>brweinstein68@gmail.com</span>
                </a>
                
                <div className="flex items-center space-x-3 text-purple-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                  </svg>
                  <span>Discord: bwL3</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ben Weinstein. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
