import { Button } from "layout/components/buttons/Button";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const TopBar = () => {
  const openAboutUsPage = (): void => {
    console.log("openAboutUsPage");
  };

  const openContactPage = (): void => {
    console.log("openContactPage");
  };

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
          <Button variant="link" onClick={openAboutUsPage}>
            <Typography variant="small">O nas</Typography>
          </Button>

          <Button variant="link" onClick={openContactPage}>
            <Typography variant="small">Kontakt</Typography>
          </Button>
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
