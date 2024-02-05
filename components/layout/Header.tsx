export default function Header() {
  return (
    <header className="sticky top-5 left-0 w-full h-16 z-10 text-white">
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="h-full flex items-center gap-10 px-10 font-bold border-solid border-slim border-gray-50 rounded-full backdrop-blur-sm bg-blue-1000/50">
          <li>
            <a href="#main">🏠</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#career">Timeline</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
