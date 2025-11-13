import Image from "next/image";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contactme from "./components/contactme";
import Experience from "./components/experience";
import Footer from "./components/footer";
import ParticlesBackground from "./components/particlesbackground";

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
    <div className="bg-black">
      
    <Hero/>
    <Skills/>
    <Projects/>
    
    <Experience/>
    <Contactme/>
    <Footer/>
</div>
</main>
  );
}
