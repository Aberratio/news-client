import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PhotoItem } from "types/PhotoItem";

import SanityImage from "../../atoms/SanityImage/SanityImage";
import Typography from "../../atoms/Typography";

interface ArticleImageProps {
  hasDescription?: boolean;
  image: PhotoItem;
  children?: React.ReactNode;
}

export const ArticleImage = ({
  hasDescription = false,
  image,
  children,
}: ArticleImageProps) => {
  const [showDescription, setShowDescription] =
    useState<boolean>(hasDescription);

  useEffect(() => {
    setShowDescription(hasDescription);
  }, [hasDescription]);

  return (
    <>
      <Container>
        <StyledImage
          image={image}
          $hasDescription={showDescription}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {children}
      </Container>
      {showDescription && (
        <Description>
          <Typography
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

const Container = styled.div`
  position: relative;
  display: block;
  height: 250px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 600px;
  }
`;

const StyledImage = styled(SanityImage)<{ $hasDescription: boolean }>`
  ${({ $hasDescription }) => `
    vertical-align: middle;
    border-style: none;
    border-radius: ${$hasDescription ? "8px 8px 0 0" : "8px"};

    object-fit: cover;
    object-position: 50% 50%;
  `}
`;

const Description = styled.div`
  padding: 16px;
  border-radius: 0 0 8px 8px;
  background-color: #222;
`;
