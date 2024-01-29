"use client";

import styled from "styled-components";
import { WebcoBar } from "./WebcoBar";
import { DescriptionColumn } from "./DescriptionColumn";
import { InfoColumn, InfoColumnItem } from "./InfoColumn";

export interface FooterWrapperProps {
  columns: InfoColumnItem[];
}

const FooterWrapper = ({ columns }: FooterWrapperProps) => {
  return (
    <footer>
      <Wrapper>
        <Container>
          <Row>
            <DescriptionColumn />
            {columns.map((column) => (
              <InfoColumn key={column.header} items={column} />
            ))}
          </Row>
        </Container>
      </Wrapper>
      <WebcoBar />
    </footer>
  );
};

export default FooterWrapper;

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;
  background-color: #222;
`;

const Container = styled.div`
  margin: auto;
  padding: 0 16px;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
