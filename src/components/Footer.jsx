export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-300">
            © 2025 Franklyn Oliha. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@mudiatech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              YouTube
            </a>
            <a
              href="mailto:franklyn.oliha@outlook.com"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
