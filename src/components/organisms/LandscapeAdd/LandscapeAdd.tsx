"use client";

import SanityImage from "components/atoms/SanityImage/SanityImage";
import { MainAddItem } from "core/api/settings/fetchAdds";
import { styled } from "styled-components";

interface LandscapeAddProps {
  mainAdd: MainAddItem;
}

const LandscapeAdd = ({ mainAdd }: LandscapeAddProps) => {
  return (
    <AddBackground>
      <ImageWrapper>
        <SanityImage
          _ref={mainAdd.image._ref}
          alt={mainAdd.image.alt}
          width={1200}
          height={300}
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
  width: 100%;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 1200px;
    height: 300px;
  }
`;
