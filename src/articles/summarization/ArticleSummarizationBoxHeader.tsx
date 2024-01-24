import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface ArticleSummarizationBoxHeaderProps {
  name: string;
  showSeeMore?: boolean;
}

export const ArticleSummarizationBoxHeader = ({
  name,
  showSeeMore = false,
}: ArticleSummarizationBoxHeaderProps) => {
  return (
    <Wrapper>
      <Typography variant="h2">
        <span>{name.at(0)}</span>
        {name.slice(1)}
      </Typography>
      {showSeeMore && (
        <SeeMore href="/publications/category.php?ID_category=1&ID_page=1">
          <Typography color="black">Zobacz wszystkie</Typography>
          <Arrow direction="right" />
        </SeeMore>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 18px;
  position: relative;
  justify-content: space-between;
  max-width: min(90%, 1030px);
  margin: auto;

  span {
    color: #15a752;
    font-size: 140%;
    margin-left: 8px;
    margin-right: 2px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 6px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;

const SeeMore = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  padding-left: 10px;
  white-space: nowrap;
  color: #999;
`;
