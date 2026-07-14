const skillCategories = [
  {
    category: 'LANGUAGES',
    skills: ['Java', 'JavaScript', 'Python', 'SQL']
  },
  {
    category: 'FRONTEND',
    skills: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS']
  },
  {
    category: 'BACKEND_&_DB',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'MongoDB', 'MySQL']
  },
  {
    category: 'TESTING_&_TOOLS',
    skills: ['Selenium', 'Pytest', 'Postman', 'Maven', 'Git']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border-subtle pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">System_Capabilities</h2>
          <p className="mono text-sm text-muted-text mt-2">~/skills/inventory</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="bg-surface border border-border-subtle rounded-md p-6 hover-lift">
              <h3 className="mono text-sm text-primary mb-6 border-b border-border-subtle pb-2 tracking-wider">
                [{group.category}]
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 mono text-sm text-light-text">
                    <span className="text-muted-text/50">├─</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;