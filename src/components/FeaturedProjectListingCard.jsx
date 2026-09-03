import { Link } from "react-router-dom";

export default function FeaturedProjectListingCard({
  title,
  category,
  description,
  technologies,
  highlights,
  liveProductUrl,
  caseStudyPath,
  badge = "Featured AI Project",
  status = "Public Beta",
}) {
  return (
    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-blue-700 hover:shadow-2xl transition-shadow">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
          {badge}
        </span>
        {status && (
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
            {status}
          </span>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-blue-700 font-semibold mb-4">{category}</p>
      <p className="text-slate-700 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-bold text-slate-900 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <h4 className="font-bold text-slate-900 mb-2">Engineering Highlights:</h4>
        <p className="text-slate-700 leading-relaxed">{highlights}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={liveProductUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View Live Product
        </a>
        <Link
          to={caseStudyPath}
          className="inline-flex items-center rounded-lg border border-blue-200 px-4 py-2 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
        >
          View Case Study
        </Link>
      </div>
    </article>
  );
}
