import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "🤖 LeadMate AI – Multi-Tenant Sales Automation Platform",
      category: "Production · Full-Stack Software Engineering",
      description:
        "Designed and engineered a production-ready, multi-tenant SaaS platform enabling SMEs to capture, qualify, and engage leads using AI-powered automation and structured lead scoring. Built as a complete end-to-end system covering backend APIs, database design, frontend dashboard, authentication, and deployment configuration. Tech Stack: Python · FastAPI · PostgreSQL · SQLAlchemy · React · TypeScript · TailwindCSS · JWT · Docker · OpenAI API · Twilio",
      gradient: "from-orange-500 to-red-500",
      details: {
        problem:
          "SMEs often lose revenue due to inconsistent follow-ups, fragmented communication channels, and lack of structured lead qualification. Existing CRM tools were either too complex, expensive, or not optimized for automation-driven workflows. Additionally, building a scalable SaaS platform requires secure multi-tenant isolation, role-based access control, and subscription enforcement — features often overlooked in small-scale systems.",
        solution:
          "I architected and implemented a modular, multi-tenant SaaS platform that centralizes lead capture, messaging, scoring, and analytics within a secure, scalable architecture. The system enables organizations to manage leads across email and messaging channels while enforcing organization-level data isolation and role-based permissions.",
        approach: [
          "Designed layered FastAPI backend (API → Services → Models → Utilities)",
          "Implemented multi-tenant PostgreSQL schema with organization isolation",
          "Built JWT-based authentication with RBAC (admin/member/viewer)",
          "Developed React + TypeScript dashboard with dynamic lead management",
          "Integrated OpenAI for contextual message generation",
          "Integrated Twilio and SMTP for multi-channel communication",
          "Enforced subscription limits at API level",
          "Provided Docker-ready deployment and production configuration",
        ],
        impact: [
          "📊 Delivered a scalable multi-tenant SaaS architecture with secure authentication and subscription enforcement.",
          "⚡ Automated AI-powered lead engagement across email and messaging channels.",
          "🚀 Demonstrated full-stack engineering capability from database modelling to deployment-ready infrastructure.",
        ],
      },
    },
    {
      title: "🔍 Human Trafficking Coercion Detection",
      category: "Applied Research · NLP",
      description:
        "An advanced natural language processing system using fine-tuned BERT models to identify multiple coercion indicators in unstructured text. Designed for analyst use in real-world NGO contexts to support consistent and scalable review of trafficking reports.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "🏠 UK House Price Prediction Platform",
      category: "Production · Data Science",
      description:
        "An end-to-end machine learning platform for predicting UK property prices using large-scale historical data, feature engineering, and ensemble modelling, delivered through an interactive web interface.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "⚡ Enterprise Automation Platform",
      category: "Production · Automation",
      description:
        "A production automation platform integrating backend services and workflow orchestration to streamline complex enterprise processes, reduce manual operational overhead, and improve system reliability.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "🧾 Real-Time Attendance Management System",
      category: "Production · Real-Time Systems",
      description:
        "A production-ready web application enabling real-time attendance tracking across multiple devices, featuring role-based access, live data synchronization, and session finalization to ensure data integrity during live events.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="mb-16" id="projects">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
          Featured Work
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
          A selection of real-world systems demonstrating applied software
          engineering, machine learning, and data science expertise.
        </p>
      </div>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:scale-[1.02]"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {project.title}
            </h3>
            <p
              className={`font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
            >
              {project.category}
            </p>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/recruiters"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
