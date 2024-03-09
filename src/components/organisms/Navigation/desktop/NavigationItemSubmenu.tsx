import { useState } from "react";
import { buildCategoryPath } from "core/builders/buildPath";
import Link from "next/link";
import styled from "styled-components";
import { CategoryItem } from "types/CategoryItem";

import Typography from "components/atoms/Typography";

interface NavigationItemSubmenuProps {
  categories: CategoryItem[];
}

export const NavigationItemSubmenu = ({
  categories,
}: NavigationItemSubmenuProps) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    categories[0].slug
  );

  return (
    <Container data-testid="navigation-item-sub-menu">
      <CategoryContainer>
        {categories.map((category) => {
          return (
            <Typography
              key={category.slug}
              isCapitalized
              dataTestId={`navigation-item-sub-menu-item-${category.slug}`}
            >
              <StyledLink
                href={`${buildCategoryPath(category.slug)}`}
                $isActive={activeCategorySlug === category.slug}
                onClick={() => setActiveCategorySlug(category.slug)}
              >
                {category.name}
              </StyledLink>
            </Typography>
          );
        })}
      </CategoryContainer>
    </Container>
  );
};

const Container = styled.div`
  flex-wrap: wrap;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  list-style: none;
  flex-direction: column !important;
  min-height: 1px;
  box-sizing: border-box;
  width: 240px;
  border-right: 1px solid #f2f2f2;
  padding: 0;
`;

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  width: 100%;
  opacity: 1;
  border-radius: 0;
  padding: 8px 20px 8px 33px;
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#000")} !important;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgb(46, 104, 150)" : "white"};

  &:hover {
    background-color: rgb(46, 104, 150);
    color: #fff !important;
  }
`;
