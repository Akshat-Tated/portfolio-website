const projects = [
  {
    title: 'UnitForge — AI-Powered Unit Test Generation Engine',
    description: 'an AI-powered engine that analyzes a Python or Java codebase and automatically generates production-ready unit tests. Phase 1 completed, LLM test-agent integration in progress.',
    tech: ['Python 3.12', 'Spring Boot 3.3', 'Java 21', 'Redis', 'PostgreSQL 16', 'React 18', 'Docker', 'Anthropic SDK'],
    link: 'https://github.com/Akshat-Tated/UnitForge',
    status: 'STATUS: IN DEVELOPMENT',
    image: 'assets/unitforge.png',
  },
  {
    title: 'Interview Preparation AI Platform',
    description: 'Full-stack AI interview prep platform integrating Gemini API for dynamic, role-specific Q&A generation across 10+ job categories with answer evaluation.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'TailwindCSS', 'JWT'],
    link: 'https://github.com/Akshat-Tated',
    image: 'assets/landing-page.png',
  },
  {
    title: 'Wonders – Hotel Booking Site',
    description: 'Full-stack hotel booking platform with user auth, listing CRUD, booking management, and reviews/ratings system with GST tracker.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'HTML', 'CSS', 'REST APIs'],
    link: 'https://major-project-sclo.onrender.com/listings',
    image: 'assets/Wondersapp.png',
  },
  {
    title: 'Pytest Automation Framework',
    description: 'Automation framework built using Selenium WebDriver and Pytest. Features POM architecture, handling UI and REST API test suites.',
    tech: ['Python', 'Selenium', 'Pytest', 'REST API'],
    link: 'https://github.com/Akshat-Tated/pytest-automation-framework',
    image: 'assets/habittracker.png'
  }
];

const UnitForgeDiagram = () => (
  <div className="w-full bg-[#0a0c0a] border border-border-subtle rounded-sm p-4 mb-6 font-mono text-[10px] sm:text-xs text-muted-text flex flex-col gap-3">
    <div className="flex items-center justify-between w-full">
      <div className="border border-border-subtle px-2 md:px-3 py-2 bg-surface flex-1 text-center">
        [ AST Parser ]
      </div>
      <div className="text-border-subtle px-1 md:px-2">──►</div>
      <div className="border border-primary/50 text-primary px-2 md:px-3 py-2 bg-primary/5 flex-1 text-center font-bold">
        [ Orchestrator ]
      </div>
      <div className="text-border-subtle px-1 md:px-2">──►</div>
      <div className="border border-border-subtle border-dashed px-2 md:px-3 py-2 bg-surface flex-1 text-center">
        [ LLM Agents ]
      </div>
    </div>
    <div className="flex items-center justify-center gap-12 text-[9px] opacity-75">
      <span>▼</span>
      <span>▼</span>
    </div>
    <div className="flex justify-center gap-4">
      <div className="border border-border-subtle px-3 py-1 bg-surface rounded-sm">Redis Queue</div>
      <div className="border border-border-subtle px-3 py-1 bg-surface rounded-sm">PostgreSQL</div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border-subtle pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Build_Registry</h2>
          <p className="mono text-sm text-muted-text mt-2">~/projects/index</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-surface border border-border-subtle rounded-md p-6 md:p-8 flex flex-col hover-lift`}
            >
              {/* Monospace Label / Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="mono text-xs text-muted-text border border-border-subtle px-2 py-1 rounded-sm">
                  {project.isUnitForge ? 'SYS_01' : `MOD_0${idx + 1}`}
                </span>
                {project.status && (
                  <span className="mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-sm border border-secondary/20">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              
              {project.isUnitForge && <UnitForgeDiagram />}
              
              {project.image && (
                <div className="w-full mb-6 border border-border-subtle overflow-hidden rounded-md bg-[#0F1310] p-1 mt-4 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-contain rounded-sm opacity-90 hover:opacity-100 transition duration-500" 
                  />
                </div>
              )}
              
              <p className="text-muted-text text-base leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-8 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="mono text-xs bg-dark-bg text-muted-text border border-border-subtle px-2 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto mono text-sm text-primary hover:text-white transition w-fit group flex items-center gap-2"
              >
                [ VIEW_SOURCE ]
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;