export default function Recruiters() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects & Technical Expertise
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
          Applied software, machine learning, and data science systems built for
          real-world use
        </p>
      </div>

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <p className="text-base md:text-lg text-slate-600 px-4">
            Representative real-world systems across AI, data science, and
            software engineering
          </p>
        </div>
        <div className="space-y-8">
          {/* Human Trafficking Coercion Detection System */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              🔍 Human Trafficking Coercion Detection System
            </h3>
            <p className="text-blue-600 font-semibold mb-4">
              Applied Research · NLP & Machine Learning
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Developed an advanced natural language processing system using
              fine-tuned BERT models to identify multiple coercion indicators
              within unstructured trafficking reports. The system supports
              multi-label classification of psychological, physical, financial,
              and movement-restriction coercion patterns and was designed for
              analyst use in real-world NGO environments.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "BERT", "NLP", "Transformers"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Impact:</h4>
              <p className="text-slate-700">
                📊 Improved consistency in coercion analysis and reduced manual
                review effort for analysts working with large volumes of
                narrative reports.
              </p>
            </div>

            {/* Case Study Section */}
            <details className="mb-4">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold mb-2">
                📄 Case Study (Click to expand)
              </summary>
              <div className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Problem</h5>
                    <p className="text-slate-700 leading-relaxed">
                      Human trafficking reports are largely unstructured and
                      contain subtle indicators of coercion that are difficult
                      to detect consistently through manual review. Analysts
                      face scale limitations, subjectivity, and time pressure
                      when reviewing large volumes of narrative text.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Solution</h5>
                    <p className="text-slate-700 leading-relaxed">
                      I designed and implemented an NLP-based machine learning
                      system using a fine-tuned BERT model to automatically
                      detect multiple coercion indicators within textual
                      reports. The system supports multi-label classification,
                      reflecting the real-world complexity where multiple forms
                      of coercion can coexist.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technical Approach
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>Text preprocessing and tokenisation pipeline</li>
                      <li>
                        Fine-tuned BERT model for contextual understanding
                      </li>
                      <li>Multi-label classification output layer</li>
                      <li>
                        Analyst-friendly interface for inference and testing
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Key Decisions
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Selected BERT to capture semantic context beyond keyword
                        matching
                      </li>
                      <li>
                        Designed outputs to support overlapping coercion
                        categories
                      </li>
                      <li>
                        Followed CRISP-DM methodology to structure the ML
                        lifecycle
                      </li>
                      <li>
                        Prioritised ethical and responsible AI considerations
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Outcome</h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Improved consistency and speed of coercion analysis
                      </li>
                      <li>Reduced analyst workload</li>
                      <li>
                        Demonstrated applied NLP in a sensitive, real-world
                        domain
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technologies
                    </h5>
                    <p className="text-slate-700">
                      Python · PyTorch · BERT · NLP · Transformers
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* UK House Price Prediction Platform */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              🏠 UK House Price Prediction Platform
            </h3>
            <p className="text-purple-600 font-semibold mb-4">
              Production · Data Science
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Built an end-to-end machine learning platform for predicting UK
              property prices using large-scale historical transaction data. The
              system applies feature engineering and ensemble modelling
              techniques to generate reliable valuations and market insights
              through an interactive web interface.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Streamlit",
                  "Scikit-learn",
                  "XGBoost",
                  "Pandas",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-semibold border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Impact:</h4>
              <p className="text-slate-700">
                📊 Data-driven property valuation and market insight generation
                using real UK housing data.
              </p>
            </div>

            {/* Case Study Section */}
            <details className="mb-4">
              <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-semibold mb-2">
                📄 Case Study (Click to expand)
              </summary>
              <div className="mt-4 p-6 bg-purple-50 rounded-lg border border-purple-200">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Problem</h5>
                    <p className="text-slate-700 leading-relaxed">
                      Property valuation is influenced by multiple interacting
                      factors, making accurate price prediction difficult using
                      simple heuristics. Buyers, sellers, and analysts require
                      data-driven insights derived from large-scale historical
                      data.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Solution</h5>
                    <p className="text-slate-700 leading-relaxed">
                      I built an end-to-end machine learning platform that
                      predicts UK house prices using real transaction data. The
                      system combines feature engineering, ensemble modelling,
                      and an interactive interface to deliver practical
                      valuation insights.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technical Approach
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Data ingestion and preprocessing of large housing
                        datasets
                      </li>
                      <li>
                        Feature engineering incorporating regional and property
                        attributes
                      </li>
                      <li>Model benchmarking and ensemble techniques</li>
                      <li>
                        Interactive deployment using a lightweight web interface
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Key Decisions
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>Used ensemble models to balance bias and variance</li>
                      <li>Focused on interpretability alongside accuracy</li>
                      <li>
                        Designed the platform for usability by non-technical
                        users
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Outcome</h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Reliable property price estimates using real UK data
                      </li>
                      <li>
                        Demonstrated full ML lifecycle from data to deployment
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technologies
                    </h5>
                    <p className="text-slate-700">
                      Python · Streamlit · Scikit-learn · XGBoost · Pandas
                    </p>
                  </div>
                </div>
              </div>
            </details>

            <div>
              <a
                href="https://github.com/Franklyn-SWE/UK_HOUSE_PRICE_PREDICTION_V2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-semibold"
              >
                💻 GitHub
              </a>
            </div>
          </div>

          {/* Real-Time Attendance Management System */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              🧾 Real-Time Attendance Management System
            </h3>
            <p className="text-green-600 font-semibold mb-4">
              Production · Real-Time Systems
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Designed and deployed a real-time web application for managing
              live event attendance across multiple devices. The system enables
              concurrent user input, instant data synchronization, role-based
              access control, and session finalization to ensure data integrity
              during live operations.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "Firebase",
                  "Firestore",
                  "Auth",
                  "HTML",
                  "CSS",
                  "Bootstrap",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold border border-green-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Impact:</h4>
              <p className="text-slate-700">
                📊 Replaced manual counting processes with a reliable, scalable
                real-time system used in live environments.
              </p>
            </div>

            {/* Case Study Section */}
            <details className="mb-4">
              <summary className="cursor-pointer text-green-600 hover:text-green-800 font-semibold mb-2">
                📄 Case Study (Click to expand)
              </summary>
              <div className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Problem</h5>
                    <p className="text-slate-700 leading-relaxed">
                      Manual attendance counting during live events is
                      error-prone, slow, and difficult to reconcile when
                      multiple entry points and staff are involved. Existing
                      solutions lacked real-time synchronization and role-based
                      controls.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Solution</h5>
                    <p className="text-slate-700 leading-relaxed">
                      I designed and deployed a real-time web application that
                      allows multiple users to submit attendance counts
                      concurrently, with instant synchronization and
                      administrative controls to lock sessions and preserve data
                      integrity.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technical Approach
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Client-side web interface for users and administrators
                      </li>
                      <li>
                        Real-time data synchronization using Firestore listeners
                      </li>
                      <li>Role-based authentication and access control</li>
                      <li>Cloud deployment for scalability and reliability</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Key Decisions
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Used real-time listeners to eliminate refresh-based
                        workflows
                      </li>
                      <li>
                        Implemented session finalization to prevent post-event
                        edits
                      </li>
                      <li>Designed safeguards against invalid data states</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Outcome</h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Replaced manual processes with a reliable real-time
                        system
                      </li>
                      <li>Actively used in live operational environments</li>
                      <li>Improved accuracy and reduced reconciliation time</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technologies
                    </h5>
                    <p className="text-slate-700">
                      JavaScript · Firebase (Firestore, Auth, Hosting) · HTML ·
                      CSS · Bootstrap
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* Enterprise Automation Platform */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              ⚡ Enterprise Automation Platform
            </h3>
            <p className="text-indigo-600 font-semibold mb-4">
              Enterprise · Automation & Systems
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Architected and deployed a backend automation platform to
              streamline complex business workflows for a large enterprise
              client. The solution reduced manual processing through system
              integration, background task orchestration, and secure data
              handling.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Django",
                  "Azure",
                  "Docker",
                  "PostgreSQL",
                  "n8n",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold border border-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 mb-2">Impact:</h4>
              <p className="text-slate-700">
                📊 Significant reduction in manual processing time and
                operational overhead.
              </p>
            </div>

            {/* Case Study Section */}
            <details className="mb-4">
              <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-semibold mb-2">
                📄 Case Study (Click to expand)
              </summary>
              <div className="mt-4 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Problem</h5>
                    <p className="text-slate-700 leading-relaxed">
                      Manual, repetitive business workflows were consuming
                      significant operational time and introducing
                      inconsistencies across systems within a large enterprise
                      environment. Processes relied heavily on human
                      intervention, leading to delays, errors, and limited
                      scalability.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Solution</h5>
                    <p className="text-slate-700 leading-relaxed">
                      I architected and deployed an automation platform to
                      orchestrate workflows, integrate multiple systems, and
                      reduce manual intervention. The solution combined backend
                      services with low-code workflow automation to enable
                      reliable, auditable, and scalable process execution.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technical Approach
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Backend services developed using Django for business
                        logic and integrations
                      </li>
                      <li>
                        Workflow orchestration implemented using n8n for
                        event-driven automation
                      </li>
                      <li>
                        Secure database integration for state and execution
                        tracking
                      </li>
                      <li>
                        Containerised deployment for portability and scalability
                      </li>
                      <li>
                        Cloud hosting on Azure for reliability and operational
                        control
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Key Decisions
                    </h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Chose n8n to enable rapid workflow creation, visibility,
                        and maintainability
                      </li>
                      <li>
                        Separated orchestration logic (n8n) from core
                        application logic (Django)
                      </li>
                      <li>
                        Containerised services to simplify deployment and
                        environment consistency
                      </li>
                      <li>
                        Designed workflows with failure handling and retry
                        mechanisms
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Outcome</h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>Significant reduction in manual processing effort</li>
                      <li>
                        Improved consistency and reliability of automated
                        workflows
                      </li>
                      <li>Faster turnaround times for operational processes</li>
                      <li>
                        Scalable automation foundation for future integrations
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">
                      Technologies
                    </h5>
                    <p className="text-slate-700">
                      Python · Django · n8n · Azure · Docker · PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Additional Data Science Work Section */}
      <section className="mb-12">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-slate-800">
            Additional Data Science Work
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-300 rounded"></div>
        </div>

        <div className="space-y-4">
          {/* Customer Segmentation Using Clustering */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-orange-300 transition-all">
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              📊 Customer Segmentation Using Clustering
            </h4>
            <p className="text-orange-600 font-semibold text-sm mb-3">
              Data Science · Unsupervised Learning
            </p>
            <p className="text-slate-700 text-sm mb-3 leading-relaxed">
              Built a customer segmentation system using unsupervised learning
              techniques to group customers based on behavioural and demographic
              attributes. The analysis supports targeted engagement strategies
              and data-driven business decisions.
            </p>
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-white text-orange-700 px-2 py-1 rounded text-xs font-semibold border border-orange-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <a
                href="https://github.com/Franklyn-SWE/Customer_Segmentation_Clustering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800 font-semibold text-sm"
              >
                💻 View on GitHub →
              </a>
            </div>
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

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
        <p className="mb-6 text-lg">
          Comprehensive CV covering key projects, technical expertise, and
          references available upon request.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/Franklyn_Oliha_Data_Scientist_Machine_Learning_Engineer_upd_CV.pdf"
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
