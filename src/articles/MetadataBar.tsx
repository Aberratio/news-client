import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface MetadataBarProps {
  authorName: string;
  createdOn: Date;
}

export const MetadataBar = ({ authorName, createdOn }: MetadataBarProps) => {
  return (
    <Container>
      <Link href="#">
        <Typography variant="small">{authorName}</Typography>
      </Link>
      <Typography variant="small">- {createdOn.toString()}</Typography>
    </Container>
  );
};

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px 0 4px 0;
`;
