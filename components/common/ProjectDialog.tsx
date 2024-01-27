"use-client";
import Dialog from "./Dialog";

interface Props {
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export default function ProjectDialog({ setIsDialogOpen }: Props) {
  return (
    <Dialog className="w-[720px]" onClickOutside={() => setIsDialogOpen(false)}>
      <Dialog.Header className="px-6 h-16 flex items-center justify-center border-solid border-b-[1px] border-gray-300">
        <Dialog.CloseButton
          className="absolute right-6"
          onClose={() => setIsDialogOpen(false)}
        />
        <div className="text-xl font-bold">프로젝트 이름</div>
      </Dialog.Header>
      <Dialog.Body className="w-full h-[520px] p-6 flex flex-col items-center justify-center">
        <div className="flex w-full h-full ">
          <div className="w-1/2  bg-pink-400">사진 자리</div>
          <div className="w-1/2 p-2 text-base">
            <div className="text-gray-500">2022.02 - 2022.02</div>
            <div className="mt-1.5">
              대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 모든
              국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 나는 헌법을
              준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의
              증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히
              수행할 것을 국민 앞에 엄숙히 선서합니다. 국회는 국무총리 또는
              국무위원의 해임을 대통령에게 건의할 수 있다. 국회의원의 수는
              법률로 정하되, 200인 이상으로 한다. 군인은 현역을 면한 후가 아니면
              국무총리로 임명될 수 없다.
            </div>
            <div className="mt-5 pt-5 border-t-slim border-solid border-black ">
              <div className="flex w-full items-center">
                <div className="basis-1/3 font-bold">✔️ 주요 기능</div>
                <div className="basis2/3">참석자의 이름 등등등</div>
              </div>
              <div className="flex w-full items-center">
                <div className="basis-1/3 font-bold">✔️ GitHub</div>
                <div className="basis2/3">참석자의 이름 등등등</div>
              </div>
              <div className="flex w-full items-center">
                <div className="basis-1/3 font-bold">✔️ URL</div>
                <div className="basis2/3">참석자의 이름 등등등</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
