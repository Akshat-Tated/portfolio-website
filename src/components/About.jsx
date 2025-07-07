const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 text-center bg-dark-bg text-light-text"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0F1117] to-transparent z-0" />
      <div className="max-w-3xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-muted-text text-lg leading-relaxed">
          I’m a full-stack developer with a passion for creating intuitive and visually appealing user experiences. My work spans across front-end development using technologies like <span className="text-accent-blue font-medium">React</span> and <span className="text-accent-blue font-medium">TailwindCSS</span>, and back-end development using <span className="text-accent-blue font-medium">Node.js</span> and <span className="text-accent-blue font-medium">MongoDB</span>.
        </p>
        <p className="text-muted-text text-lg mt-4 leading-relaxed">
          I’ve built habit trackers, weather apps, and contributed to live projects in internships and hackathons. I value clean code, accessible design, and continuous learning.
        </p>
      </div>
    </section>
  );
};

export default About;
