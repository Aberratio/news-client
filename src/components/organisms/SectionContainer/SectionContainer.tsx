"use server";

import { Section } from "components/molecules/Section/Section";

import { Container } from "./Container";

export const SectionContainer = () => {
  return (
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
  );
};
