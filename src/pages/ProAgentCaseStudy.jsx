import { useEffect } from "react";
import { Link } from "react-router-dom";

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Anthropic Claude",
  "Generative AI",
];

const engineeringHighlights = [
  "Built the full-stack application using Next.js and TypeScript.",
  "Designed the data layer with Supabase and PostgreSQL.",
  "Integrated Anthropic Claude for contextual reasoning across discovery, report generation and advisory workflows.",
  "Built AI-guided discovery to gather professional context, experience, objectives and challenges systematically.",
  "Developed contextual strategy reports and an ongoing advisory experience grounded in each user's profile and session context.",
  "Implemented authentication and user/session isolation to keep data correctly scoped.",
  "Designed usage quotas for discovery, advisory, profile and report-generation workflows.",
  "Built administrative analytics and feedback telemetry for public-beta product learning.",
  "Added production safeguards for duplicate actions, session validation, aborted requests and report-generation recovery.",
  "Deployed ProAgent AI as a publicly accessible production beta.",
];

const workflow = [
  "AI-Guided Discovery",
  "Professional Context / Profile",
  "Context Analysis",
  "Personalised Strategy Report",
  "Contextual Strategic Advisory",
  "Ongoing Saved Journey",
];

const architecture = [
  "User",
  "Next.js Application",
  "Authentication & Session Layer",
  "Discovery / Report / Advisory APIs",
  "Context Engineering Layer",
  "Anthropic Claude",
  "Supabase / PostgreSQL",
  "Reports, Sessions, Profiles, Analytics & Feedback",
];

const challenges = [
  {
    title: "Context continuity",
    description:
      "Keeping AI responses grounded in the correct discovery journey and professional profile as a user's work evolves.",
  },
  {
    title: "User and session isolation",
    description:
      "Correctly scoping users, sessions and stored context to prevent cross-user data exposure.",
  },
  {
    title: "Long-form report generation",
    description:
      "Managing larger AI-generation workloads with recovery behaviour when report creation encounters a problem.",
  },
  {
    title: "Reliable user actions",
    description:
      "Protecting production workflows from repeated clicks, duplicate requests and stale client operations.",
  },
  {
    title: "Controlled AI usage",
    description:
      "Applying quotas to expensive AI workflows while the product is in public beta.",
  },
  {
    title: "Product learning",
    description:
      "Using feedback telemetry and analytics to understand beta behaviour and guide product improvement.",
  },
];

const galleryItems = [
  {
    src: "/proagent_4.png",
    alt: "ProAgent AI strategic report history interface",
    label: "ProAgent AI Platform",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mb-8">
      {eyebrow && (
        <p className="text-sm font-bold tracking-[0.16em] uppercase text-blue-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Flow({ steps, tone = "blue" }) {
  const styles =
    tone === "teal"
      ? "border-teal-200 bg-teal-50 text-teal-900"
      : "border-blue-200 bg-blue-50 text-blue-900";

  return (
    <div className="space-y-2 max-w-3xl">
      {steps.map((step, index) => (
        <div key={step}>
          <div
            className={`rounded-xl border px-4 py-3 font-semibold text-center md:text-left ${styles}`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className="h-6 flex items-center justify-center text-slate-400" aria-hidden="true">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProAgentCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");

    document.title = "ProAgent AI Case Study | Franklyn Oliha";
    if (description) {
      description.setAttribute(
        "content",
        "Engineering case study of ProAgent AI, a production AI professional intelligence platform built with Next.js, Supabase, PostgreSQL and Anthropic Claude.",
      );
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <section className="mb-16 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                Featured AI Project
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
                Public Beta
              </span>
            </div>
            <p className="font-semibold text-blue-600 mb-3">Professional Intelligence Platform</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-5">
              ProAgent AI
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-7">
              ProAgent AI is a production-grade AI platform designed to help professionals move from structured discovery to personalised strategic insight, contextual reporting and ongoing AI-assisted advisory.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://proagent.mudiatech.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                View Live Product <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <Link
                to="/projects"
                className="inline-flex justify-center items-center rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Back to Projects
              </Link>
            </div>
          </div>
          <figure className="rounded-2xl border border-slate-200 bg-slate-900 p-2 shadow-xl">
            <img
              src="/proagent_4.png"
              alt="ProAgent AI strategic report history screen"
              className="w-full rounded-xl object-cover object-center"
            />
            <figcaption className="px-3 pt-3 pb-2 text-sm text-slate-300">
              ProAgent AI platform interface
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mb-16 md:mb-20">
        <SectionHeading eyebrow="Overview" title="Engineered for production AI workflows" />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
          <p className="max-w-4xl text-base md:text-lg leading-8 text-slate-700">
            I designed and engineered ProAgent AI end-to-end, with emphasis on production reliability, secure user isolation, contextual AI interactions, controlled AI usage, analytics and scalable application architecture. It is a real, publicly deployed product built to support ongoing professional journeys rather than an academic demonstration.
          </p>
        </div>
      </section>

      <section className="mb-16 md:mb-20">
        <SectionHeading eyebrow="Engineering" title="What I engineered" description="Core application, AI and reliability work delivered across the platform." />
        <div className="grid md:grid-cols-2 gap-4">
          {engineeringHighlights.map((highlight) => (
            <div key={highlight} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-slate-700 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mb-16 md:mb-20">
        <div>
          <SectionHeading eyebrow="Product flow" title="From discovery to ongoing advisory" />
          <Flow steps={workflow} tone="teal" />
        </div>
        <div>
          <SectionHeading eyebrow="Conceptual architecture" title="A context-aware AI application" />
          <Flow steps={architecture} />
        </div>
      </section>

      <section className="mb-16 md:mb-20">
        <SectionHeading eyebrow="Problem solving" title="Engineering challenges and solutions" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((challenge) => (
            <article key={challenge.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
              <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-20 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-6 md:p-9 shadow-xl">
        <div className="max-w-3xl mb-6">
          <p className="text-sm font-bold tracking-[0.16em] uppercase text-blue-300 mb-3">
            Production maturity
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">More than an LLM API call</h2>
        </div>
        <p className="max-w-3xl text-slate-200 text-base md:text-lg leading-relaxed mb-6">
          Production AI engineering requires durable controls around the model interaction. ProAgent AI includes authentication, user and session guards, duplicate-request prevention, abort handling, report-generation recovery, usage quotas, feedback telemetry, admin analytics and persistent report and session history.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Authentication",
            "Session guards",
            "Request reliability",
            "Usage quotas",
            "Feedback telemetry",
            "Admin analytics",
            "Persistent history",
          ].map((item) => (
            <span key={item} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-20">
        <SectionHeading eyebrow="Technology" title="Core platform stack" />
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 font-semibold text-blue-700">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Product gallery" title="ProAgent AI in use" description="The gallery component is ready for Discovery, Report History and Profile screens when those assets are added." />
        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <figure key={item.src} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              <img src={item.src} alt={item.alt} className="w-full rounded-xl object-cover" />
              <figcaption className="px-2 pt-4 pb-2 font-semibold text-slate-900">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
