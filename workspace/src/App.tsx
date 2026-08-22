import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Journey from "./components/Journey";
import Features from "./components/Features";
import Engine from "./components/Engine";
import DataModel from "./components/DataModel";
import TechBiz from "./components/TechBiz";
import Footer from "./components/Footer";
import { Starfield } from "./components/ui";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* ambient sterrenveld achter alles */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Starfield count={55} />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Concept />
        <Journey />
        <Features />
        <Engine />
        <DataModel />
        <TechBiz />
        <Footer />
      </main>
    </div>
  );
}
