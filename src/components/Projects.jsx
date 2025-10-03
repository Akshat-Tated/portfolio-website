const projects = [
  {
    title: 'Habit Tracker',
    description:
      'A dynamic habit tracking web app where users can log daily habits, view progress, and maintain streaks.',
    tech: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
    image: 'assets/habittracker.png',
    link: 'https://akshat-tated.github.io/Dailybit/#/habittracker',
  },
  {
    title: 'Wonders',
    description:
      'Built a full-stack hotel booking platform with authentication, CRUD operations, and real-time reviews.',
    tech: ['HTML', 'CSS', 'JavaScript','Node.js','Express.js','MongoDB'],
    image: 'assets/Wondersapp.png',
    link: 'https://major-project-sclo.onrender.com/listings',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 bg-dark-bg text-light-text overflow-hidden">
      {/* Grid background layer */}
      <div className="grid-overlay"></div>
      {/* Actual Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-btn-dark rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-left flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-text text-sm">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-bg text-accent-blue border border-accent-blue px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit bg-accent-blue hover:bg-accent-blue-dark text-white text-sm px-4 py-2 rounded transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;