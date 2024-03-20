import { createContext, useContext } from "react";

interface ModalContextProps {
  modalNode: HTMLElement | null;
  type: string | null;
  setType: (type: string | null) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  modalNode: null,
  type: null,
  setType: () => {},
});

export const useModalContext = (): ModalContextProps =>
  useContext(ModalContext);
