"use client";

import { ReactNode, useEffect, useRef,useState } from "react";

import { ModalContext } from "./ModalContext";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalNode = useRef(null);
  const [stateModalNode, setStateModalNode] = useState<HTMLElement | null>(
    null
  );
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    setStateModalNode(modalNode.current);
  }, [modalNode]);

  return (
    <ModalContext.Provider
      value={{
        modalNode: stateModalNode,
        type,
        setType,
      }}
    >
      {children}
      <div data-testid="modal-div" ref={modalNode} />
    </ModalContext.Provider>
  );
};
