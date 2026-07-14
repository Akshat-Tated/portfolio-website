const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-dark-bg text-light-text overflow-hidden">
      
      {/* 🔹 Hero Content - Test Bench Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pb-24 md:pb-12">
        
        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-light-text">
            Akshat Tated
          </h1>
          
          {/* Status Line */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 mono text-sm md:text-base border border-border-subtle bg-surface px-4 py-2 w-fit rounded-sm shadow-sm">
            <span className="text-secondary font-bold">● STATUS:</span>
            <span className="text-muted-text tracking-wide">OPEN TO WORK · BUILDING UNITFORGE</span>
          </div>

          <p className="mt-8 text-muted-text text-lg max-w-2xl leading-relaxed">
            Test-automation and full-stack engineer. Focused on building reliable verification tools and functional web experiences with precision.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="mailto:akshattated18@gmail.com"
              className="bg-primary text-dark-bg px-6 py-3 rounded-sm font-semibold hover:opacity-90 transition mono text-sm uppercase tracking-wide"
            >
              Initialize_Contact()
            </a>
            <a
              href="/assets/Akshat_Tated-Resume_Latest.pdf"
              className="border border-border-subtle bg-surface text-light-text px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition mono text-sm uppercase tracking-wide"
            >
              View_Logs(--resume)
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 md:w-1/3 shrink-0 flex justify-center md:justify-end mt-24 md:mt-0">
          <div className="relative p-2 bg-surface border border-border-subtle rounded-md shadow-lg">
            <img 
              src="assets/heroimg.png" 
              alt="Akshat Tated" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-sm border border-border-subtle opacity-90 hover:opacity-100 transition duration-500" 
            />
          </div>
        </div>

      </div>

      {/* Signature Element: Animated Build Log Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-border-subtle bg-dark-bg py-2">
        <div className="flex whitespace-nowrap animate-ticker mono text-[11px] md:text-xs text-muted-text/60">
          <span className="px-8">[sys] compiling resume.jsx... ✓</span>
          <span className="px-8">[sys] running tests: skills_module... ✓ 100%</span>
          <span className="px-8">[test] verifying UnitForge agents... OK</span>
          <span className="px-8">[lint] checking responsive_layout... PASSED</span>
          <span className="px-8">[deploy] portfolio v2.0... 🚀 LIVE</span>
          
          {/* Duplicate for seamless loop */}
          <span className="px-8">[sys] compiling resume.jsx... ✓</span>
          <span className="px-8">[sys] running tests: skills_module... ✓ 100%</span>
          <span className="px-8">[test] verifying UnitForge agents... OK</span>
          <span className="px-8">[lint] checking responsive_layout... PASSED</span>
          <span className="px-8">[deploy] portfolio v2.0... 🚀 LIVE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
