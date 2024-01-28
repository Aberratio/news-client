import { Link as RRDLink, To } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  to: To;
  children: any;
}

export const LinkButton = ({ to, children }: LinkProps) => {
  return (
    <StyledLink to={to} $isDisabled={false}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(RRDLink)<{ $isDisabled?: boolean }>`
  ${({ theme, $isDisabled }) => `
  display: flex;
  justify-content: center;

  height: 2rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  min-width: 7rem;

  color: ${theme.buttons.link.color};
  background-color: none;
  background: none;
  border: none;
  cursor: pointer;

  ${
    !$isDisabled &&
    `
    &:hover {
      color: ${theme.buttons.link.onHoverColor};
      background-color: none;
      background: none;
      border: none;
    }

    &:focus {
      color: ${theme.buttons.link.onHoverColor};
      background-color: none;
      background: none;
      border: none;
    }
    `
  }
    `}
`;
