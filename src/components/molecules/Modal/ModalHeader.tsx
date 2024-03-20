import { ReactNode } from "react";
import styled from "styled-components";

import Hr from "components/atoms/Hr";
import Typography from "components/atoms/Typography";

interface ModalHeaderProps {
  title?: ReactNode;
}

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <ModalTitle dataTestId="modal-header" variant="h2">
          {title}
        </ModalTitle>
      </Wrapper>
      <Hr />
    </Container>
  );
};

const ModalTitle = styled(Typography)`
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Container = styled.div`
  position: relative;
`;
