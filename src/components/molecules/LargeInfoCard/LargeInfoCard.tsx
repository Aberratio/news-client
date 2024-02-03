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
            />
          </Link>
        </Part>
        <Part>
          <Description>
            <Title href={link}>
              <Typography color="white" variant="h2" textAlign="left">
                {title}
              </Typography>
            </Title>
            <Typography color="white" marginBottom={30} textAlign="left">
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
  height: 500px;
`;

const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 12px;
`;

const ImageBackground = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 540px;
  max-width: 600px;
  border-radius: 12px;

  cursor: pointer;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  padding: 12px;
`;

const Title = styled(Link)`
  margin: 12px 0;
  z-index: 300;
  cursor: pointer;

  &:hover p {
    color: #17b978 !important;
  }
`;
