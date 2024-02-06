"use client";

import styled from "styled-components";

export const CommentContainer = styled.li`
  ${({ theme }) => `
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
    gap: 8px;

    a {
      color: ${theme.general.primaryColor};
      cursor: pointer;
    }

    p {
      line-height: 1.25;
      margin: 2px 0;
    }
  `}
`;
