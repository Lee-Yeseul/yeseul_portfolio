export default function Main() {
  return (
    <div className="h-screen font-bold z-50">
      <div className="h-1/2 flex justify-around items-end">
        <div className="w-full flex items-center justify-around">
          <div className="text-2xl ">무슨 내용을</div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-title "> YESEUL LEE</div>
          </div>
          <div className="text-2xl ">담을까요?</div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="text-xl text-gray-200">
          2023년, 프론트엔드 엔지니어들의 치열한 고민과 몰입에 관한 이야기
        </div>
        <button className="mt-5 p-2 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50 hover:text-blue-1000 text-xl">
          contact me!
        </button>
      </div>
    </div>
  );
}
