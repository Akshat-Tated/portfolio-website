const Footer = () => {
  return (
    <footer className="bg-dark-bg text-muted-text text-sm py-6 border-t border-muted-text text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Akshat Tated. All rights reserved.</p>
        <p className="mt-1">
          Built with <span className="text-accent-blue">React</span> & styled with <span className="text-accent-blue">TailwindCSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;