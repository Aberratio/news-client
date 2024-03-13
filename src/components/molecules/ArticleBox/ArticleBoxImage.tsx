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
  position: relative;

  cursor: pointer;
  width: 100%;

  height: 180px;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;
