"use client";

import styled from "styled-components";
import { ArticlesOverview } from "../Article/summarization/ArticlesOverview";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { Suspense } from "react";

export const Wall = () => {
  const { categories } = useOrganizationInfo();

  return (
    <Wrapper>
      <Container>
        {categories.map((category) => {
          return (
            <Suspense>
              <ArticlesOverview category={category} key={category.id} />
            </Suspense>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`;
