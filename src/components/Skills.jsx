export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "R"],
    },
    {
      category: "Web Frameworks",
      skills: ["Django", "Flask", "Node.js", "React", "Express"],
    },
    {
      category: "ML & AI",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "BERT",
        "NLP",
        "Computer Vision",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Azure", "Docker", "Git", "Streamlit", "PostgreSQL", "MongoDB"],
    },
  ];

  const icons = ["💻", "🌐", "🤖", "☁️"];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">Technical Expertise</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{icons[index]}</span>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                {category.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-blue-100 px-4 py-2 rounded-lg text-sm text-slate-700 font-medium transition-all cursor-default border border-slate-200 hover:border-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
