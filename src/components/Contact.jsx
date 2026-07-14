const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section border-b-0">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">Terminate_Process</h2>
        <p className="text-muted-text mb-10 text-lg">
          Interested in collaborating or have a question? My inbox is always open.
        </p>

        <a
          href="mailto:akshattated18@gmail.com"
          className="inline-block bg-primary text-dark-bg px-8 py-4 rounded-sm font-semibold hover:opacity-90 transition mono text-sm uppercase tracking-wide"
        >
          Send_Message()
        </a>

        <div className="mt-12 flex justify-center gap-8 border-t border-border-subtle pt-8">
          <a href="mailto:akshattated18@gmail.com" className="mono text-sm text-muted-text hover:text-primary transition flex items-center gap-2">
            [ EMAIL ]
          </a>
          <a href="https://linkedin.com/in/akshat-tated" target="_blank" rel="noopener noreferrer" className="mono text-sm text-muted-text hover:text-primary transition flex items-center gap-2">
            [ LINKEDIN ]
          </a>
          <a href="https://github.com/Akshat-Tated" target="_blank" rel="noopener noreferrer" className="mono text-sm text-muted-text hover:text-primary transition flex items-center gap-2">
            [ GITHUB ]
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;