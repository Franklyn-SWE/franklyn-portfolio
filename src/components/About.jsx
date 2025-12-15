export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">
        Professional Profile
      </h2>
      <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
            <div className="text-sm text-slate-600">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-1">1st</div>
            <div className="text-sm text-slate-600">Class Honours</div>
          </div>
        </div>
        <p className="text-lg text-slate-700 mb-4 leading-relaxed">
          <strong>SC-cleared</strong> Software Engineer and Machine Learning
          Engineer with a <strong>First-Class BEng (Hons)</strong> in Software
          Engineering and <strong>MSc (Distinction)</strong> in Data Science
          from leading UK universities. I specialize in architecting intelligent
          systems that transform business challenges into scalable,
          production-ready solutions.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          My expertise spans the full technology stack—from training
          state-of-the-art NLP models using BERT and PyTorch, to designing
          robust APIs and cloud infrastructure on Azure. I thrive on bridging
          the gap between cutting-edge research and practical implementation,
          delivering solutions that drive measurable impact.
        </p>
      </div>
    </section>
  );
}
