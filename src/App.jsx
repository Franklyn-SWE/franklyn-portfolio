import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Recruiters from "./pages/Recruiters";
import Clients from "./pages/Clients";
import ProAgentCaseStudy from "./pages/ProAgentCaseStudy";
import MudiaTechRagCaseStudy from "./pages/MudiaTechRagCaseStudy";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Recruiters />} />
            <Route path="/recruiters" element={<Navigate to="/projects" replace />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projects/proagent-ai" element={<ProAgentCaseStudy />} />
            <Route path="/projects/mudiatech-rag" element={<MudiaTechRagCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
