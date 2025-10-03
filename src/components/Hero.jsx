const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-dark-bg text-light-text">

      {/* 🔹 Grid + Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-cover bg-center opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1117] via-[#121F30]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a2a40_0%,_#0f1117_80%)] opacity-50" />
      </div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">

        {/* Profile Image */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent-blue shadow-xl">
          <img
            src="assets/heroimg.png"
            alt="Akshat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <p className="uppercase text-sm tracking-widest text-muted-text">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Akshat</h1>
        <p className="text-muted-text text-lg max-w-md">
          A passionate developer focused on building elegant, modern, and functional web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:akshattated18@gmail.com"
            className="bg-accent-blue hover:bg-accent-blue-dark text-white px-5 py-2 rounded font-medium transition"
          >
            Say Hello
          </a>
          <a
            href="/assets/Akshat_Tated_Final Resume.pdf"
            className="border border-accent-blue text-accent-blue px-5 py-2 rounded hover:bg-accent-blue hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0F1117] z-0" />
    </section>
  );
};

export default Hero;
