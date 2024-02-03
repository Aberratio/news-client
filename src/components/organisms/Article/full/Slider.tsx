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
        />
        {isSlideable && (
          <>
            <SliderArrow className="prev" onClick={prevItem}>
              <Arrow color="white" />
            </SliderArrow>
            <SliderArrow className="next" $isRight onClick={nextItem}>
              <Arrow color="white" direction="right" />
            </SliderArrow>
          </>
        )}
      </SliderContainer>
      {image.description.trim() !== "" && (
        <Description>
          <Typography variant="small">{image.description}</Typography>
        </Description>
      )}
    </>
  );
};

const Description = styled.div`
  text-align: center;
  background-color: #222;
  padding: 16px;
  color: white;
  border-radius: 0 0 8px 8px;
`;

const SliderContainer = styled.div`
  position: relative;
  display: block;
  height: 600px;
  width: 100%;
`;

const StyledImage = styled(Image)`
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
  border-radius: 8px 8px 0 0;
`;

const SliderArrow = styled.div<{ $isRight?: boolean }>`
  ${({ $isRight }) => `
  touch-action: manipulation;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: rgb(46, 104, 150) !important;
  font-weight: bold;
  font-size: 20px;
  -webkit-user-select: none;
  ${$isRight && `right: 0`};
  border-radius: 3px 0 0 3px;
  background-color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  `}
`;
