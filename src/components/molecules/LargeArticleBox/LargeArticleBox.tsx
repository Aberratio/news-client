"use client";

import { cutText } from "core/tools/cutText";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";

interface LargeArticleBoxProps {
  buttonText: string;
  dataTestId?: string;
  description: string;
  link: string;
  title: string;
  photo: {
    path: string;
    alt: string;
  };
}

const LargeArticleBox = ({
  buttonText,
  dataTestId,
  description,
  link,
  title,
  photo,
}: LargeArticleBoxProps) => {
  return (
    <Wrapper data-testid={dataTestId}>
      <Container>
        <Part>
          <Link href={link}>
            <ImageBackground
              src={photo.path}
              fill
              style={{ objectFit: "cover" }}
              alt={photo.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </Part>
        <Part>
          <Description>
            <Title href={link}>
              <Typography
                color="black"
                data-testid="article-box-title"
                variant="h1"
                textAlign={{ textAlign: "left" }}
              >
                {title}
              </Typography>
            </Title>
            <Typography
              color="black"
              data-testid="article-box-description"
              variant="article"
              space={{ marginBottom: 30 }}
              textAlign={{ textAlign: "left" }}
            >
              {cutText(description, 250)}
            </Typography>
            <Link href={link}>
              <Button size="small" variant="secondary">
                <Typography>{buttonText}</Typography>
              </Button>
            </Link>
          </Description>
        </Part>
      </Container>
    </Wrapper>
  );
};

export default LargeArticleBox;

const Part = styled.div`
  display: flex;
  item-align: center;
  justify-content: center;

  @media screen and (min-width: 1300px) {
    height: 600px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  margin-top: 20px;

  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    border-radius: 12px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 300px 370px;
  gap: 12px;
  margin: auto;
  width: 100%;
  max-width: 1080px;

  @media screen and (min-width: 768px) {
    grid-template-rows: 500px 300px;
  }

  @media screen and (min-width: 1300px) {
    grid-template-rows: unset;
    grid-template-columns: 600px 1fr;
  }
`;

const ImageBackground = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 100%;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-height: 500px;
  }

  @media screen and (min-width: 1300px) {
    max-height: 600px;
    max-width: 600px;
    border-radius: 12px 0 0 12px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  padding: 0 24px;

  @media screen and (min-width: 1300px) {
    padding: 0 12px;
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
