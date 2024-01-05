import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { NaviagationPanelItem } from "./NaviagationPanelItem";
import { Categories } from "./MainMenu";

interface SubMenuProps {
  categories: Categories[];
}

export const SubMenu = ({ categories }: SubMenuProps) => {
  return (
    <Container data-test-id="sub-menu">
      <CategoryContainer>
        <Link href="#">
          <Typography>Wiadomości</Typography>
        </Link>
        <Link href="#">
          <Typography>Wiadomości2</Typography>
        </Link>
        <Link href="#">
          <Typography>Wiadomości3</Typography>
        </Link>
        <Link href="#">
          <Typography>Wiadomości4</Typography>
        </Link>
      </CategoryContainer>
      <Tab>
        <Panel>
          <Row>
            <NaviagationPanelItem category={categories[0]} />
          </Row>
        </Panel>
      </Tab>
    </Container>
  );
};

const Container = styled.div`
  flex-wrap: wrap;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: 1050px;
  border: 1px solid #f2f2f2;
  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
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
  padding: 30px 0;
  padding-top: 0;
`;

const Link = styled.a`
  opacity: 1;
  font-family: Roboto-Medium;
  font-size: 14px;
  line-height: 1.8;
  border-radius: 0;
  padding: 8px 20px 8px 33px;
  color: #fff;
  background-color: rgb(46, 104, 150);
`;

const Tab = styled.div`
  width: calc(100% - 240px);
`;

const Panel = styled.div`
  list-style-type: none;
  margin: 0;
  box-sizing: border-box;
  opacity: 1;
  display: block;
  padding: 25px 50px 35px 30px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
