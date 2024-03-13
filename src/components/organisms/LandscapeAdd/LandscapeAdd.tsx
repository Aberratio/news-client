"use client";

import { styled } from "styled-components";
import { MainAddItem } from "types/AddsItem";

import SanityImage from "components/atoms/SanityImage/SanityImage";

interface LandscapeAddProps {
  mainAdd: MainAddItem;
}

const LandscapeAdd = ({ mainAdd }: LandscapeAddProps) => {
  return (
    <AddBackground data-testid="landscape-add-bar">
      <ImageWrapper>
        <SanityImage
          image={mainAdd.image}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </ImageWrapper>
    </AddBackground>
  );
};

export default LandscapeAdd;

const AddBackground = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;

  margin-top: 65px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  aspect-ratio: 4 / 1;

  @media screen and (min-width: 1200px) {
    width: 1200px;
    height: 300px;
  }
`;
