import Hero from "@/src/components/Hero";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Education from "@/src/components/Education";
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 pb-12 w-full">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </main>
  );
}
