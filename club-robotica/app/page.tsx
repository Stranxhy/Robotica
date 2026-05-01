import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Vision from "./components/Vision";
import About from "./components/About";
import Projects from "./components/Projects";
import Videos from "./components/Videos";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Vision />
        <Projects />
        <Videos />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
