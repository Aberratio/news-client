import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface CategoryBoxHeaderProps {
  name: string;
  showSeeMore: boolean;
}

export const CategoryBoxHeader = ({
  name,
  showSeeMore = false,
}: CategoryBoxHeaderProps) => {
  return (
    <Wrapper>
      <Typography variant="h3">{name}</Typography>
      {showSeeMore && (
        <SeeMore href="/publications/category.php?ID_category=1&ID_page=1">
          <Typography>Zobacz wszystkie</Typography>
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
  max-width: 1080px;
  margin: auto;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;

const SeeMore = styled.a`
  display: flex;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  padding-left: 10px;
  white-space: nowrap;
  color: #999;
`;
