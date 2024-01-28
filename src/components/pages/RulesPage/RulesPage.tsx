import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import { Typography } from "layout/components/typography/Typography";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

const sections = [
  {
    // content: [
    //   'Niniejszy dokument określa warunki dostępu i korzystania ze strony internetowej, zwany będzie dalej: "Ogólne warunki".',
    //   "Każdy Użytkownik z chwilą podjęcia czynności zmierzających do korzystania ze strony internetowej zobowiązany jest do zapoznania się, przestrzegania oraz akceptacji Ogólnych warunków, bez ograniczeń i zastrzeżeń.",
    //   "W przypadku niewyrażenia zgody na wszystkie Ogólne warunki należy zaprzestać korzystania ze strony internetowej i natychmiast ją opuścić.",
    //   "Wszystkie nazwy handlowe,nazwy firm i ich logo, użyte na stronie internetowej należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych.",
    //   "Mogą być one zastrzeżone znakami towarowymi.",
    //   "Zabrania się nieuprawnionego korzystania z zawartości strony internetowej, utworów lub informacji, jak też ich nieuprawnionej reprodukcji, retransmisji lub innego użycia jakiegokolwiek elementu stronyinternetowej, gdyż takie działanie może naruszać m.in. prawa autorskie lub chronione znaki towarowe.",
    //   "Pytania lub uwagi dotyczące strony internetowej można zgłaszać na następujący adres email: admin@glosmilicza.pl.",
    // ],
    title: "XII OCHRONA DANYCH UŻYTKOWNIKA",
    body: "Właściciel szanuje w pełni prywatność Użytkowników. Szczegółowe informacje na temat sposobu gromadzenia i przetwarzania danych osobowych Użytkownika lub innych informacji, jak również sytuacji, w których Właściciel może je ujawniać, znajdują się w zakładce Polityka Prywatności.",
    type: "ordered list",
  },
];

export const RulesPage = () => {
  const breadcrumbs: BreadCrumbsItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "Regulamin",
      path: "/rules",
    },
  ];

  return (
    <SimplePageTemplate breadcrumbs={breadcrumbs} name="Regulamin">
      <Container>
        {sections.map((section) => {
          return (
            <div>
              <StyledTitle variant="h3">{section.title}</StyledTitle>
              <StyledContent>{section.body}</StyledContent>
            </div>
          );
        })}
      </Container>
    </SimplePageTemplate>
  );
};

const Container = styled.div`
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

const StyledTitle = styled(Typography)`
  display: block;
  color: #17b978;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const StyledContent = styled(Typography)`
  text-align: left;
`;
