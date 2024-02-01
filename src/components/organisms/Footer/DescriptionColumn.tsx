"use client";

import Typography from "components/atoms/Typography";
import Image from "next/image";
import styled from "styled-components";

export const DescriptionColumn = () => {
  return (
    <Container>
      <LogoWrapper href="/">
        <Logo src="/icons/logo_footer.png" alt="logo" width={300} height={30} />
      </LogoWrapper>
      <Description>
        <Typography color="white" wordBreak="break-word">
          "Głos Milicza" to wychodzący od 1995 roku tygodnik lokalny, którego
          misją jest dostarczanie mieszkańcom gmin: Milicz, Krośnice, Cieszków
          najświeższych wiadomości oraz ciekawych artykułów dotyczących różnych
          dziedzin życia w naszej lokalnej społeczności.
        </Typography>
        <Typography color="white" wordBreak="break-word">
          Tydzień w tydzień nasi dziennikarze z pasją, zaangażowaniem i
          dociekliwością zbierają informacje z całego powiatu milickiego, by
          podzielić się nimi z Czytelnikami.
        </Typography>
        <Typography color="white" wordBreak="break-word">
          Staramy się słuchać i szybko reagować na potrzeby naszych Czytelników.
          To z myślą o nich powstał portal glosmilicza.pl.
        </Typography>
      </Description>
    </Container>
  );
};

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

const LogoWrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  width: 95%;
`;
