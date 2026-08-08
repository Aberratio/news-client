import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PhotoItem } from "types/PhotoItem";

import SanityImage from "../../atoms/SanityImage/SanityImage";
import Typography from "../../atoms/Typography";

interface ArticleImageProps {
  dataTestid?: string;
  hasDescription?: boolean;
  image: PhotoItem;
  imageIndex?: number;
  imagesCount?: number;
  children?: React.ReactNode;
}

export const ArticleImage = ({
  dataTestid,
  hasDescription = false,
  image,
  imageIndex,
  imagesCount,
  children,
}: ArticleImageProps) => {
  const [showDescription, setShowDescription] =
    useState<boolean>(hasDescription);

  useEffect(() => {
    setShowDescription(hasDescription);
  }, [hasDescription]);

  return (
    <>
      <Container $showDescription={showDescription} data-testid={dataTestid}>
        <StyledImage
          image={image}
          $showDescription={showDescription}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!!imageIndex && !!imagesCount && imagesCount > 1 && (
          <ImageCounter>
            {imageIndex}/{imagesCount}
          </ImageCounter>
        )}
        {children}
      </Container>
      {showDescription && (
        <Description>
          <Typography
            dataTestId="image-description"
            variant="small"
            color="white"
            textAlign={{ textAlign: "left" }}
          >
            {image.description}
          </Typography>
        </Description>
      )}
    </>
  );
};

const Container = styled.div<{ $showDescription: boolean }>`
  position: relative;
  display: block;
  height: clamp(260px, 58vw, 420px);
  width: 100%;
  overflow: hidden;
  border-radius: ${({ $showDescription }) =>
    $showDescription ? "8px 8px 0 0" : "8px"};
  background: #f3f3f3;

  @media screen and (min-width: 768px) {
    height: clamp(420px, 52vw, 620px);
  }
`;

const StyledImage = styled(SanityImage)<{ $showDescription: boolean }>`
  ${({ $showDescription }) => `
    vertical-align: middle;
    border-style: none;
    border-radius: ${$showDescription ? "8px 8px 0 0" : "8px"};

    object-fit: cover;
    object-position: 50% 50%;
  `}
`;

const Description = styled.div`
  padding: 12px 16px 14px;
  border-radius: 0 0 8px 8px;
  background-color: #1f1f1f;

  p {
    color: #f4f4f4;
    line-height: 1.45;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 2;
  padding: 5px 8px;
  border-radius: 999px;
  color: #fff;
  background: rgb(0 0 0 / 58%);
  font-family: Spectral, sans-serif;
  font-size: 0.78rem;
  line-height: 1;
`;
