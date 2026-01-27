import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <section className="min-h-screen max-w-[1400px] mx-auto bg-blue-600/20 text-white fade-in">
      <div className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-10 gap-10">
        
        {/* About Content */}
        <div className="flex-1 bg-blue-300/10 border border-blue-300/30
                        p-6 md:p-8 rounded-2xl
                        shadow-lg hover:shadow-2xl
                        transition-all duration-300">
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Me
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold mb-1">
            I'm Sunil Kumar
          </h3>

          <h6 className="text-yellow-400 mb-4">
            Full Stack Web Developer (MERN)
          </h6>

          <p className="text-gray-200 mb-3 leading-relaxed">
            I am a passionate <strong>self-taught web developer</strong> with
            strong knowledge of{" "}
            <strong>
              JavaScript, React.js, Node.js, Express.js, and MongoDB
            </strong>
            . I enjoy solving problems, learning new technologies, and building
            responsive and user-friendly web applications.
          </p>

          <p className="text-gray-200 leading-relaxed">
            I have worked on multiple{" "}
            <strong>real-world projects</strong> that demonstrate my skills in
            both frontend and backend development. I am eager to contribute,
            learn, and grow in a professional environment.
          </p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href={Resume}
              download
              className="inline-block px-6 py-2 rounded-lg
                         bg-yellow-500 text-black font-semibold
                         hover:bg-yellow-400
                         transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
