"use-client";
import { ReactNode } from "react";
import Dialog from "./Dialog";
import ImageCarousel from "./ImageCarousel";
import { StaticImageData } from "next/image";

interface ProjectDialogProps {
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  projectValue: {
    title: string;
    imageList: { id: number; src: StaticImageData }[];
    projectDescription: ReactNode;
    githubURL: string;
    serviceURL: string;
    blogURL?: string;
  };
}

export default function ProjectDialog({
  setIsDialogOpen,
  projectValue,
}: ProjectDialogProps) {
  const {
    title,
    imageList,
    projectDescription,
    githubURL,
    serviceURL,
    blogURL,
  } = projectValue;

  return (
    <Dialog
      className="w-[760px] text-black"
      onClickOutside={() => setIsDialogOpen(false)}
    >
      <Dialog.Header className="px-6 h-16 flex items-center justify-center border-solid border-b-[1px] border-gray-300">
        <Dialog.CloseButton
          className="absolute right-6"
          onClose={() => setIsDialogOpen(false)}
        />
        <div className="text-xl font-bold">{title}</div>
      </Dialog.Header>
      <Dialog.Body className="w-full h-[480px] flex flex-col items-center justify-center">
        <div className="flex w-full h-5/6 items-start">
          <div className="w-1/2 m-4 h-full">
            <ImageCarousel imageList={imageList} />
          </div>
          <div className="w-1/2 h-full py-4 mx-2 text-base flex flex-col overflow-auto">
            {projectDescription}
          </div>
        </div>
        <div className="w-full border-t-slim border-solid border-black flex flex-col gap-1 h-1/6 justify-center pl-4">
          <div>
            <span className="font-bold mr-2">GitHub: </span>
            <a className="hover:underline" href={githubURL}>
              {githubURL}
            </a>
          </div>
          <div>
            <span className="font-bold mr-2">Service URL: </span>
            <a className="hover:underline" href={serviceURL}>
              {serviceURL}
            </a>
          </div>
          {blogURL && (
            <div>
              <span className="font-bold mr-2">Blog 포스팅: </span>
              <a className="hover:underline" href={blogURL}>
                {blogURL}
              </a>
            </div>
          )}
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
