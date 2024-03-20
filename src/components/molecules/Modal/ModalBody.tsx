import { forwardRef, ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { IconButton } from "components/atoms/Button/IconButton";
import { Close } from "components/molecules/Icons/Close";

import { ModalHeader } from "./ModalHeader";
import {
  ModalSize,
  ModalSizeVariant,
  useModalVariant,
} from "./useModalVariant";

interface ModalBodyProps {
  size: keyof typeof ModalSizeVariant;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const ModalBody = ({
  size,
  title,
  onClose,
  children,
}: ModalBodyProps): ReactElement => {
  const { getModalVariant } = useModalVariant();

  return (
    <StyledBox
      data-testid="modal-body"
      $size={getModalVariant(size)}
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
};

export default forwardRef(ModalBody);

const StyledBox = styled.div<{ $size: ModalSize }>`
  ${({ $size }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        
        border-radius: unset;
        margin: 0 auto;

        background-color: white;
        border-radius: 12px;

        ${
          $size &&
          `
            width: ${$size.width};
            min-width: ${$size.minWidth};
            max-width: ${$size.maxWidth};
            height: ${$size.height};
            min-height: ${$size.minHeight};
            max-height: ${$size.maxHeight};
          `
        };
    `}
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
