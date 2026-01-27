import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen max-w-[1400px] mx-auto bg-blue-600/20 fade-in pb-10">
      <div className="flex flex-col items-center h-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white pt-10 mb-10">
          Skills
        </h1>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {skills.map((skill, index) => (
            <li
              key={index}
              title={skill.name}
              className="min-h-[180px]
                         flex flex-col items-center justify-center gap-4
                         bg-blue-300/10 text-gray-200
                         rounded-2xl
                         border border-blue-300/30
                         shadow-lg hover:shadow-2xl
                         hover:-translate-y-1 hover:scale-105
                         transition-all duration-300
                         cursor-pointer"
            >
              <span className="text-yellow-400 text-5xl md:text-6xl">
                {skill.icon}
              </span>
              <h4 className="text-lg md:text-xl font-medium text-gray-300">
                {skill.name}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
