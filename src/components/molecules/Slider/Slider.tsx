"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoItem } from "types/PhotoItem";

import { ArticleImage } from "components/molecules/ArticleImage/ArticleImage";
import { Arrow } from "components/molecules/Icons/Arrow";

interface SliderProps {
  images: PhotoItem[];
}

const Slider = ({ images }: SliderProps) => {
  const [image, setImage] = useState<PhotoItem>(images[0]);
  const [index, setIndex] = useState<number>(0);
  const [hasDescription, setHasDescription] = useState<boolean>(
    images[0].description.trim() !== ""
  );
  const isSlideable = images.length > 1;

  useEffect(() => {
    setHasDescription(image.description.trim() !== "");
  }, [image]);

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
    <ArticleImage
      image={image}
      hasDescription={hasDescription}
      dataTestid={`article-image-${index}`}
    >
      {isSlideable && (
        <>
          <SliderArrow onClick={prevItem} data-testid="arrow-prev">
            <Arrow color="white" />
          </SliderArrow>
          <SliderArrow $isRight onClick={nextItem} data-testid="arrow-next">
            <Arrow color="white" direction="right" />
          </SliderArrow>
        </>
      )}
    </ArticleImage>
  );
};

export default Slider;

const SliderArrow = styled.div<{ $isRight?: boolean }>`
  ${({ $isRight }) => `
    position: absolute;
    top: 50%;
    ${$isRight && `right: 0`};
  
    width: auto;
    padding: 8px;
    margin-top: -50px;
    border-radius: 3px 0 0 3px;
    
    cursor: pointer;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.8);

    
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
  `}
`;
