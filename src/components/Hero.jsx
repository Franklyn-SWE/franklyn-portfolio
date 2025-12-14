export default function Hero() {
  return (
    <section className="mb-24 py-16 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="animate-fade-in space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Franklyn Oliha
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-semibold">
                Software Engineer · ML Engineer · Data Scientist
              </p>
              <p className="text-sm md:text-base text-slate-500 italic">
                Machine Learning Engineer (UK Civil Service) | Founder,
                MudiaTech
              </p>
            </div>

            <div className="flex gap-2 text-xs md:text-sm flex-wrap md:flex-nowrap">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 md:px-4 py-2 rounded-full font-bold shadow-md whitespace-nowrap">
                🛡️ SC Cleared
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 md:px-4 py-2 rounded-full font-semibold whitespace-nowrap border border-slate-200">
                📍 Manchester, UK
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 md:px-4 py-2 rounded-full font-semibold whitespace-nowrap border border-slate-200">
                💼 4+ Years
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 md:px-4 py-2 rounded-full font-semibold whitespace-nowrap border border-slate-200">
                🎓 MSc Distinction
              </span>
            </div>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I design and deploy production-ready machine learning and software
              systems used in real-world environments — from NLP-driven risk
              detection to scalable web applications. Experienced in delivering
              secure, data-driven solutions that create measurable business and
              social impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                View Featured Projects
              </a>
              <a
                href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
                download
                className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Animated Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-20 group-hover:opacity-30 blur-3xl transition-all duration-700 animate-pulse"></div>
              {/* Image container with enhanced styling */}
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/profile.jpg"
                  alt="Franklyn Oliha - Software Engineer"
                  className="w-full h-full object-cover object-top rounded-full border-4 md:border-8 border-white shadow-2xl ring-2 ring-slate-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
