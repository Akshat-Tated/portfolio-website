const Footer = () => {
  return (
    <footer className="bg-dark-bg text-muted-text py-8 border-t border-border-subtle text-center mono text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2">
        <p>SYSTEM_HALT / EOF</p>
        <p className="opacity-60">&copy; {new Date().getFullYear()} Akshat Tated. All systems nominal.</p>
      </div>
    </footer>
  );
};

export default Footer;