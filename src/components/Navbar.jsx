import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl text-white hover:text-blue-300 transition-colors"
          >
            Franklyn Oliha<span className="text-blue-400"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm items-center">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              About Me
            </Link>
            <Link
              to="/recruiters"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Recruiters
            </Link>
            <Link
              to="/clients"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Clients
            </Link>
            <a
              href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
              download
              className="bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all shadow-md hover:shadow-lg"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
            >
              About Me
            </Link>
            <Link
              to="/recruiters"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
            >
              Recruiters
            </Link>
            <Link
              to="/clients"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
            >
              Clients
            </Link>
            <a
              href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
              download
              className="block bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all shadow-md text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
