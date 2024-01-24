import { CategoryItem } from "articles/items/CategoryItem";
import { buildCategoryPath } from "common/builders/buildPath";
import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface ArticleSummarizationBoxHeaderProps {
  category: CategoryItem;
  showSeeMore?: boolean;
}

export const ArticleSummarizationBoxHeader = ({
  category,
  showSeeMore = false,
}: ArticleSummarizationBoxHeaderProps) => {
  if (!category) return null;

  return (
    <Wrapper>
      <Typography variant="h2" isCapitalized>
        {category.name}
      </Typography>
      {showSeeMore && (
        <SeeMore href={buildCategoryPath(category.id)}>
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
  cursor: pointer;

  &:hover {
    p,
    svg {
      color: #15a752 !important;
      fill: #15a752 !important;
    }
  }
`;
