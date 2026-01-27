const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row justify-center md:justify-between items-center z-23 max-w-[1400px] mx-auto px-4 py-6 bg-gray-800 text-white ">
      <div>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
      <div className="flex gap-2">
        Socal Media:
        <a
          href="https://www.linkedin.com/in/sunilkumarbais/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        ||
        <a
          href="https://github.com/sunilkumarbais"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
