import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
