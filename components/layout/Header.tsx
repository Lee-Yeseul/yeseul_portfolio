export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 border-solid border-b-slim border-blue-50 z-10 backdrop-blur-sm bg-blue-1000/50 text-white">
      <nav className="w-full h-full pr-5">
        <ul className="w-full h-full flex items-center justify-end gap-10 font-bold">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
