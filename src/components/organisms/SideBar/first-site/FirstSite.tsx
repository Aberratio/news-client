"use client";

import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";
import Image from "next/image";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

export const FirstSite = () => {
  const { newReleaseDate, newCoverImage } = useOrganizationInfo();

  return (
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexbox={{ flexDirection: "row" }}>
        W sprzedaży od <Date>{newReleaseDate}</Date>
      </Typography>
      <ImageContainer>
        <Image
          src={newCoverImage.path}
          alt="Najnowszy numer"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>
    </Widget>
  );
};

const ImageContainer = styled.div`
  position: relative;
  height: 370px;
`;

const Date = styled.strong`
  margin-left: 4px;
`;
