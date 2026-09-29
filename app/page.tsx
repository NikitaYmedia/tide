import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact"
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <TechStack />
      <Contact />
    </main>
  );
}