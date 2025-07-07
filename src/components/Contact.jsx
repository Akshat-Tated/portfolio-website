const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-dark-bg text-light-text text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-muted-text mb-8 text-lg">
          Whether you have a question, want to work together, or just want to say hi — I’d love to hear from you.
        </p>

        {/* Contact Button */}
        <a
          href="mailto:akshattated18@gmail.com"
          className="inline-block bg-accent-blue hover:bg-accent-blue-dark text-white px-6 py-3 rounded-full font-medium transition"
        >
          Say Hello
        </a>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="mailto:akshattated18@gmail.com" className="text-muted-text hover:text-accent-blue text-xl transition">
            📧
          </a>
          <a href="https://www.linkedin.com/in/akshat-tated" target="_blank" className="text-muted-text hover:text-accent-blue text-xl transition">
            💼
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-muted-text hover:text-accent-blue text-xl transition">
            🐙
          </a>
          <a href="https://twitter.com/" target="_blank" className="text-muted-text hover:text-accent-blue text-xl transition">
            🐦
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;