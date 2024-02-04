"use client";

import styled from "styled-components";
import Image from "next/image";
import { PhotoItem } from "types/PhotoItem";
import { useState } from "react";
import Typography from "components/atoms/Typography";
import { Arrow } from "components/molecules/Icons/Arrow";

interface SliderProps {
  images: PhotoItem[];
}

export const Slider = ({ images }: SliderProps) => {
  const [image, setImage] = useState<PhotoItem>(images[0]);
  const [index, setIndex] = useState<number>(0);
  const isSlideable = images.length > 1;
  const hasDescription = image.description.trim() !== "";

  const nextItem = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      setImage(images[index + 1]);
    } else {
      setIndex(0);
      setImage(images[0]);
    }
  };

  const prevItem = () => {
    if (index > 0) {
      setIndex(index - 1);
      setImage(images[index - 1]);
    } else {
      setIndex(images.length - 1);
      setImage(images[images.length - 1]);
    }
  };

  return (
    <>
      <SliderContainer>
        <StyledImage
          src={image.path}
          fill
          objectFit="cover"
          alt={image.description ?? "zdjęcie artykułu"}
          $hasDescription={hasDescription}
        />
        {isSlideable && (
          <>
            <SliderArrow onClick={prevItem}>
              <Arrow color="rgb(46, 104, 150)" />
            </SliderArrow>
            <SliderArrow $isRight onClick={nextItem}>
              <Arrow color="rgb(46, 104, 150)" direction="right" />
            </SliderArrow>
          </>
        )}
      </SliderContainer>
      {hasDescription && (
        <Description>
          <Typography variant="small" color="white" textAlign="center">
            {image.description}
          </Typography>
        </Description>
      )}
    </>
  );
};

const Description = styled.div`
  padding: 16px;
  border-radius: 0 0 8px 8px;
  background-color: #222;
`;

const SliderContainer = styled.div`
  position: relative;
  display: block;
  height: 600px;
  width: 100%;
`;

const StyledImage = styled(Image)<{ $hasDescription: boolean }>`
  ${({ $hasDescription }) => `
    vertical-align: middle;
    border-style: none;
    border-radius: ${$hasDescription ? "8px 8px 0 0" : "8px"}; 

    object-fit: cover;
    object-position: 50% 50%;
  `}
`;

const SliderArrow = styled.div<{ $isRight?: boolean }>`
  ${({ $isRight }) => `
    position: absolute;
    top: 50%;
    ${$isRight && `right: 0`};
  
    width: auto;
    padding: 16px;
    margin-top: -50px;
    border-radius: 3px 0 0 3px;
    
    cursor: pointer;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.8);
  `}
`;
