export default function Recruiters() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          For Recruiters
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          SC Cleared · 4+ Years Experience · Available for Contract & Permanent
          Roles
        </p>

        {/* CV Download Button */}
        <div className="mt-8">
          <a
            href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV (PDF)
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Professional Summary
        </h2>
        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-600">
                🎓 Academic Excellence
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>First-Class BEng (Hons)</strong> Software
                    Engineering
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>MSc (Distinction)</strong> Data Science
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Top UK Universities</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-600">
                💼 Professional Status
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>SC Cleared</strong> - UK Government
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>4+ Years</strong> industry experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Based in <strong>Manchester, UK</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Seeking challenging roles in{" "}
              <strong>Machine Learning Engineering</strong>,{" "}
              <strong>Software Development</strong>, or{" "}
              <strong>Data Science</strong> where I can leverage my SC clearance
              and technical expertise to deliver high-impact solutions for
              enterprise and government clients.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <h3 className="font-bold text-lg">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "JavaScript", "SQL", "T-SQL", "R"].map(
                (lang, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-200"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌐</span>
              <h3 className="font-bold text-lg">Core Development Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Django",
                "Flask",
                "Node.js",
                "React",
                "PyTorch",
                "TensorFlow",
              ].map((fw, i) => (
                <span
                  key={i}
                  className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-semibold border border-purple-200"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🤖</span>
              <h3 className="font-bold text-lg">Machine Learning & AI</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "NLP",
                "BERT",
                "Deep Learning",
                "Neural Networks",
                "Transformers",
                "Databricks",
                "Power BI",
                "Matplotlib",
              ].map((ml, i) => (
                <span
                  key={i}
                  className="bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-sm font-semibold border border-pink-200"
                >
                  {ml}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">☁️</span>
              <h3 className="font-bold text-lg">Model Deployment & Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Azure",
                "Docker",
                "Streamlit",
                "Firebase",
                "Gradio",
                "CI/CD",
                "Git",
                "APIs",
                "Bash",
                "n8n",
              ].map((cloud, i) => (
                <span
                  key={i}
                  className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold border border-green-200"
                >
                  {cloud}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💾</span>
              <h3 className="font-bold text-lg">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "PostgreSQL",
                "SQL Server",
                "MongoDB",
                "SQLite",
                "Firestore",
              ].map((db, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold border border-indigo-200"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="font-bold text-lg">Methodologies & Delivery</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Scrum", "Agile", "CRISP-DM", "SDLC", "Lean"].map(
                (method, i) => (
                  <span
                    key={i}
                    className="bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-sm font-semibold border border-amber-200"
                  >
                    {method}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Notable Projects & Achievements
        </h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-purple-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-xl text-slate-900">
                🔍 Human Trafficking Coercion Detection
              </h3>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Research
              </span>
            </div>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Developed advanced NLP system using BERT transformers to detect
              coercion indicators in text, achieving 95% accuracy. Collaborated
              with NGOs on real-world application.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "PyTorch", "BERT", "NLP", "Transformers"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-purple-700 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <p className="text-sm text-purple-700 font-semibold mt-2">
              📊 Impact: 95% accuracy, potential to assist law enforcement
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border border-blue-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-xl text-slate-900">
                🏠 UK House Price Prediction Platform
              </h3>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Production
              </span>
            </div>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Full-stack ML application with 1000+ monthly active users.
              Ensemble models trained on 500K+ transactions provide accurate
              property valuations and market insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <p className="text-sm text-blue-700 font-semibold mt-2">
              📊 Impact: £15K avg. accuracy, 1000+ users/month
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-green-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-xl text-slate-900">
                ⚡ Enterprise Automation Platform
              </h3>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                Enterprise
              </span>
            </div>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Architected and deployed automation solution for Fortune 500
              client, achieving 70% reduction in manual processing time and
              £200K annual cost savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                "Python",
                "Django",
                "Azure",
                "Docker",
                "PostgreSQL",
                "Redis",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="bg-white text-green-700 px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-green-700 font-semibold mt-2">
              📊 Impact: 70% efficiency gain, £200K/year savings
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Professional Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Senior Machine Learning Engineer
                </h3>
                <p className="text-blue-600 font-semibold">
                  Enterprise Tech Solutions Ltd
                </p>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0">
                2022 - Present
              </span>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▸</span>
                <span>
                  Led development of NLP systems processing 10M+ documents
                  monthly with 95% accuracy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▸</span>
                <span>
                  Architected ML pipelines on Azure reducing inference time by
                  60%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▸</span>
                <span>
                  Mentored team of 3 junior engineers in ML best practices and
                  model deployment
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Software Engineer
                </h3>
                <p className="text-purple-600 font-semibold">
                  Digital Innovation Group
                </p>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0">
                2020 - 2022
              </span>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                <span>
                  Built full-stack web applications serving 50K+ users using
                  Django and React
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                <span>
                  Implemented CI/CD pipelines reducing deployment time by 75%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                <span>
                  Collaborated with cross-functional teams in Agile environment
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Junior Data Scientist
                </h3>
                <p className="text-green-600 font-semibold">
                  Analytics & Insights Co
                </p>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0">
                2019 - 2020
              </span>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">▸</span>
                <span>
                  Developed predictive models achieving 85%+ accuracy on key
                  business metrics
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">▸</span>
                <span>
                  Created interactive dashboards in Python/Streamlit for
                  stakeholder reporting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">▸</span>
                <span>
                  Performed statistical analysis on datasets with 1M+ records
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Key Strengths
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2">Fast Learner</h3>
            <p className="text-slate-600">
              Quick to adapt to new technologies and frameworks
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-bold text-lg mb-2">Team Player</h3>
            <p className="text-slate-600">
              Excellent collaboration and communication skills
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Results-Driven</h3>
            <p className="text-slate-600">
              Focus on delivering measurable business impact
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">Download My CV</h2>
        <p className="mb-6 text-lg">
          Comprehensive resume with full project details, employment history,
          and references available upon request.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_CV.pdf"
            download
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>📄</span>
            Download Full CV (PDF)
          </a>
          <a
            href="https://linkedin.com/in/franklyn-oliha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all flex items-center gap-2"
          >
            <span>🔗</span>
            View LinkedIn Profile
          </a>
          <a
            href="https://youtube.com/@mudiatech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all flex items-center gap-2"
          >
            <span>📺</span>
            View YouTube Channel
          </a>
        </div>
      </section>
    </div>
  );
}
