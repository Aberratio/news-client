import { CategoryItem } from "articles/items/CategoryItem";
import { buildCategoryPath } from "common/builders/buildPath";
import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { BoxHeader } from "./BoxHeader";

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
    <BoxHeader name={category.name}>
      {showSeeMore && (
        <SeeMore href={buildCategoryPath(category.id)}>
          <Typography color="black">Zobacz wszystkie</Typography>
          <Arrow direction="right" />
        </SeeMore>
      )}
    </BoxHeader>
  );
};

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
