const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 max-w-[1400px] mx-auto bg-blue-600/20 text-white fade-in"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {/* Self Experience */}
          <div className="bg-blue-300/10 border border-blue-300/30
                          p-6 rounded-2xl
                          shadow-lg hover:shadow-2xl
                          transition-all duration-300">
            <h3 className="text-xl font-semibold">
              Self-Taught Web Developer
            </h3>
            <p className="text-sm text-gray-300">
              1 Year Experience
            </p>

            <p className="mt-4 text-gray-200">
              Built real-world projects using JavaScript and React. Focused on
              responsive design, API integration, and improving UI/UX through
              consistent practice.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "React",
                "JavaScript",
                "Node",
                "Express",
                "MongoDB",
                "APIs",
                "Tailwind",
                "Git",
                "GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full
                             bg-yellow-400/20 text-yellow-300
                             border border-yellow-400/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div className="bg-blue-300/10 border border-blue-300/30
                          p-6 rounded-2xl
                          shadow-lg hover:shadow-2xl
                          transition-all duration-300">
            <h3 className="text-xl font-semibold">
              Web Development Intern
            </h3>
            <p className="text-sm text-gray-300">
              Internship
            </p>

            <p className="mt-4 text-gray-200">
              Worked with a team on live projects. Developed UI components,
              fixed bugs, and followed best practices under senior guidance.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "React",
                "Bootstrap",
                "Node",
                "Express",
                "MongoDB",
                "RestAPI's",
                "EJS",
                "UI Development",
                "Team Work",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full
                             bg-yellow-400/20 text-yellow-300
                             border border-yellow-400/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
