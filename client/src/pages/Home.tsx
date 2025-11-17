import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import CurrentFocus from "@/components/CurrentFocus";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Awards />
      <CurrentFocus />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}
