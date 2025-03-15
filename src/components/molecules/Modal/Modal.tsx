import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { useEventListener } from "core/hooks/useEventListener";
import styled from "styled-components";

import { useModalContext } from "../../../providers/modal-provider/ModalContext";

import ModalBody from "./ModalBody";
import { ModalSizeVariant } from "./useModalVariant";

interface ModalProps {
  name: string;
  size?: keyof typeof ModalSizeVariant;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ name, title, onClose, children }: ModalProps) => {
  const { modalNode, type } = useModalContext();
  const modalBodyRef = useRef(null);

  const close = (event: KeyboardEvent) => {
    event.stopPropagation();

    if (event.key === "Escape" && type) {
      onClose();
    }
  };

  useEventListener({
    eventName: "keydown",
    listener: close,
    updateValue: type,
  });

  if (modalNode && name === type) {
    return createPortal(
      <BaseModalBackground data-testid="modal" onClick={onClose}>
        <ModalWrapper data-testid="modal-wrapper">
          <ModalBody onClose={onClose} ref={modalBodyRef} title={title}>
            {children}
          </ModalBody>
        </ModalWrapper>
      </BaseModalBackground>,
      modalNode
    );
  }

  return null;
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  max-width: 100vw;
  max-height: 100vh;
  height: 100%;
  flex-grow: 1;
`;

const BaseModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  z-index: 1000;
  overflow-x: hidden;
  overflow-y: hidden;

  background-color: rgba(0, 0, 0, 0.5);
`;
