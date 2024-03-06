"use client";

import styled from "styled-components";

import { DescriptionColumn } from "./DescriptionColumn";
import { InfoColumn, InfoColumnItem } from "./InfoColumn";

export interface FooterColumnsProps {
  columns: InfoColumnItem[];
}

const FooterColumns = ({ columns }: FooterColumnsProps) => {
  return (
    <Wrapper data-testid="footer-info">
      <Container>
        <Row>
          <DescriptionColumn />
          {columns.map((column) => (
            <InfoColumn key={column.header} items={column} />
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default FooterColumns;

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;
  background-color: #222;
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    align-items: flex-start;
  }
`;
