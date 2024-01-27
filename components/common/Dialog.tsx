"use-client";
import { ReactNode, useEffect, useRef } from "react";

import Portal from "./Potal";
import useOutsideClick from "@/hooks/useOutsideClick";

export type CompoundItem = {
  children?: ReactNode;
  className?: string;
};

type DialogProps = {
  children?: ReactNode;
  className?: string;
  onClickOutside: () => void;
};

type CloseButtonProps = {
  children?: ReactNode;
  className?: string;
  onClose: () => void;
};

export default function Dialog({
  children,
  onClickOutside,
  className,
}: DialogProps) {
  const dialogRef = useRef(null);
  useOutsideClick(dialogRef, onClickOutside);

  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body !== null) {
      const { overflow } = $body.style;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow;
      };
    }
  }, []);

  return (
    <Portal>
      <div className="bg-black-rgba fixed w-full top-0 bottom-0 left-0 right-0 z-50">
        <div
          ref={dialogRef}
          className="h-fit rounded-md bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <div className={`${className}`}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}

function Header({ children, className }: CompoundItem) {
  return <div className={className}>{children}</div>;
}

function Body({ children, className }: CompoundItem) {
  return <div className={className}>{children}</div>;
}

function Footer({ children, className }: CompoundItem) {
  return <div className={className}>{children}</div>;
}

function CloseButton({ onClose, className }: CloseButtonProps) {
  return (
    <button className={className} onClick={() => onClose()}>
      X
    </button>
  );
}

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.CloseButton = CloseButton;
