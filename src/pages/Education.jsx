const Education = () => {
  const educationData = [
    {
      degree: "B.Tech - Electrical and Electronics Engineering",
      institution: "Oriental Institute of Science and Technology, Bhopal",
      duration: "2020 - 2024",
      cgpa: "7.3 / 10",
      icon: "🎓",
    },
    {
      degree: "12th Standard",
      institution: "Govt. Excellence Higher Secondary School, Waidhan",
      duration: "2019 - 2020",
      cgpa: "8 / 10",
      icon: "🏫",
    },
    {
      degree: "10th Standard",
      institution: "Govt. Excellence Higher Secondary School, Waidhan",
      duration: "2017 - 2018",
      cgpa: "9 / 10",
      icon: "🏫",
    },
  ];

  return (
    <section className="min-h-screen max-w-[1400px] mx-auto bg-blue-600/20 text-white fade-in">
      <div className="flex flex-col h-full px-4">
        <h1 className="text-4xl font-bold text-center pt-10 mb-8">
          Education
        </h1>

        <div className="grid h-[300px] gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-blue-400/10 border border-blue-300/30
                         p-5 rounded-2xl
                         shadow-lg hover:shadow-xl
                         transition-all duration-300
                         hover:-translate-y-1"
            >
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="text-2xl">{edu.icon}</span>
                {edu.degree}
              </h2>

              <p className="mt-3 text-sm text-gray-200">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-300">{edu.duration}</p>
              <p className="mt-2 font-medium text-yellow-400">
                CGPA: {edu.cgpa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
