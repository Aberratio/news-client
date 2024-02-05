"use client";

import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";
import Image from "next/image";
import { styled } from "styled-components";

export const FirstSite = () => {
  const date = "10.01.2024";
  const number = "1412";

  return (
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexDirection="row">
        W sprzedaży od <Date>{date}</Date>
      </Typography>
      <ImageContainer>
        <Image
          src={`/images/first-site/${number}.jpg`}
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
