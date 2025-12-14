import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recruiters from "./pages/Recruiters";
import Clients from "./pages/Clients";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
