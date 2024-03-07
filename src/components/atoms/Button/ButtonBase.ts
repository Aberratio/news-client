import styled from "styled-components";

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 32px;

  overflow: hidden;
  outline: none;
  box-shadow: none;

  &:hover {
    cursor: pointer;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    outline: none;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
    box-shadow: none;
  }
`;
