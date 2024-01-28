import { useState, useEffect } from "react";
import { Typography } from "components/atoms/Typography/Typography";
import styled from "styled-components";
import { usePopularTitles } from "./usePopularTitles";

export const PopularTitlesBar = () => {
  const { isLoading, titles, loadPopulatTitles } = usePopularTitles();
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);

  useEffect(() => {
    loadPopulatTitles(3, 5);
  }, []);

  useEffect(() => {
    if (titles.length) {
      const intervalId = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [titles]);

  if (isLoading) {
    return <></>;
  }

  return (
    <Container data-test-id="popular-titles-bar">
      <Typography color="#15a752" isUppercase>
        Popularne tematy:
      </Typography>
      <Slider>
        {titles.map((item, index) => (
          <StyledTypography
            key={item.id}
            color="red"
            isVisible={index === currentTitleIndex}
          >
            {item.title}
          </StyledTypography>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 16px;
  width: 100%;
  max-width: 1080px;
  gap: 16px;
  text-wrap: nowrap;
`;

const Slider = styled.div`
  overflow: hidden;
  position: relative;
  width: -webkit-fill-available;
`;

interface StyledTypographyProps {
  isVisible: boolean;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  position: absolute;
  top: 0;
  left: 0;

  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  opacity: ${(props) => (props.isVisible ? "1" : "0")};

  &:nth-child(2) {
    position: unset;
  }
`;
