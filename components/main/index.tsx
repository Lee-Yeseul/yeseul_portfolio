import DoubleArrowDown from "@/public/assets/icons/doubleArrowDown.svg";

export default function Main() {
  return (
    <div className="h-screen font-bold relative">
      <div className="h-1/2 flex justify-around items-end ">
        <div className="w-full flex items-center justify-center">
          <div className="xl:text-title lg:text-title  md:text-title sm:text-6xl">
            YESEUL LEE
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center text-2xl">
        Create value with technology.
        <div className="group relative mt-20">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ec56a4] via-[#1f3ae9] to-[#98a7fe] opacity-75 blur-lg transition duration-500 group-hover:opacity-100"></div>
          <button className="relative rounded-lg bg-black px-7 py-4 text-white">
            contact me
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full">
        <div className="flex justify-center">
          <a href="#about-me">
            <DoubleArrowDown
              width={32}
              fill={"white"}
              className="transition ease-in-out hover:translate-y-2 hover:scale-110 duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
