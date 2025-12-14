export default function Projects() {
  const projects = [
    {
      title: "🔍 Human Trafficking Coercion Detection",
      description:
        "Groundbreaking NLP system leveraging BERT transformers to detect subtle coercion indicators in text data. This research project applies cutting-edge machine learning to identify potential human trafficking cases, supporting law enforcement and NGOs in their crucial work.",
      tech: ["Python", "PyTorch", "BERT", "NLP", "Transformers"],
      impact: "Research with real-world social impact potential",
      metrics: "95% accuracy on test dataset",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "🏠 UK House Price Prediction System",
      description:
        "Full-stack ML web application providing accurate property valuations using ensemble models trained on 500K+ UK housing transactions. Features interactive visualizations, market trend analysis, and location-based insights for informed real estate decisions.",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "XGBoost"],
      impact: "Deployed live with 1000+ monthly users",
      metrics: "£15K average prediction accuracy",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "⚡ Enterprise Automation Platform",
      description:
        "Comprehensive automation solution transforming manual business workflows into intelligent, self-optimizing processes. Integrates with existing enterprise systems via REST APIs and features a Django-based admin dashboard for monitoring and configuration.",
      tech: ["Python", "Django", "Azure", "Docker", "PostgreSQL", "Redis"],
      impact: "Production deployment at Fortune 500 client",
      metrics: "70% reduction in manual work, £200K/year savings",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="mb-16" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">Featured Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <span className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.gradient} shadow-md`}>
                Featured
              </span>
            </div>
            <p className="text-slate-700 mb-4 text-lg leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex flex-col md:flex-row justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <span className="text-sm font-semibold text-slate-600">{project.metrics}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm font-semibold text-green-600">{project.impact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
