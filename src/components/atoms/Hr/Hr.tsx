"use client";

import React from "react";
import { styled } from "styled-components";

interface HrProps {
  margin?: string;
}

const Hr = ({ margin = "0" }: HrProps) => {
  return <StyledHr $margin={margin} />;
};

export default Hr;

const StyledHr = styled.hr<{ $margin: string }>`
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: ${({ $margin }) => $margin};
`;
