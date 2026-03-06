import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-violet-500/20 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-semibold text-white">
            {/* Luna Liu */}
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 text-lg text-gray-300 md:flex">
            <Link to="/" className="group relative px-4 py-2">
              <span className="relative z-10">About</span>
              <span className="absolute left-0 top-0 h-full w-full bg-violet-500/20 transition-all duration-300 group-hover:h-[180%]">
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></span>
              </span>
            </Link>

            <Link to="/experience" className="group relative px-4 py-2">
              <span className="relative z-10">Experience</span>
              <span className="absolute left-0 top-0 h-full w-full bg-violet-500/20 transition-all duration-300 group-hover:h-[220%]">
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></span>
              </span>
            </Link>

            <Link to="/project" className="group relative px-4 py-2">
              <span className="relative z-10">Project</span>
              <span className="absolute left-0 top-0 h-full w-full bg-violet-500/20 transition-all duration-300 group-hover:h-[260%]">
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></span>
              </span>
            </Link>

            <Link to="/contact" className="group relative px-4 py-2">
              <span className="relative z-10">Contact</span>
              <span className="absolute left-0 top-0 h-full w-full bg-violet-500/20 transition-all duration-300 group-hover:h-[300%]">
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></span>
              </span>
            </Link>

            <Link to="/gallery" className="group relative px-4 py-2">
              <span className="relative z-10">My Art Gallery</span>
              <span className="absolute left-0 top-0 h-full w-full bg-violet-500/20 transition-all duration-300 group-hover:h-[340%]">
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 text-base text-gray-300 md:hidden">
            <Link to="/" className="px-2 py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link
              to="/experience"
              className="px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>

            <Link
              to="/project"
              className="px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Project
            </Link>

            <Link
              to="/contact"
              className="px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/gallery"
              className="px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              My Art Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;