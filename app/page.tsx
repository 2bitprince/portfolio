import Hero from "@/components/Hero";
import LanguageFrameworks from "@/components/LanguageFramewords";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 pb-12 bg-white w-full">
      <Hero />
      <LanguageFrameworks />
    </main>
  );
}
