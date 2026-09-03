import { useEffect } from "react";
import { Link } from "react-router-dom";

const capabilities = [
  "Grounded answer generation",
  "Approved knowledge sources",
  "Source attribution",
  "Knowledge-base document references",
];

const journey = [
  "User question",
  "Approved knowledge sources",
  "Grounded response generation",
  "Answer with source references",
];

export default function MudiaTechRagCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "MudiaTech RAG Knowledge Assistant | Franklyn Oliha";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <section className="mb-16 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800 mb-5">
              Featured RAG Project
            </span>
            <p className="font-semibold text-amber-700 mb-3">
              Production AI · Retrieval-Augmented Generation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-5">
              MudiaTech RAG Knowledge Assistant
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-7">
              A public knowledge assistant designed to turn user questions into grounded answers from approved MudiaTech sources, with clear source attribution and supporting document references.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://rag.mudiatech.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 shadow-lg transition-colors hover:bg-amber-400"
              >
                Try Live RAG <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <Link
                to="/projects"
                className="inline-flex justify-center items-center rounded-xl border border-amber-200 bg-white px-5 py-3 font-semibold text-amber-800 transition-colors hover:bg-amber-50"
              >
                Back to Projects
              </Link>
            </div>
          </div>
          <figure className="rounded-2xl border border-slate-200 bg-[#121212] p-2 shadow-xl">
            <img
              src="/screenshots/mudiatech-rag.png"
              alt="MudiaTech Knowledge Assistant displaying a grounded answer and approved source cards"
              className="w-full rounded-xl object-contain object-center"
            />
            <figcaption className="px-3 pt-3 pb-2 text-sm text-slate-300">
              MudiaTech Knowledge Assistant with grounded answer and source attribution
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mb-16 md:mb-20">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-bold tracking-[0.16em] uppercase text-amber-700 mb-3">
            Overview
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Grounded answers with visible evidence
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            The assistant gives users a clear way to explore approved MudiaTech knowledge. Rather than presenting an answer without context, the experience makes the supporting source records and document references visible alongside the response.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((capability) => (
            <div key={capability} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-800">{capability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mb-16 md:mb-20 items-start">
        <div>
          <p className="text-sm font-bold tracking-[0.16em] uppercase text-amber-700 mb-3">
            Product flow
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            From question to attributable answer
          </h2>
          <div className="space-y-2">
            {journey.map((step, index) => (
              <div key={step}>
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-950 text-center md:text-left">
                  {step}
                </div>
                {index < journey.length - 1 && (
                  <div className="h-6 flex items-center justify-center text-slate-400" aria-hidden="true">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <figure className="rounded-2xl border border-slate-200 bg-[#121212] p-3 shadow-lg">
          <img
            src="/screenshots/mudiatech-rag.png"
            alt="MudiaTech Knowledge Assistant response with approved knowledge source references"
            className="w-full rounded-xl object-contain object-center"
          />
          <figcaption className="px-2 pt-4 pb-2 font-semibold text-slate-100">
            Primary product interface
          </figcaption>
        </figure>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 p-6 md:p-9 shadow-xl">
        <p className="text-sm font-bold tracking-[0.16em] uppercase text-amber-300 mb-3">
          Product experience
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Designed to keep the answer connected to its sources
        </h2>
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-slate-200">
          The public interface pairs a real user question with a grounded response and its approved MudiaTech source cards. This makes the knowledge context available at the point of use and gives users a direct path back to the relevant documents.
        </p>
      </section>
    </div>
  );
}
