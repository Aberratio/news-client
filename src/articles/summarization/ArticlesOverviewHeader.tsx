import { CategoryItem } from "types/CategoryItem";
import { buildCategoryPath } from "common/builders/buildPath";
import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { BoxHeader } from "../../layout/section-header/BoxHeader";

interface ArticlesOverviewHeaderProps {
  category: CategoryItem;
  showSeeMore?: boolean;
}

export const ArticlesOverviewHeader = ({
  category,
  showSeeMore = false,
}: ArticlesOverviewHeaderProps) => {
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
