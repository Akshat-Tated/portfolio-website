import React from 'react';

const badges = [
  {
    id: 1,
    name: 'Google Cloud Engineering Certificate',
    issuer: 'Google Cloud',
    image: 'assets/badge_1.png',
    link: '#'
  },
  {
    id: 2,
    name: 'Microsoft AI Skills Fest 2026',
    issuer: 'Microsoft',
    image: 'assets/badge_2.png',
    link: '#'
  },
  {
    id: 3,
    name: 'Cisco Python Essentials 1',
    issuer: 'Cisco',
    image: 'assets/badge_3.png',
    link: '#'
  },
  {
    id: 4,
    name: 'Introduction to MongoDB for Students',
    issuer: 'MongoDB',
    image: 'assets/badge_4.png',
    link: '#'
  },
  {
    id: 5,
    name: 'Microsoft Certified: Azure AI Cloud Developer Associate',
    issuer: 'Microsoft',
    date: '25 Aug 2026',
    description: 'Associate-level Microsoft certification validating skills in developing AI cloud solutions on Azure.',
    image: 'assets/badge_5.svg',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-cloud-developer-associate/'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-dark-bg text-light-text fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border-subtle pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Certifications & Badges</h2>
          <p className="mono text-sm text-muted-text mt-2">~/credentials/inventory</p>
        </div>
        
        <p className="text-muted-text text-base md:text-lg max-w-3xl leading-relaxed mb-10">
          Industry-recognized certifications and achievement badges demonstrating continuous learning across Cloud, AI, Databases, and Software Development.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-center">
          {badges.map((badge) => (
            <div 
              key={badge.id} 
              className="bg-surface border border-border-subtle rounded-md p-4 md:p-6 flex flex-col items-center hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(232,100,28,0.15)] hover:border-primary transition-all duration-300"
            >
              <div className="w-full aspect-square mb-6 bg-[#0F1310] border border-border-subtle rounded-sm p-4 flex items-center justify-center">
                <img 
                  src={badge.image} 
                  alt={badge.name} 
                  loading="lazy" 
                  className="w-full h-full object-contain filter grayscale-[50%] hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              
              <h3 className="text-sm md:text-base font-bold text-light-text mb-2 text-center flex-grow">
                {badge.name}
              </h3>
              
              <p className="mono text-[10px] md:text-xs text-muted-text text-center mb-1">
                @ {badge.issuer}
              </p>
              
              {badge.date && (
                <p className="mono text-[9px] md:text-[10px] text-muted-text/70 text-center mb-1">
                  {badge.date}
                </p>
              )}
              
              {badge.description && (
                <p className="text-[10px] md:text-xs text-muted-text text-center mb-4 line-clamp-3">
                  {badge.description}
                </p>
              )}
              
              <div className={!badge.description ? "mb-6" : ""} />
              
              <a 
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto mono text-[10px] md:text-xs text-primary border border-primary/20 bg-primary/5 px-3 py-2 rounded-sm hover:bg-primary/10 transition-colors text-center w-full uppercase tracking-wider"
              >
                [ View_Credential ]
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
