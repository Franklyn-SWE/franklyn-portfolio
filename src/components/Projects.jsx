import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const hackathonSectionRef = useRef(null);
  const [isHackathonVisible, setIsHackathonVisible] = useState(false);

  useEffect(() => {
    const sectionElement = hackathonSectionRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHackathonVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  const revealBaseClass =
    "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const revealHiddenClass = "opacity-0 translate-y-4";
  const revealVisibleClass = "opacity-100 translate-y-0";

  const projects = [
    {
      title: "🤖 LeadMate AI – Multi-Tenant Sales Automation Platform",
      category: "Production · Full-Stack Software Engineering",
      description:
        "Designed and engineered a production-ready, multi-tenant SaaS platform enabling SMEs to capture, qualify, and engage leads using AI-powered automation and structured lead scoring. Built as a complete end-to-end system covering backend APIs, database design, frontend dashboard, authentication, and deployment configuration.",
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
    <>
      <section
        ref={hackathonSectionRef}
        className="mt-8 mb-16 bg-[#fafafa] border-t border-[#eee] pt-[80px] pb-[60px] px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-10 ${revealBaseClass} ${
              isHackathonVisible ? revealVisibleClass : revealHiddenClass
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
              From Hackathons to Production AI Systems
            </h2>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mb-10">
              <div
                className={`md:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 ${revealBaseClass} ${
                  isHackathonVisible ? revealVisibleClass : revealHiddenClass
                }`}
                style={{
                  transitionDelay: isHackathonVisible ? "100ms" : "0ms",
                }}
              >
                <img
                  src="/hk_1.jpeg"
                  alt="Climate Data Hackathon featured design"
                  className="w-full h-72 md:h-[22rem] object-contain rounded-lg"
                />
              </div>
              <div
                className={`md:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 ${revealBaseClass} ${
                  isHackathonVisible ? revealVisibleClass : revealHiddenClass
                }`}
                style={{
                  transitionDelay: isHackathonVisible ? "200ms" : "0ms",
                }}
              >
                <img
                  src="/hk_3.jpeg"
                  alt="Climate Data Hackathon group photo"
                  className="w-full h-72 md:h-[22rem] object-cover rounded-lg"
                />
              </div>
            </div>

            <div
              className={`max-w-3xl ${revealBaseClass} ${
                isHackathonVisible ? revealVisibleClass : revealHiddenClass
              }`}
              style={{ transitionDelay: isHackathonVisible ? "250ms" : "0ms" }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Climate Change Data Hackathon - University of Bolton (2021)
              </h3>
              <p className="font-semibold mb-5 text-emerald-600">
                Early Experience · Data Science
              </p>
              <p className="text-slate-700 text-base md:text-lg leading-8 mb-5">
                Participated in a climate-focused data hackathon working with
                real-world environmental datasets to develop actionable
                insights.
              </p>
              <p className="text-slate-700 text-base md:text-lg leading-8 mb-7">
                This experience marked the early stage of my journey into data
                science and machine learning, building the foundation for my
                transition into production-level AI systems.
              </p>
              <a
                href="https://www.bolton.gov.uk/news/article/1314/climate-change-hackathon-making-a-difference-with-data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-blue-200 text-blue-700 px-4 py-2 font-semibold hover:bg-blue-50 transition-colors"
              >
                View Official Event Coverage →
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
