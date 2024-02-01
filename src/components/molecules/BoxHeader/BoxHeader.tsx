"use client";

import Typography from "components/atoms/Typography";
import styled from "styled-components";

interface BoxHeaderProps {
  name: string;
  children?: React.ReactNode;
}

export const BoxHeader = ({ name, children }: BoxHeaderProps) => {
  return (
    <Wrapper data-testid="header">
      <Typography variant="h2" isCapitalized>
        {name}
      </Typography>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 18px;
  position: relative;
  justify-content: space-between;
  margin-left: 12px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 6px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;
