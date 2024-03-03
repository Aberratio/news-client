"use client";

import Image from "next/image";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

export const FirstSite = () => {
  const { newReleaseDate, newCoverImage } = useOrganizationInfo();

  return (
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexbox={{ flexDirection: "row" }}>
        W sprzedaży od <Date>{newReleaseDate}</Date>
      </Typography>
      <SideBarSmallImageContainer>
        <Image
          src={newCoverImage.path}
          alt="Najnowszy numer"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SideBarSmallImageContainer>
    </Widget>
  );
};

const Date = styled.strong`
  margin-left: 4px;
`;
