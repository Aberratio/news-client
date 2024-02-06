"use client";

import React from "react";
import { styled } from "styled-components";

const Hr = () => {
  return <StyledHr />;
};

export default Hr;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: 0;
`;
