import { styled } from "styled-components";

interface HamburgerButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const HamburgerButton = ({
  isOpen,
  handleClick,
}: HamburgerButtonProps) => {
  return (
    <Container onClick={handleClick}>
      <LineTop $isOpen={isOpen} />
      <LineMiddle $isOpen={isOpen} />
      <LineBottom $isOpen={isOpen} />
    </Container>
  );
};

const Container = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;

const Line = styled.div`
  height: 2px;
  width: 20px;
  background: black;
  transition: all 0.2s ease;
`;

const LineTop = styled(Line)<{ $isOpen: boolean }>`
  ${({ $isOpen }) => `
        transform: ${$isOpen ? "rotate(45deg)" : "none"} ;
        transform-origin: top left;
        margin-bottom: 5px;
    `}
`;

const LineMiddle = styled(Line)<{ $isOpen: boolean }>`
  ${({ $isOpen }) => `
        opacity: ${$isOpen ? 0 : 1};
        transform: ${$isOpen} ? translateX(-16px) : none;
    `}
`;

const LineBottom = styled(Line)<{ $isOpen: boolean }>`
  ${({ $isOpen }) => `
        transform: ${$isOpen ? "translateX(-1px) rotate(-45deg)" : "none"};
        transform-origin: top left;
        margin-top: 5px;
    `}
`;
