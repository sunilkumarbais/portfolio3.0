import { Link } from "react-router-dom";
import Logo from "../assets/my-image.jpg";

const Home = () => {
  return (
    <main>
      <section className="home-section h-screen max-w-[1400px] mx-auto bg-blue-600/20 fade-in">
        <div className="flex h-full flex-col md:flex-row items-center justify-center md:justify-around px-5 gap-12">
          {/* Text */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              Welcome to My <span className="text-yellow-400">Portfolio</span>
            </h1>

            <Link
              to="/about"
              className="ring-2 ring-yellow-400 text-white text-sm md:text-base
                         px-4 py-2 rounded-md mt-4
                         transition-all duration-300
                         hover:bg-yellow-500 hover:text-black hover:scale-105"
            >
              Explore Now
            </Link>
          </div>

          {/* Image */}
          <div>
            <img
              src={Logo}
              alt="Hero"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover
                         border border-yellow-500
                         shadow-2xl shadow-yellow-400/70"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
