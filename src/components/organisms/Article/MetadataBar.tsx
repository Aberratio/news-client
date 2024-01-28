import { Typography } from "components/atoms/Typography/Typography";
import styled from "styled-components";

interface MetadataBarProps {
  authorName: string;
  createdOn: string;
}

export const MetadataBar = ({ authorName, createdOn }: MetadataBarProps) => {
  return (
    <Container data-test-id={`metadata-bar`}>
      <Link href="#">
        <Typography variant="small">{authorName}</Typography>
      </Link>
      <Typography variant="small">- {createdOn}</Typography>
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
