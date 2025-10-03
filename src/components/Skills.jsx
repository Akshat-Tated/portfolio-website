import {
  SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, 
  SiGit, SiHtml5, SiCss3, SiWordpress, SiFigma, 
  SiExpress, SiMysql
} from 'react-icons/si';
import { FaPaintBrush } from 'react-icons/fa';


const skills = [
  { name: 'WordPress', icon: SiWordpress },
  { name: 'CorelDRAW', icon: FaPaintBrush },
  { name: 'React', icon: SiReact },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Express.js', icon: SiExpress },
  { name: 'SQL', icon: SiMysql },
];


const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4 bg-dark-bg text-light-text overflow-hidden">
      {/* Grid background layer */}
      <div className="grid-overlay"></div>

      {/* Section content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-btn-dark rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition duration-200 hover:scale-105"
            >
              <Icon className="text-4xl text-accent-blue mb-3" />
              <span className="text-light-text font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;