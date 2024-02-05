"use client";

import styled from "styled-components";
import Image from "next/image";

import Typography from "components/atoms/Typography";
import { MetadataBar } from "components/organisms/Article/MetadataBar";
import { StatisticBar } from "components/molecules/SummarizationCard/StatisticBar";
import Link from "next/link";
import { StatisticsItem } from "types/StatisticsItem";

interface SummarizationCardWithStatsItem {
  id: number;
  title: string;
  path: string;
  photo: {
    alt: string;
    description?: string;
    path: string;
  };
  statistics: StatisticsItem;
}

interface SummarizationCardWithStatsProps {
  item: SummarizationCardWithStatsItem;
}

export const SummarizationCardWithStats = ({
  item,
}: SummarizationCardWithStatsProps) => {
  return (
    <Wrapper data-testid="summarization-card">
      <Container>
        <ImageLink href={item.path}>
          <StyledImage
            src={item.photo.path}
            fill
            alt={item.photo.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageLink>
        <StyledLink href={item.path}>
          <Typography wrap marginBottom={2}>
            {item.title}
          </Typography>
        </StyledLink>
        <MetadataBar authorName="anm" createdOn="2024-02-02" />
        <StatisticBar statistics={item.statistics} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLink = styled(Link)`
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

const ImageLink = styled(Link)`
  position: relative;

  cursor: pointer;
  width: 100%;

  height: 180px;
`;

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;
  border-radius: 8px;

  object-fit: cover;
  object-position: 50% 50%;
`;
