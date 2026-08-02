"use client";

import Link from "next/link";
import styled from "styled-components";

interface ArticleBoxImageProps {
  path: string;
  photo: {
    alt: string;
    description?: string;
    path: string;
  };
}

export const ArticleBoxImage = ({ path, photo }: ArticleBoxImageProps) => {
  return (
    <ImageLink href={path} data-testid="article-box-image">
      <StyledImage
        src={photo.path}
        alt={photo.alt}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </ImageLink>
  );
};

const ImageLink = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  min-height: 190px;
  overflow: hidden;
  border-radius: 8px;
  background: #f0f1f3;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    min-height: 170px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktopS}) {
    min-height: 180px;
  }

  &:focus-visible {
    outline-offset: 4px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  transition: transform 220ms ease;

  ${ImageLink}:hover &,
  ${ImageLink}:focus-visible & {
    transform: scale(1.025);
  }
`;
