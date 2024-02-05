"use client";

import styled from "styled-components";
import Image from "next/image";

import Typography from "components/atoms/Typography";

interface SummarizationCardItem {
  id: number;
  title: string;
  path: string;
  photo: {
    alt: string;
    description?: string;
    path: string;
  };
}

interface SummarizationCardProps {
  item: SummarizationCardItem;
}

export const SummarizationCard = ({ item }: SummarizationCardProps) => {
  return (
    <Wrapper data-testid="summarization-card">
      <Container>
        <Link href={item.path}>
          <StyledImage
            src={item.photo.path}
            fill
            alt={item.photo.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div>
          <Link href={item.path}>
            <Typography wrap>{item.title}</Typography>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Link = styled.a`
  position: relative;

  height: 180px;
  width: 100%;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #17b978;
  }

  p {
    line-height: 1.25;
  }
`;

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;
  border-radius: 8px;

  object-fit: cover;
  object-position: 50% 50%;
`;
