import AboutMe from "@/components/aboutMe";
import ParticleBackground from "@/components/common/ParticleBackground";
import Header from "@/components/layout/Header";
import Main from "@/components/main";
import Skills from "@/components/skills";
import TimeLine from "@/components/timeline";

/**
 *
 * @TODO
 * 1. layout 정리하기 ✅
 * 2. 아이콘 가져다가 붙이기 ✅
 * -> webpack svgr로 바꿔서 색 바꿀 수 있게 수정하기 
 * 3. scroll하면 한 화면만 나오도록 ✅
 *  scroll snap
 * 5. main에서 header 없애기 ✅
 * sticky
 * 6. 애니메이션 추가 ✅
 react particles : https://www.youtube.com/watch?v=0K1UfnsMPB8
 canvas api: https://blog.dalgu.app/dev/1
 * 7. 내용 작성
  8. 반응형 
  xl:은 1/2 나머지는 4/5로 지정하기 ✅
 */

export default function Home() {
  return (
    <main
      id="root"
      className="max-h-screen bg-black text-white overflow-y-scroll snap-mandatory snap-y"
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
      <ParticleBackground />
    </main>
  );
}
