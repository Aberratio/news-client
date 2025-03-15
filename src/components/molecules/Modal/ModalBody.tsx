import { forwardRef, ReactNode } from "react";
import styled from "styled-components";

import { IconButton } from "components/atoms/Button/IconButton";
import { Close } from "components/molecules/Icons/Close";

import { ModalHeader } from "./ModalHeader";

interface ModalBodyProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ title, onClose, children }, ref) => {
    return (
      <StyledBox
        ref={ref}
        data-testid="modal-body"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {title && <ModalHeader title={title} />}
        <StyledIconButton
          data-testid="modal-exit-button"
          tabIndex={0}
          onMouseDown={onClose}
        >
          <Close size={{ width: "1.25rem", height: "1.25rem" }} color="black" />
        </StyledIconButton>
        <ModalBodyInnerContainer>{children}</ModalBodyInnerContainer>
      </StyledBox>
    );
  }
);

export default ModalBody;

const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: unset;
  margin: 0 auto;

  background-color: white;
  border-radius: 12px;
`;

const ModalBodyInnerContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow-y: auto;
  height: 100%;
  padding: 1rem;

  @media (max-width: 999px) {
    flex-basis: auto;
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
