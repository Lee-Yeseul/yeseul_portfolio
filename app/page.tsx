import AboutMe from "@/components/aboutMe";
import Main from "@/components/main";
import Skill from "@/components/skill";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main id="root" className="bg-blue-1000 text-white">
      <section id="main">
        <Main />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <TimeLine />
      </section>
    </main>
  );
}
