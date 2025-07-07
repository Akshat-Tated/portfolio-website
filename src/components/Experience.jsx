const experiences = [
  {
    title: 'WordPress Developer',
    company: 'Daanpatra',
    type: 'Remote Internship',
    duration: 'Jan 2024 – June 2024',
    image: 'assets/daanpatra.png', // your internship image
    highlights: [
      'Collaborated with a remote team to maintain and enhance the official website.',
      'Customized site functionality using plugins and themes.',
      'Handled cPanel tasks including domain setup and SSL configuration.',
      'Performed content updates and deployments via the WordPress dashboard.',
    ],
    link: 'https://daanpatra.org',
  },
  {
    title: 'Freelance Developer & Designer',
    company: 'Self-Employed',
    type: '',
    duration: '',
    image: '/assets/freelance-work.png', // your freelance image
    highlights: [
      'Developed 5+ professional websites for clients using WordPress.',
      'Delivered over 10+ unique brand logos tailored to client needs.',
      'Managed full project lifecycle from design to deployment.',
      'Focused on responsive design, usability, and performance.',
    ],
    link: '',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 bg-dark-bg text-light-text overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-14">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start gap-6 bg-[#1F2937]/40 rounded-xl shadow-lg p-6 transition hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="rounded-md border border-dark-bg/30 shadow-md"
                />
              </div>

              {/* Textual Content */}
              <div className="flex-1 space-y-2">
                <p className="text-sm text-muted-text">{exp.duration}</p>
                <h3 className="text-xl font-semibold">
                  {exp.title}{' '}
                  <a
                    href={exp.link}
                    target="_blank"
                    className="text-accent-blue hover:underline"
                  >
                    @ {exp.company} {exp.type && `(${exp.type})`}
                  </a>
                </h3>
                <ul className="list-disc list-inside text-muted-text space-y-1 text-sm md:text-base">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
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