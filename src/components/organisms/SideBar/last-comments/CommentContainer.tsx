"use client";

import styled from "styled-components";

export const CommentContainer = styled.li`
  margin: 0;
  list-style-type: none;
  padding-top: 8px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;

  p {
    display: inline !important;
    line-height: 1.25;
  }
`;
