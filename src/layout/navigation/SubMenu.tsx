import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { useState } from "react";
import { buildCategoryPath } from "common/builders/buildPath";
import { CategoryItem } from "./useCategories";

interface SubMenuProps {
  categories: CategoryItem[];
}

export const SubMenu = ({ categories }: SubMenuProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(
    categories[0].id,
  );

  return (
    <Container data-test-id="sub-menu">
      <CategoryContainer>
        {categories.map((category) => {
          return (
            <Link
              href={`${buildCategoryPath(category.id)}`}
              onClick={() => setActiveCategoryId(category.id)}
              $isActive={activeCategoryId === category.id}
            >
              <Typography isCapitalized>{category.name}</Typography>
            </Link>
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

const Link = styled.a<{ $isActive: boolean }>`
  opacity: 1;
  font-family: Roboto-Medium;
  font-size: 14px;
  line-height: 1.8;
  border-radius: 0;
  padding: 8px 20px 8px 33px;
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#000")};
  background-color: ${({ $isActive }) =>
    $isActive ? "rgb(46, 104, 150)" : "white"};
`;
