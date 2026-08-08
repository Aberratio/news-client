"use client";

import Link from "next/link";
import styled from "styled-components";
import { PublicationFooterColumnItem } from "types/PublicationSettingsItem";

import Typography from "components/atoms/Typography";

interface InfoColumnProps {
  items: PublicationFooterColumnItem;
}

export const InfoColumn = ({ items }: InfoColumnProps) => {
  const { header, links, textItems } = items;

  return (
    <Container>
      <Header>
        <Typography variant="h3" color="var(--publication-primary)">
          {header}
        </Typography>
      </Header>
      <Content>
        {links && links.length > 0 && (
          <ListElement>
            {links.map((link) => (
              <StyledLink
                key={`${link.href}-${link.label}`}
                href={link.href ?? ""}
              >
                <Typography>{link.label}</Typography>
              </StyledLink>
            ))}
          </ListElement>
        )}
        {textItems?.map((item) => (
          <ListElement key={`${item.label}-${item.text}`}>
            <Typography
              flexbox={item.label ? { flexDirection: "row" } : undefined}
            >
              {item.label ? (
                <>
                  <strong>{item.label}</strong>: {item.text}
                </>
              ) : (
                item.text
              )}
            </Typography>
          </ListElement>
        ))}
      </Content>
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
