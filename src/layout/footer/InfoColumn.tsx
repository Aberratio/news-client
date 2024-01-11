import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export interface LinkItem {
  bolded?: string;
  text: string;
  link?: string;
}

export interface ElementItem {
  id: number;
  type: ElementType;
  content: LinkItem[];
}

export enum ElementType {
  Link,
  Text,
  BoldedText,
}

interface InfoColumnProps {
  header: string;
  elements: ElementItem[];
}

export const InfoColumn = ({ header, elements }: InfoColumnProps) => {
  const renderListElement = (element: ElementItem) => (
    <ListElement key={element.id}>
      {element.content.map((content) => {
        switch (element.type) {
          case ElementType.Link:
            return (
              <Link key={content.text} href={content.link}>
                <Typography>{content.text}</Typography>
              </Link>
            );
          case ElementType.Text:
            return <Typography key={content.text}>{content.text}</Typography>;
          default:
            return (
              <Typography key={content.text}>
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
  padding 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const Content = styled.ul`
  list-style-type: none;
  color: white;
`;

const ListElement = styled.li`
  margin: 0;
  list-style-type: none;
  padding: 12px 8px;
  border: none;
`;

const Link = styled.a`
  padding: 8px 0;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;
