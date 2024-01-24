import { ArticleSummarizationBoxHeader } from "articles/summarization/ArticleSummarizationBoxHeader";
import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import styled from "styled-components";
import { MainContainer } from "./MainContainer";
import { Typography } from "layout/components/typography/Typography";

export const AboutPage = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "O nas",
      path: "about",
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ArticleSummarizationBoxHeader name="Skład redakcji" />
      <MainContainer>
        <Container>
          <Section
            header="Redaktor naczelna"
            links={[
              {
                href: "mailto:slawenta@glosmilicza.pl",
                link: "slawenta@glosmilicza.pl",
                name: "Jolanta Sławenta",
              },
            ]}
          />
          <Section
            header="Dziennikarze"
            links={[
              {
                href: "mailto:bartosz.jakubowski@glosmilicza.pl",
                link: "bartosz.jakubowski@glosmilicza.pl",
                name: "Bartosz Jakubowski",
              },
              {
                href: "mailto:agnieszka.kaczmarek@glosmilicza.pl",
                link: "agnieszka.kaczmarek@glosmilicza.pl",
                name: "Agnieszka Kaczmarek",
              },
              {
                href: "mailto:alicja.szczepanska.sikorska@glosmilicza.pl",
                link: "alicja.szczepanska.sikorska@glosmilicza.pl",
                name: "Alicja Szczepańska-Sikorska",
              },
              {
                href: "mailto:agnieszka.jezierska@glosmilicza.pl",
                link: "agnieszka.jezierska@glosmilicza.pl",
                name: "Agnieszka Jezierska",
              },
            ]}
          />
          <Section
            header="Reklamy"
            links={[
              {
                href: "tel:71-38-30-021",
                link: "71-38-30-021",
                name: "Dział Reklam",
              },
              {
                href: "tel:71-38-31-189",
                link: "71-38-31-189",
                name: "Dział Reklam - drugi numer",
              },
              {
                href: "tel:882-222-286",
                link: "882-222-286",
                name: "Jan Wybierała",
              },
            ]}
          />
          <Section
            header="Pozostałe kontakty"
            links={[
              {
                href: "mailto:admin@glosmilicza.pl",
                link: "admin@glosmilicza.pl",
                name: "Administrator Strony",
              },
              {
                href: "mailto:ogloszenia@glosmilicza.pl",
                link: "ogloszenia@glosmilicza.pl",
                name: "Ogłoszenia",
              },
            ]}
          />
        </Container>
      </MainContainer>
    </div>
  );
};

const Container = styled.div`
  text-align: justify;
  margin: auto;
  max-width: 800px;
`;

interface SectionProps {
  header: string;
  links: {
    href: string;
    link: string;
    name: string;
  }[];
}

const Section = ({ header, links }: SectionProps) => {
  return (
    <SectionContainer>
      <Header variant="h3">{header}</Header>
      <LinkBox>
        {links.map((link) => {
          return (
            <StyledTypography>
              <strong>{link.name}</strong>
              <Link href={`${link.href}`}>{link.link}</Link>
            </StyledTypography>
          );
        })}
      </LinkBox>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin-bottom: 32px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 16px;
  width: 100%;
`;

const Header = styled(Typography)`
  color: #17b978;
`;

const Link = styled.a`
  margin-left: 4px;
  color: #0056b3;
  cursor: pointer;
`;

const StyledTypography = styled(Typography)`
  // color: #17b978;
`;
