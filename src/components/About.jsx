const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border-subtle pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">System_Overview</h2>
          <p className="mono text-sm text-muted-text mt-2">~/about/profile</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border-subtle rounded-md p-8 hover-lift">
            <h3 className="mono text-sm text-primary mb-6 border-b border-border-subtle pb-2 tracking-wider">
              [SUMMARY]
            </h3>
            <p className="text-muted-text text-base md:text-lg leading-relaxed">
              Final-year B.Tech CSE student (CGPA 8.8, JECRC University) with hands-on experience in full-stack development and test automation.
            </p>
            <p className="text-muted-text text-base md:text-lg mt-4 leading-relaxed">
              Previously built and deployed 5+ client websites as a freelancer and maintained a production WordPress site for an NGO (Daanpatra). Focuses on clean architecture and rigorous testing.
            </p>
          </div>
          
          <div className="bg-surface border border-border-subtle rounded-md p-8 hover-lift">
            <h3 className="mono text-sm text-primary mb-6 border-b border-border-subtle pb-2 tracking-wider">
              [EDUCATION]
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between items-start gap-4">
                  <strong className="text-light-text text-lg">JECRC University Jaipur</strong>
                  <span className="mono text-xs text-muted-text shrink-0 bg-dark-bg border border-border-subtle px-2 py-1 rounded-sm">2022 - 2026</span>
                </div>
                <span className="block mt-1 text-muted-text">B.Tech CSE, CGPA 8.8</span>
              </li>
              <li>
                <div className="flex justify-between items-start gap-4">
                  <strong className="text-light-text text-lg">Saint Paul's Convent School</strong>
                  <span className="mono text-xs text-muted-text shrink-0 bg-dark-bg border border-border-subtle px-2 py-1 rounded-sm">2022</span>
                </div>
                <span className="block mt-1 text-muted-text">Senior Secondary (CBSE), 83.2%</span>
              </li>
              <li>
                <div className="flex justify-between items-start gap-4">
                  <strong className="text-light-text text-lg">Saint Paul's Convent School</strong>
                  <span className="mono text-xs text-muted-text shrink-0 bg-dark-bg border border-border-subtle px-2 py-1 rounded-sm">2020</span>
                </div>
                <span className="block mt-1 text-muted-text">Secondary (CBSE), 86.6%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
