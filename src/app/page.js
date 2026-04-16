import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <div className="overflow h-[550px]-hidden relative w-full sm:h-[600px] lg:h-[750px]">
        {/* VIDEO */}
        <video
          className="absolute inset-0 h-[550px] w-full object-cover sm:h-[600px] lg:h-[750px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/black-wave-bg-vd.mp4" type="video/mp4" />
        </video>
        {/* OVERLAY (optional for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col">
          <Navbar />
          <Hero />
        </div>
        {/* BOTTOM BLUR */}
        <div className="pointer-events-none absolute bottom-0 h-10 w-full backdrop-blur-[2px]" />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-5 lg:flex-row">
        <About />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}
