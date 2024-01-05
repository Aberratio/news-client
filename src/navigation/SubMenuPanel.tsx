import styled from "styled-components";
import { NaviagationPanelItem } from "./NaviagationPanelItem";
import { Categories } from "./MainMenu";

interface SubMenPanelProps {
  category?: Categories;
}

export const SubMenuPanel = ({ category }: SubMenPanelProps) => {
  if (!category) {
    return <></>;
  }
  return (
    <Container>
      <NaviagationPanelItem category={category} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
