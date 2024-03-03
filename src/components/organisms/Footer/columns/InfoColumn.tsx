"use client";

import Link from "next/link";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

import { ElementType } from "../Footer";

export interface LinkItem {
  bolded?: string;
  text: string;
  link?: string;
}

export interface ElementItem {
  id: number | string;
  type: ElementType;
  content: LinkItem[];
}

export interface InfoColumnItem {
  header: string;
  elements: ElementItem[];
}

interface InfoColumnProps {
  items: InfoColumnItem;
}

export const InfoColumn = ({ items }: InfoColumnProps) => {
  const { header, elements } = items;
  const renderListElement = (element: ElementItem) => (
    <ListElement key={element.id}>
      {element.content.map((content) => {
        switch (element.type) {
          case ElementType.Link:
            return (
              <StyledLink key={content.text} href={content.link ?? ""}>
                <Typography>{content.text}</Typography>
              </StyledLink>
            );
          case ElementType.Text:
            return <Typography key={content.text}>{content.text}</Typography>;
          default:
            return (
              <Typography key={content.text} flexbox={{ flexDirection: "row" }}>
                <strong>{content.bolded}</strong>: {content.text}
              </Typography>
            );
        }
      })}
    </ListElement>
  );

  return (
    <Container>
      <Header>
        <Typography variant="h3" color="rgb(46,104,150)">
          {header}
        </Typography>
      </Header>
      <Content>{elements.map(renderListElement)}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style-type: none;
  color: white;
`;

const ListElement = styled.li`
  margin: 0;
  list-style-type: none;
  padding: 0 8px;
  border: none;
`;

const StyledLink = styled(Link)`
  padding: 8px 0;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;
