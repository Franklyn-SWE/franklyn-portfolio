import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-bold text-2xl text-white hover:text-blue-300 transition-colors"
        >
          Franklyn Oliha<span className="text-blue-400"></span>
        </Link>
        <div className="flex gap-6 text-sm items-center">
          <Link
            to="/"
            className="text-white hover:text-blue-300 transition-colors font-medium"
          >
            Home
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
      </div>
    </nav>
  );
}
