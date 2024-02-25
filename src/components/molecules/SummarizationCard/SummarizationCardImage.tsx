"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface SummarizationCardImageProps {
  path: string;
  photo: {
    alt: string;
    description?: string;
    path: string;
  };
}

export const SummarizationCardImage = ({
  path,
  photo,
}: SummarizationCardImageProps) => {
  return (
    <ImageLink href={path}>
      <StyledImage
        src={photo.path}
        fill
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

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;
  border-radius: 8px;

  object-fit: cover;
  object-position: 50% 50%;
`;
