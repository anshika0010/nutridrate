import About from "./components/About";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PopularFormulas from "./components/PopularFormulas";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <PopularFormulas />
      <About />
      <Benefits />
      <Contact />
    </main>
  );
}
