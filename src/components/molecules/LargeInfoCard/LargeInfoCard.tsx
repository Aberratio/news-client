"use client";

import styled from "styled-components";
import Image from "next/image";

import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import { cutText } from "core/tools/cutText";
import Link from "next/link";

interface LargeInfoCardProps {
  buttonText: string;
  description: string;
  link: string;
  title: string;
  photo: {
    path: string;
    alt: string;
  };
}

const LargeInfoCard = ({
  buttonText,
  description,
  link,
  title,
  photo,
}: LargeInfoCardProps) => {
  return (
    <Wrapper data-testid="new-bar-publication">
      <Container>
        <Part>
          <Link href={link}>
            <ImageBackground
              src={photo.path}
              fill
              objectFit="cover"
              alt={photo.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </Part>
        <Part>
          <Description>
            <Title href={link}>
              <Typography
                color="white"
                variant="h1"
                textAlign={{ textAlign: "left" }}
              >
                {title}
              </Typography>
            </Title>
            <Typography
              color="white"
              space={{ marginBottom: 30 }}
              textAlign={{ textAlign: "left" }}
            >
              {cutText(description, 300)}
            </Typography>
            <Link href={link}>
              <Button size="large">
                <Typography>{buttonText}</Typography>
              </Button>
            </Link>
          </Description>
        </Part>
      </Container>
    </Wrapper>
  );
};

export default LargeInfoCard;

const Part = styled.div`
  height: 350px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  margin-top: 65px;

  background-color: #222;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    border-radius: 12px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 500px 1fr;
  gap: 12px;
  margin: auto;
  width: 100%;
  max-width: 1080px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 500px 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 600px 1fr;
  }
`;

const ImageBackground = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 540px;
  max-width: 100%;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    border-radius: 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  padding: 8px 24px;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;

const Title = styled(Link)`
  margin: 12px 0;
  z-index: 30;
  cursor: pointer;

  &:hover p {
    color: #17b978 !important;
  }
`;
