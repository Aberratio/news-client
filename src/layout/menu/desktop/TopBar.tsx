import { Button } from "layout/components/buttons/Button";
import { LinkButton } from "layout/components/links/LinkButton";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const TopBar = () => {
  const openLoginModal = (): void => {
    console.log("openContactPage");
  };

  const openRegistrationModal = (): void => {
    console.log("openContactPage");
  };

  return (
    <Wrapper>
      <Container>
        <Part>
          <LinkButton to="/about">
            <Typography variant="small">O nas</Typography>
          </LinkButton>

          <LinkButton to="/contact">
            <Typography variant="small">Kontakt</Typography>
          </LinkButton>
        </Part>
        <Part>
          <Button variant="link" onClick={openLoginModal}>
            <Typography variant="small">Zaloguj</Typography>
          </Button>
          <Button variant="link" onClick={openRegistrationModal}>
            <Typography variant="small">Zarejestruj</Typography>
          </Button>
        </Part>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #222;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  height: 100% !important;
  max-width: 1080px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Part = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
