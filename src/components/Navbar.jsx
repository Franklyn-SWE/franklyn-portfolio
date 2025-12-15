import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex justify-between items-center mb-3 sm:mb-0">
          <Link
            to="/"
            className="font-bold text-xl sm:text-2xl text-white hover:text-blue-300 transition-colors"
          >
            Franklyn Oliha<span className="text-blue-400"></span>
          </Link>
        </div>

        {/* Navigation Links - Horizontal scroll on mobile, flex on desktop */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:mt-0 mt-2">
          <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm items-center min-w-max sm:min-w-0 sm:justify-end">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition-colors font-medium whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition-colors font-medium whitespace-nowrap"
            >
              About Me
            </Link>
            <Link
              to="/recruiters"
              className="text-white hover:text-blue-300 transition-colors font-medium whitespace-nowrap"
            >
              Recruiters
            </Link>
            <Link
              to="/clients"
              className="text-white hover:text-blue-300 transition-colors font-medium whitespace-nowrap"
            >
              Clients
            </Link>
            <a
              href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
              download
              className="bg-white text-blue-900 px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
