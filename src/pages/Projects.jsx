const projectData = [
  {
    id: 1,
    image: "/ecommerce.jpg",
    title: "Ecommerce Web App",
    tecks: "React, Node.js, Express.js, MongoDB",
    description: "A MERN full-stack ecommerce application.",
    live_Url: "https://sk-shopmate.netlify.app/",
    gitHub_Url: "https://github.com/sunilkumarbais/ecommerce-app",
  },
  {
    id: 2,
    image: "/note.jpg",
    title: "Note-web-app",
    tecks: "React, Node.js, Express.js, MongoDB",
    description: "A MERN full-Stack note management application.",
    live_Url: "https://notes-manager-01.netlify.app/",
    gitHub_Url: "https://github.com/sunilkumarbais/note-manager",
  },
  {
    id: 3,
    image: "/weather.jpg",
    title: "Weather Web App",
    tecks: "React, API Integration",
    description: "Weather app using real-time API data.",
    live_Url: "https://weather-web-app-01.netlify.app/",
    gitHub_Url: "https://github.com/sunilkumarbais/weather_web",
  },
  {
    id: 4,
    image: "/music.webp",
    title: "Music Player",
    tecks: "React",
    description: "Music player with clean UI.",
    live_Url: "https://sk-music-player-01.netlify.app/",
    gitHub_Url: "https://github.com/sunilkumarbais/music-player",
  },
  {
    id: 5,
    image: "/movie.jpg",
    title: "Movie Search App",
    tecks: "React, API",
    description: "Search movies using external API.",
    live_Url: "https://sunilkumarbais.github.io/movie-search-app/",
    gitHub_Url: "https://github.com/sunilkumarbais/movie-search-app",
  },
  {
    id: 6,
    image: "/todo.png",
    title: "Todo App",
    tecks: "React",
    description: "Simple todo app with CRUD features.",
    live_Url: "https://sunilkumarbais.github.io/todo-react-app/",
    gitHub_Url: "https://github.com/sunilkumarbais/todo-react-app",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen max-w-[1400px] mx-auto bg-blue-600/20 fade-in pb-10">
      <div className="flex flex-col h-full pt-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Projects
        </h1>

        <div className="space-y-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-6 p-5
                         bg-blue-300/10 text-gray-200
                         rounded-2xl border border-blue-300/30
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-40 h-40 object-cover rounded-xl
                           border border-yellow-400/40
                           shadow-md"
              />

              {/* Content */}
              <div className="flex flex-col justify-between grow">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-yellow-300 mt-1">
                    {project.tecks}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5  self-end">
                  <a
                    href={project.live_Url}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg
                               border border-yellow-400 text-yellow-300
                               hover:bg-yellow-400 hover:text-black
                               transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.gitHub_Url}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg
                               border border-yellow-400 text-yellow-300
                               hover:bg-yellow-400 hover:text-black
                               transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
