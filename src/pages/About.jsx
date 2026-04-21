export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-slate-700 font-semibold max-w-3xl mx-auto">
          AI Systems Engineer  &middot; Machine Learning Engineer
        </p>
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
          <img
            src="/photo.jpg"
            alt="Franklyn Oliha"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Who I Am
        </h2>
        <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            I'm a Machine Learning Engineer and AI Systems Builder focused on
            designing and deploying production-grade AI systems for real-world
            environments across public and private sectors.
          </p>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            I hold an{" "}
            <strong>
              MSc (Distinction) in Data Science & Machine Learning
            </strong>{" "}
            and a{" "}
            <strong>First Class BEng (Hons) in Software Engineering</strong>,
            combining strong academic foundations with hands-on experience
            building secure, scalable, and high-impact solutions.
          </p>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            My work centres on taking systems from research and experimentation
            into fully deployed environments &mdash; ensuring they are reliable,
            maintainable, and deliver measurable value.
          </p>
        </div>
      </section>

      {/* Academic & Technical Background */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Academic & Technical Background
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            I bring together expertise across software engineering, machine
            learning, and data science, enabling me to build end-to-end systems
            that move seamlessly from concept to deployment.
          </p>
          <p className="text-base md:text-lg text-slate-700 font-semibold mb-3">
            I work across:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Full-stack application development",
              "Machine learning model development & deployment",
              "Cloud-based system architecture",
              "API design and backend engineering",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg text-slate-700"
              >
                <span className="text-blue-600 mt-1 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            My focus includes predictive analytics, natural language processing
            (NLP), and applied AI, with an emphasis on building systems that
            perform reliably in real-world conditions.
          </p>
        </div>
      </section>

      {/* Professional Experience & Projects */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Professional Experience & Projects
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            I have delivered a range of production-grade software and machine
            learning systems, including:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Intelligent automation platforms",
              "NLP-driven analytics and risk detection systems",
              "Scalable web and backend applications",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg text-slate-700"
              >
                <span className="text-blue-600 mt-1 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            My work is grounded in Agile and Scrum methodologies, with a strong
            emphasis on performance, maintainability, and measurable outcomes.
          </p>
          <p className="text-base md:text-lg text-slate-700 font-semibold mb-3">
            I prioritise building systems that:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Solve real problems",
              "Scale effectively",
              "Deliver clear business and operational impact",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg text-slate-700"
              >
                <span className="text-blue-600 mt-1 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
            Selected projects, technical case studies, and deployment details
            can be found in the{" "}
            <a
              href="/#projects"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Projects section
            </a>{" "}
            of this portfolio.
          </p>
          <div className="p-4 md:p-5 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border-l-4 border-blue-300">
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Early-career academic software engineering projects
              (2019&ndash;2022):{" "}
              <a
                href="https://franklyn-swe.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline break-all"
              >
                franklyn-swe.github.io/portfolio/
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Entrepreneurship & Industry Experience */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Entrepreneurship & Industry Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              MudiaTech
            </h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3">
              I'm the Founder of MudiaTech, where I design and build AI-powered
              software systems, automation platforms, and scalable SaaS
              products.
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Through MudiaTech, I help businesses transform complex challenges
              into intelligent, data-driven solutions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Mudia Estate Limited
            </h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              I apply machine learning and analytics within the real estate
              domain, developing systems for:
            </p>
            <ul className="space-y-2">
              {[
                "House price prediction",
                "Market trend analysis",
                "Investment risk assessment",
                "Customer sentiment analysis",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-base md:text-lg text-slate-700"
                >
                  <span className="text-green-600 mt-1 shrink-0">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership & Collaboration */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Leadership & Collaboration
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
            I combine technical expertise with strategic thinking, working
            effectively with multidisciplinary teams and stakeholders to deliver
            scalable and maintainable systems.
          </p>
          <p className="text-base md:text-lg text-slate-700 font-semibold mb-3">
            My approach emphasises:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              "Clean system design",
              "Security and reliability",
              "Clear communication",
              "Long-term sustainability",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base md:text-lg text-slate-700"
              >
                <span className="text-indigo-600 mt-1 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Professional Focus & Values */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Professional Focus & Values
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl shadow-lg">
          <p className="text-base md:text-lg text-slate-700 font-semibold mb-6">
            I am driven by:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {[
              {
                icon: "\uD83C\uDFAF",
                title: "Measurable Impact",
                desc: "Building technology that delivers measurable real-world impact",
              },
              {
                icon: "\uD83D\uDE80",
                title: "Applied Practice",
                desc: "Applying data science and machine learning beyond theory",
              },
              {
                icon: "\uD83C\uDFD7\uFE0F",
                title: "System Design",
                desc: "Designing scalable, secure, and maintainable systems",
              },
              {
                icon: "\uD83D\uDCC8",
                title: "Continuous Growth",
                desc: "Continuous improvement through learning and applied practice",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
              >
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm md:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            I am particularly motivated by work that sits at the intersection of
            software engineering, machine learning, and data-informed
            decision-making.
          </p>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-10 rounded-2xl shadow-2xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-8 text-base md:text-lg leading-relaxed opacity-90 max-w-2xl">
          If you're a recruiter, client, or collaborator interested in working
          with a technically strong, impact-focused engineer &mdash; feel free
          to explore my work or get in touch to discuss opportunities and
          partnerships.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <a
            href="https://www.linkedin.com/in/franklyn-oliha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-5 md:px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/Franklyn-SWE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 text-white border-2 border-white/60 px-5 md:px-7 py-3 rounded-xl font-bold hover:bg-white/30 transition-all text-sm md:text-base"
          >
            View GitHub
          </a>
          <a
            href="mailto:franklyn.oliha@outlook.com"
            className="bg-white/20 text-white border-2 border-white/60 px-5 md:px-7 py-3 rounded-xl font-bold hover:bg-white/30 transition-all text-sm md:text-base"
          >
            Send Email
          </a>
          <a
            href="/Franklyn_Oliha_Public_CV.pdf"
            download
            className="bg-white/20 text-white border-2 border-white/60 px-5 md:px-7 py-3 rounded-xl font-bold hover:bg-white/30 transition-all text-sm md:text-base"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
