import AboutMe from "@/components/aboutMe";
import ParticleBackground from "@/components/common/ParticleBackground";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/main";
import Skills from "@/components/skills";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main
      id="root"
      className="max-h-screen bg-black text-white overflow-y-scroll snap-mandatory snap-y scroll-smooth"
    >
      <section id="main" className="snap-start">
        <Main />
      </section>
      <Header />
      <section id="about-me" className="snap-start">
        <AboutMe />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="career" className="snap-start">
        <TimeLine />
      </section>
      <Footer />
      <ParticleBackground />
    </main>
  );
}
