"use client";

import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";
import { PhotoItem } from "types/PhotoItem";

import { ArticleImage } from "components/molecules/ArticleImage/ArticleImage";

interface SliderProps {
  images: PhotoItem[];
}

const Slider = ({ images }: SliderProps) => {
  const firstImage = images[0];
  const [image, setImage] = useState<PhotoItem | undefined>(firstImage);
  const [index, setIndex] = useState<number>(0);
  const [hasDescription, setHasDescription] = useState<boolean>(
    firstImage?.description.trim() !== ""
  );
  const isSlideable = images.length > 1;

  useEffect(() => {
    setHasDescription(image?.description.trim() !== "");
  }, [image]);

  useEffect(() => {
    setImage(firstImage);
    setIndex(0);
  }, [firstImage]);

  if (!image) {
    return null;
  }

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
      imageIndex={index + 1}
      imagesCount={images.length}
    >
      {isSlideable && (
        <>
          <SliderArrow
            aria-label="Poprzednie zdjęcie"
            onClick={prevItem}
            data-testid="arrow-prev"
            type="button"
          >
            <IconChevronLeft size={26} stroke={1.7} />
          </SliderArrow>
          <SliderArrow
            $isRight
            aria-label="Następne zdjęcie"
            onClick={nextItem}
            data-testid="arrow-next"
            type="button"
          >
            <IconChevronRight size={26} stroke={1.7} />
          </SliderArrow>
        </>
      )}
    </ArticleImage>
  );
};

export default Slider;

const SliderArrow = styled.button<{ $isRight?: boolean }>`
  ${({ $isRight }) => `
    position: absolute;
    top: 50%;
    ${$isRight ? "right: 12px" : "left: 12px"};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgb(255 255 255 / 36%);
    border-radius: 999px;
    color: #fff;
    cursor: pointer;
    background-color: rgb(0 0 0 / 54%);
    transform: translateY(-50%);
    transition:
      background-color 160ms ease,
      border-color 160ms ease;
    
    &:hover,
    &:focus-visible {
      border-color: rgb(255 255 255 / 70%);
      background-color: rgb(0 0 0 / 72%);
    }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    ${$isRight ? "right: 18px" : "left: 18px"};
  }
  `}
`;
