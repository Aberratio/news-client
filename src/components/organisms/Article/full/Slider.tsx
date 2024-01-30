 
 
"use client";

import styled from "styled-components";
import Image from "next/image";
import { PhotoItem } from "types/PhotoItem";
import { useState } from "react";

interface SliderProps {
  images: PhotoItem[];
}

export const Slider = ({ images }: SliderProps) => {
  const [image, setImage] = useState<PhotoItem>(images[0]);
  const [index, setIndex] = useState<number>(0);

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
      </SliderContainer>
      <p>Images amount: {images.length}</p>
      <div className="next" onClick={nextItem}>
        {"‣"}
      </div>
      <div className="prev" onClick={prevItem}>
        {"‣"}
      </div>
    </>
  );
};

const SliderContainer = styled.div`
  position: relative;
  display: block;
  height: 420px;
  width: 100%;
`;

const StyledImage = styled(Image)`
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
`;
