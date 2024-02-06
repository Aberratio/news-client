import { styled } from "styled-components";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};

export default List;

const StyledList = styled.ul`
  margin: 0;
  list-style-type: none;
`;
