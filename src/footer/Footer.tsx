import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Container>
          <Row>
            <FirstColumn>
              <LogoWrapper href="#">
                <Logo />
              </LogoWrapper>
              <DescriptionContainer>
                <StyledTypography color="white" wordBreak="break-word">
                  "Głos Milicza" to wychodzący od 1995 roku tygodnik lokalny,
                  którego misją jest dostarczanie mieszkańcom gmin: Milicz,
                  Krośnice, Cieszków najświeższych wiadomości oraz ciekawych
                  artykułów dotyczących różnych dziedzin życia w naszej lokalnej
                  społeczności.
                </StyledTypography>
                <StyledTypography color="white" wordBreak="break-word">
                  Tydzień w tydzień nasi dziennikarze z pasją, zaangażowaniem i
                  dociekliwością zbierają informacje z całego powiatu
                  milickiego, by podzielić się nimi z Czytelnikami.
                </StyledTypography>
                <StyledTypography color="white" wordBreak="break-word">
                  Staramy się słuchać i szybko reagować na potrzeby naszych
                  Czytelników. To z myślą o nich powstał portal glosmilicza.pl.
                </StyledTypography>
              </DescriptionContainer>
            </FirstColumn>
            <SecondColumn>
              <HeaderWrapper>
                <Typography variant="h3" color="rgb(46,104,150)">
                  Ważne informacje
                </Typography>
              </HeaderWrapper>
              <LinksList>
                <ListElement>
                  <Link href="#">
                    <Typography>Regulamin</Typography>
                  </Link>
                </ListElement>
              </LinksList>
            </SecondColumn>
            <SecondColumn>
              <HeaderWrapper>
                <Typography variant="h3" color="rgb(46,104,150)">
                  Redakcja Głosu Milicza
                </Typography>
              </HeaderWrapper>
              <LinksList>
                <ListElement>
                  <Link href="tel:713830021">
                    <Typography>71-3830-021</Typography>
                  </Link>
                  <Link href="tel:713831189">
                    <Typography>71-3831-189</Typography>
                  </Link>
                  <Link href="mailto:sekretariat@glosmilicza.pl">
                    <Typography>sekretariat@glosmilicza.pl</Typography>
                  </Link>
                  <Link href="mailto:gmmilicz@pro.onet.pl">
                    <Typography>gmmilicz@pro.onet.pl</Typography>
                  </Link>
                </ListElement>
                <ListElement>
                  <Typography>ul. T. Kościuszki 22</Typography>
                  <Typography>56-300 Milicz</Typography>
                </ListElement>
                <ListElement>
                  <Typography>
                    <strong>NIP</strong>: 916-10-01-943
                  </Typography>
                  <Typography>
                    <strong>REGON</strong>: 930445239
                  </Typography>
                </ListElement>
              </LinksList>
            </SecondColumn>
          </Row>
        </Container>
      </Wrapper>
      <WebcoBar>
        <WebcoBarContainer>
          <Typography>Copyright © 2021-2024</Typography>
          <WebcoBarLink href="https:webcodesign.pl" target="_blank">
            <Typography> webco.design </Typography>
          </WebcoBarLink>
          <Typography>☕ All rights reserved.</Typography>
        </WebcoBarContainer>
      </WebcoBar>
    </footer>
  );
};

const StyledTypography = styled(Typography)`
  text-align: left !important;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

const WebcoBarLink = styled.a`
  margin: 0 8px;
  color: green;
  cursor: pointer;
`;

const WebcoBarContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  min-height: 80px;
  color: white;
`;

const WebcoBar = styled.div`
  background-color: #151515;
`;

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

const FirstColumn = styled.div`
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 20px;
`;

const LogoWrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const Logo = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const SecondColumn = styled.div`
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const LinksList = styled.ul`
  margin: 0;
  list-style-type: none;
  margin-top: -12px;
  color: white;
`;

const ListElement = styled.li`
  margin: 0;
  list-style-type: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border: none;
`;

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: all 0.3s;
  cursor: pointer;
`;
