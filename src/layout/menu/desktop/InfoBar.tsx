import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const InfoBar = () => {
  return (
    <Wrapper>
      <Container>
        <Typography color="white" variant="small">
          Niezależny tygodnik powiatowy gmin: Cieszków, Krośnice, Milicz
        </Typography>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(46, 104, 150);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;
