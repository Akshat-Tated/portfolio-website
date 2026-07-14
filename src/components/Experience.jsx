const experiences = [
  {
    title: 'Left Shift Training Program',
    company: 'Capgemini',
    type: 'Training',
    duration: 'Jan 2026 – May 2026',
    image: 'assets/capgemini.jpg',
    highlights: [
      'Built a Selenium WebDriver + Pytest automation framework with Page Object Model architecture, covering login, booking, and CRUD flows for a live web application.',
      'Automated REST API test suites using Python requests library and pytest fixtures; validated authentication, CRUD, and error-handling scenarios across 20+ endpoints.',
    ],
    link: '',
  },
  {
    title: 'WordPress Developer',
    company: 'Daanpatra',
    type: 'Remote Internship',
    duration: 'Jan 2024 – June 2024',
    image: 'assets/daanpatra.png',
    highlights: [
      'Maintained a production WordPress site for an NGO.',
      'Customized site functionality using plugins and themes.',
      'Handled cPanel tasks including domain setup and SSL configuration.',
      'Performed content updates and deployments via the WordPress dashboard.',
    ],
    link: 'https://daanpatra.org',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    type: 'Freelance',
    duration: '2022 – 2026',
    image: 'assets/freelance-work.png',
    highlights: [
      'Designed and deployed 5+ client websites using WordPress, Elementor, and custom HTML/CSS/JS.',
      'Handled full delivery from client brief to deployment and post-launch revisions.',
    ],
    link: '',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border-subtle pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Execution_Log</h2>
          <p className="mono text-sm text-muted-text mt-2">~/experience/timeline</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-6 bg-surface border border-border-subtle rounded-md p-6 md:p-8 hover-lift"
            >
              {/* Left Column: Image */}
              {exp.image && (
                <div className="md:w-1/3 shrink-0">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-auto object-contain rounded-md border border-border-subtle shadow-sm opacity-90 hover:opacity-100 transition duration-300 bg-[#0F1310] p-1" 
                  />
                </div>
              )}

              {/* Right Column: Text and Meta */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 border-b border-border-subtle pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <span className="block text-muted-text mt-1 text-sm md:text-base">
                        @ {exp.company}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <span className="mono text-xs text-muted-text border border-border-subtle px-2 py-1 rounded-sm bg-dark-bg">
                      {exp.duration}
                    </span>
                    <span className="mono text-xs text-primary uppercase tracking-wider border border-primary/20 bg-primary/5 px-2 py-1 rounded-sm">
                      [{exp.type || 'ROLE'}]
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-muted-text text-base leading-relaxed">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-border-subtle shrink-0">›</span> 
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;