"use client";

import Image from "next/image";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";
import { useModal } from "components/molecules/Modal/useModal";
import Widget from "components/molecules/Widget";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

import { FullScreenImageModal } from "./FullScreenImageModal";

export const FirstSite = () => {
  const { firstSite } = useOrganizationInfo();
  const { openModal } = useModal("fullScreenImage");

  if (!firstSite) {
    return null;
  }

  return (
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexbox={{ flexDirection: "row" }}>
        W sprzedaży od <Date>{firstSite.releaseDate}</Date>
      </Typography>
      <SideBarSmallImageContainer onClick={openModal}>
        <Image
          src={firstSite.image.path}
          alt="Najnowszy numer"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SideBarSmallImageContainer>
      <FullScreenImageModal image={firstSite.image} />
    </Widget>
  );
};

const Date = styled.strong`
  margin-left: 4px;
`;
