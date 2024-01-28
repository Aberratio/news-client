import { Typography } from "components/atoms/Typography/Typography";
import styled from "styled-components";

export const WebcoBar = () => {
  return (
    <footer>
      <Wrapper>
        <Container>
          <Typography>Copyright © 2021-2024</Typography>
          <Link href="https:webcodesign.pl" target="_blank">
            <Typography> webco.design </Typography>
          </Link>
          <Typography>☕ All rights reserved.</Typography>
        </Container>
      </Wrapper>
    </footer>
  );
};

const Wrapper = styled.div`
  background-color: #151515;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 16px;

  width: 100%;
  max-width: 1080px;
  min-height: 80px;
  color: white;
`;

const Link = styled.a`
  margin: 0 8px;
  color: #15a752;
  cursor: pointer;
`;
