"use client";

import { styled } from "styled-components";

export const AllCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  margin: 24px 0 64px 0;

  @media screen and (max-width: 567px) {
    gap: 10px;
    margin-bottom: 48px;
  }
`;
