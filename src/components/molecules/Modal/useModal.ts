import { useModalContext } from "../../../providers/modal-provider/ModalContext";

export const useModal = (name: string) => {
  const { type, setType } = useModalContext();

  const openModal = () => {
    setType(name);
  };
  const closeModal = () => {
    setType(null);
  };
  const isOpen = name === type;

  return { isOpen, type, closeModal, openModal };
};
