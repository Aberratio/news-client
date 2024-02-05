"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";
import { useStyles } from "core/styles/customization/useStyles";

const RulesPage = () => {
  const { customTheme } = useStyles();

  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        currentName: "Regulamin",
      }}
    >
      <Container>
        {rules.map((rule) => {
          return (
            <div>
              <Typography
                variant="h3"
                color={customTheme.general.secondaryColor}
                space={{ marginBottom: 10, marginTop: 30 }}
              >
                {rule.title}
              </Typography>
              <List>
                {rule.components.map((component, componentId) => {
                  return (
                    <ListElement key={componentId}>
                      {isListItem(component) ? (
                        <>
                          {component.header && (
                            <Typography>{component.header}</Typography>
                          )}
                          <List>
                            {component.elements.map((element, elementId) => (
                              <LLELement key={`${componentId}-${elementId}`}>
                                <Typography>{element}</Typography>
                              </LLELement>
                            ))}
                          </List>
                          {component.footer && (
                            <Typography>{component.footer}</Typography>
                          )}
                        </>
                      ) : (
                        <Typography>{component}</Typography>
                      )}
                    </ListElement>
                  );
                })}
              </List>
            </div>
          );
        })}
      </Container>
    </SimplePageTemplate>
  );
};

export default RulesPage;

const Container = styled.div`
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

const List = styled.ol`
  padding-left: 24px;
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
`;

const ListElement = styled.li`
  margin: 0;
  padding-bottom: 5px;
  display: list-item;
  list-style: decimal outside none;
  overflow: unset !important;
`;

const LLELement = styled(ListElement)`
  list-style: lower-latin;
`;

interface ListItem {
  footer?: string;
  header?: string;
  elements: string[];
}

type RulesComponent = string | ListItem;

interface RulesItem {
  title: string;
  type: "list" | "text";
  footer?: string;
  header?: string;
  components: RulesComponent[];
}

const isListItem = (item: RulesComponent): item is ListItem =>
  typeof item === "object" && "elements" in item;

const rules: RulesItem[] = [
  {
    title: "I PREAMBUŁA",
    type: "list",
    components: [
      'Niniejszy dokument określa warunki dostępu i korzystania ze strony internetowej, zwany będzie dalej: "Ogólne warunki".',
      "Każdy Użytkownik z chwilą podjęcia czynności zmierzających do korzystania ze strony internetowej zobowiązany jest do zapoznania się, przestrzegania oraz akceptacji Ogólnych warunków, bez ograniczeń i zastrzeżeń.",
      "W przypadku niewyrażenia zgody na wszystkie Ogólne warunki należy zaprzestać korzystania ze strony internetowej i natychmiast ją opuścić.",
      "Wszystkie nazwy handlowe, nazwy firm i ich logo, użyte na stronie internetowej należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Mogą być one zastrzeżone znakami towarowymi.",
      "Zabrania się nieuprawnionego korzystania z zawartości strony internetowej, utworów lub informacji, jak też ich nieuprawnionej reprodukcji, retransmisji lub innego użycia jakiegokolwiek elementu strony internetowej, gdyż takie działanie może naruszać m.in. prawa autorskie lub chronione znaki towarowe.",
      "Pytania lub uwagi dotyczące strony internetowej można zgłaszać na następujący adres email: admin@glosmilicza.pl.",
    ],
  },
  {
    title: "II DEFINICJE",
    type: "list",
    components: [
      "FORMULARZ KONTAKTOWY - kwestionariusz dostępny na stronie internetowej, który umożliwia natychmiastowe wysłanie wiadomości do Właściciela strony internetowej;",
      "FORMULARZ REJESTRACJI - kwestionariusz dostępny na stronie internetowej umożliwiający rejestrację i utworzenie Konta na stronie internetowej",
      "KONTO - oznaczony indywidualną nazwą lub loginem oraz hasłem zbiór zasobów na stronie internetowej, w którym gromadzone są dane Użytkownika;",
      "PRAWO WŁAŚCIWE - Do celów realizacji Ogólnych warunków zastosowanie ma prawo polskie;",
      "STRONA INTERNETOWA - narzędzie, o nazwie: glosmilicza.pl, służące do świadczenia usług elektronicznych;",
      "UŻYTKOWNIK - osoba fizyczna, osoba prawna albo jednostka organizacyjna nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych dostępnych w ramach strony internetowej;",
      "WARUNKI - zbiór wszystkich postanowień m.in. niniejszych Ogólnych warunków, zasad polityki prywatności, plików cookies, regulaminu korzystania ze sklepu internetowego oraz wszelkich innych warunków, znajdujących się na stronie internetowej, które dotyczą określonych funkcji, właściwości lub promocji, jak również obsługi klienta;",
      "WŁAŚCICIEL - Podmiot udostępniający niniejszą stronę internetową, mianowicie: Przedsiębiorca Pani Jolanta Sławenta, prowadząca działalność gospodarczą pod firmą: Enter-Press s.c. Jolanta Sławenta, Józef Sławenta, z siedzibą przy: ul. Tadeusza Kościuszki 22, 56-300 Milicz, NIP: 916-10-01-943;",
    ],
  },
  {
    title: "III ZAKRES WARUNKÓW",
    type: "list",
    components: [
      "Właściciel zapewnia dostęp do zawartości strony internetowej, zgodnie z poniższymi Ogólnymi warunkami.",
      "Zawartość i dane publikowane na stronie internetowej mają charakter informacji dla osób zainteresowanych i mogą być wykorzystywane jedynie do celów informacyjnych.",
      "Właściciel ma prawo zamieszczania treści reklamowych, które stanowią integralną część serwisu i prezentowanych w nim materiałów.",
      "Użytkownicy mogą korzystać z dostępu i usług oferowanych na stronie internetowej, pod warunkiem uprzedniego wyrażenia zgody na Ogólne warunki.",
    ],
  },
  {
    title: "IV ZASADY KORZYSTANIA ZE STRONY INTERNETOWEJ",
    type: "list",
    components: [
      "Strona internetowa jest obsługiwana przez wszelkiego rodzaju przeglądarki internetowe. Nie wymaga się żadnych szczególnych właściwości urządzenia końcowego Użytkownika.",
      {
        header:
          "Po zaakceptowaniu Warunków, Użytkownik ma prawo przeglądać, kopiować, drukować oraz rozpowszechniać, bez dokonywania zmian w treści, zawartość niniejszej strony internetowej, pod warunkiem, że:",
        elements: [
          "treści te będą wykorzystywane wyłącznie informacyjnie, w celach niekomercyjnych;",
          "każda wykonana kopia będzie zawierała informacje na temat praw autorskich lub dane dotyczące autora treści.",
        ],
      },
      "Zakazane jest używanie i kopiowanie oprogramowania, procesów i technologii, stanowiących część strony internetowej.",
      "Użytkownicy mogą korzystać ze strony internetowej jedynie w poszanowaniu przepisów ustawy prawo telekomunikacyjne, ustawy o świadczeniu usług drogą elektroniczną i odpowiednich przepisów prawa cywilnego.",
      {
        header: "Zabronione jest korzystanie ze strony internetowej:",
        elements: [
          "w sposób prowadzący do naruszenia obowiązujących przepisów prawa;",
          "w jakikolwiek sposób niezgodny z prawem lub nieuczciwy, albo w sposób, zmierzający do osiągnięcia niezgodnego z prawem lub nieuczciwego celu;",
          "do celów związanych z wyrządzaniem szkody dzieciom lub prób wyrządzenia im jakiejkolwiek szkody;",
          "do wysyłania, świadomego otrzymywania, wgrywania lub używania treści niezgodnych z Ogólnymi warunkami;",
          "do przekazywania lub prowokowania wysyłki jakichkolwiek niezamówionych lub nieuprawnionych reklam lub materiałów promocyjnych, jak również jakichkolwiek form podobnych, zaliczanych do zbiorczej kategorii SPAM;",
          "do świadomego przekazywania jakichkolwiek danych, wysyłania lub wgrywania jakichkolwiek materiałów zawierających wirusy, konie trojańskie, oprogramowanie szpiegujące (spyware), oprogramowanie z reklamami (adware) lub inny szkodliwy program lub zbliżone kody komputerowe zaprogramowane, by niekorzystnie wpływać lub zagrażać na funkcjonowanie jakiegokolwiek oprogramowania lub sprzętu komputerowego albo niekorzystnie wpływać lub zagrażać Użytkownikowi.",
        ],
      },
    ],
  },
  {
    title: "V COOKIES",
    type: "list",
    components: [
      'Strona internetowa używa plików cookies (ciasteczka) lub podobną technologię (dalej łącznie nazywane: "cookies") do zbierania informacji o dostępie Użytkownika do strony internetowej (np. za pomocą komputera lub smartfona) oraz jego preferencjach. Są one wykorzystywane m.in. w celach reklamowych i statystycznych oraz w celu dostosowania strony internetowej do indywidualnych potrzeb Użytkownika.',
      "Pliki cookies to fragmenty informacji, które zawierają unikalny kod referencyjny, który strona internetowa przesyła na urządzenie Użytkownika, w celu przechowywania, a czasem śledzenia informacji dotyczących używanego urządzenia. Zwykle nie pozwalają one zidentyfikować osoby Użytkownika. Ich głównym zadaniem jest lepsze dopasowanie strony internetowej do Użytkownika.",
      "Niektóre z plików cookies, występujące na stronie internetowej, są dostępne tylko przez czas trwania danej sesji internetowej i wygasają po zamknięciu przeglądarki. Inne pliki cookies służą do zapamiętywania Użytkownika, który po powrocie na stronę internetową, jest na niej rozpoznawany. Są one wówczas zachowywane przed dłuższy czas.",
      "Wszystkie pliki cookies, występujące na stronie internetowej, są ustalane przez Właściciela.",
      "Wszystkie pliki cookies, używane przez niniejszą stronę internetową, są zgodne z obowiązującym prawem Unii Europejskiej.",
      "Większość Użytkowników i niektórych przeglądarek mobilnych automatycznie akceptuje pliki cookies. Jeżeli ustawienia te pozostaną bez zmian, pliki cookies zostaną zapisane w pamięci urządzenia.",
      "Użytkownik może zmienić preferencje dotyczące akceptacji plików cookies lub zmienić przeglądarkę, aby móc otrzymać za każdym razem stosowne powiadomienie, gdy funkcja cookies jest ustawiona. Aby zmienić ustawienia akceptacji cookies, należy dostosować ustawienia w przeglądarce.",
      "Warto pamiętać, że blokowanie lub usuwanie plików cookies może uniemożliwić pełne korzystanie ze strony internetowej.",
      {
        header:
          "Pliki cookies będą wykorzystywane do niezbędnego zarządzania sesją, w tym",
        elements: [
          "Tworzenia specjalnej sesji logowania dla Użytkownika strony internetowej, aby strona zapamiętała, że Użytkownik jest zalogowany, a jego żądania były dostarczane w sposób skuteczny, bezpieczny i spójny;",
          "Rozpoznawania Użytkownika, który już wcześniej odwiedził stronę internetową co pozwala na identyfikację liczby unikalnych użytkowników, którzy skorzystali z serwisu i pozwala upewnić się co do wystarczającej pojemności serwisu dla liczby nowych użytkowników;",
          "Rozpoznawania, czy osoba odwiedzająca stronę internetową jest zarejestrowana na stronie internetowej;",
          "Rejestrowanie informacji z urządzenia Użytkownika, w tym: pliki cookies, adres IP i informacje o używanej przeglądarce, w celu możliwości diagnozowania problemów, administrowania i śledzenia Użytkowania witryny;",
          "Dostosowywania elementów układu szaty graficznej lub zawartości strony internetowej;",
          "Zbierania informacji statystycznych o tym, jak Użytkownik korzysta ze strony, w celu możliwości ulepszania witryny i stwierdzenia, które zakresy strony internetowej są najbardziej popularne dla Użytkowników.",
        ],
      },
    ],
  },
  {
    title: "VI PLUGIN FACEBOOKA",
    type: "list",
    components: [
      "Strona internetowa zawiera plugin (wtyczkę) do serwisu społecznościowego Facebook.",
      "Plugin Facebooka jest oznaczony logo Facebook.",
      "Plugin ten bezpośrednio połączy z profilem Właściciela na serwerze Facebooka. Facebook może wówczas uzyskać informacje, że Użytkownik odwiedził stronę internetową ze swojego adresu IP.",
      "Jeżeli Użytkownik odwiedza stronę internetową będąc zalogowanym na swoim profilu na Facebooku, Facebook zarejestruje informację o wizycie. Nawet w sytuacji, gdy Użytkownik nie jest zalogowany na Facebooku, Facebook jest w stanie pozyskiwać informacje o adresie IP.",
      "Facebook nie przekazuje Właścicielowi informacji o gromadzonych danych i sposobie ich wykorzystania. Cel i zakres danych gromadzonych przez Facebook nie są znane Właścicielowi. W celu uzyskania dodatkowych informacji, dotyczących prywatności na portalu Facebook, należy kontaktować się bezpośrednio z Facebookiem lub zapoznać się z polityką prywatności portalu pod adresem: https://www.facebook.com/about/privacy/.",
      "Jeżeli Użytkownik nie chce, aby Facebook mógł pozyskiwać informacje dotyczące przeglądania strony internetowej dobrze jest, aby Użytkownik wylogował się wcześniej ze swojego konta na Facebooku.",
    ],
  },
  {
    title: "VII PLUGIN INNYCH PORTALI SPOŁECZNOŚCIOWYCH",
    type: "list",
    components: [
      "Właściciel może również używać innych plugin (wtyczek) społecznościowych (np. Twitter, Google+ albo LinkedIn).",
      "Wtyczki do portali społecznościowych można zidentyfikować po ikonkach służących do udostępniania informacji na danej platformie.",
      "Wtyczki umożliwiają użytkownikom tych platform linkowanie strony internetowej w ich postach, umieszczonych na tych platformach społecznościowych.",
      "Wtyczki bezpośrednio połączą z profilem Właściciela na serwerze danego portalu społecznościowego. Portal ten może wówczas uzyskać informacje, że Użytkownik odwiedził stronę internetową ze swojego adresu IP.",
      "Podczas wizyty Użytkownika na profilu, administrator serwisu społecznościowego korzysta z plików cookies i innych podobnych technologii, w celu monitorowania zachowania i akcji podejmowanych przez Użytkownika. Informacje te gromadzone są między innymi na potrzeby stworzenia tzw. statystyki strony. Statystyki zawierają wyłącznie zanonimizowane dane statystyczne na temat użytkowników odwiedzających profil i nie ma możliwości powiązania ich z konkretną osobą. Właściciel nie ma dostępu do danych osobowych wykorzystywanych przez serwisy społecznościowe na potrzeby przygotowywania m.in. statystyk strony.",
      "Dzięki generowanym przez serwis społecznościowy statystykom strony, Właściciel posiada informacje o tym, w jaki sposób Użytkownicy korzystają z profili Właściciela oraz które, z publikowanych treści, są najbardziej popularne. Dzięki tym informacjom, Właściciel może optymalizować swoje profile poprzez lepsze dopasowanie publikowanych treści do zainteresowań i zachowań Użytkowników. Podmiotem odpowiedzialnym za przetwarzanie danych Użytkowników na potrzeby generowania statystyk strony jest administrator każdego z ww. serwisów społecznościowych. Wobec tego, administratorzy zobowiązani są do poinformowania Użytkowników o wszelkich sprawach, związanych z przetwarzaniem danych osobowych, na potrzeby tworzenia statystyk strony oraz o możliwości skorzystania z prawa ochrony prywatności, przysługującego zgodnie z obowiązującymi przepisami prawa.",
    ],
  },
  {
    title: "VIII LINKI ZEWNĘTRZNE",
    type: "list",
    components: [
      "Odnośniki znajdujące się na niniejszej stronie, do innych stron internetowych, są podane wyłącznie w celu informacyjnym.",
      "Właściciel strony internetowej nie ponosi odpowiedzialności za treści znajdujące się na innych witrynach, ani za jakiekolwiek szkody wynikające z ich użytkowania.",
    ],
  },
  {
    title: "IX FORMULARZ KONTAKTOWY",
    type: "list",
    components: [
      "Użytkownik może wpisać swoje dane kontaktowe, wypełniając specjalny formularz przewidziany do kontaktu z Właścicielem, treść wiadomości i akceptując ich wysyłkę do Właściciela.",
      "Pozostawienie danych kontaktowych oznacza, że Użytkownik wyraził zgodę na przetwarzanie przez Właściciela podanych w Formularzu Kontaktowym danych osobowych. Właściciel będzie mógł użyć podanych danych kontaktowych, w celu wysłania ofert lub nawiązania kontaktu z Użytkownikiem.",
    ],
  },
  {
    title: "X FORMULARZ REJESTRACJI",
    type: "list",
    components: [
      "W ramach formularza rejestracji, Użytkownik może wpisać swoje dane osobowe, aby zarejestrować się jako zidentyfikowany Użytkownik na stronie internetowej i utworzyć swoje Konto.",
      "Po zarejestrowaniu, gdy Użytkownik odwiedzi ponownie stronę internetową, będzie mógł zalogować się jako zidentyfikowany Użytkownik na swoje Konto.",
      "Po zalogowaniu na Konto, strona internetowa będzie dysponowała danymi osobowymi i kontaktowymi Użytkownika, podanymi podczas rejestracji lub w późniejszym okresie, które umożliwią sprawniejszy kontakt, przesył danych lub płatność za usługę lub towary, dostępne na stronie internetowej.",
      "Zarejestrowanie Użytkownika i w rezultacie zapisanie Jego danych osobowych oznacza, że Użytkownik wyraził zgodę na przetwarzanie przez Właściciela danych osobowych Użytkownika, podanych w Formularzu Rejestracji.",
    ],
  },
  {
    title: "XI POSZANOWANIE WŁASNOŚCI INTELEKTUALNEJ",
    type: "list",
    components: [
      "Strona internetowa oraz jej treści mogą być chronione prawami autorskimi, prawami dotyczącymi znaków towarowych oraz innymi przepisami, związanymi z ochroną własności intelektualnej.",
      'Znaki, loga i inne spersonalizowane emblematy Właściciela, pojawiające się na stronie internetowej (zwane łącznie: "Znakami"), stanowią znaki towarowe Właściciela.',
      "Z wyjątkiem osobnych, indywidualnych, pisemnych upoważnień, Użytkownik nie może wykorzystywać przez siebie, należących do Właściciela, Znaków: osobno, ani w zestawieniu z innymi elementami słownymi lub graficznymi, szczególnie w informacjach prasowych, reklamach, materiałach promocyjnych, marketingowych, w mediach, w materiałach pisemnych lub ustnych, w formie elektronicznej, w formie wizualnej ani w żadnej innej formie.",
    ],
  },
  {
    title: "XII OCHRONA DANYCH UŻYTKOWNIKA",
    type: "text",
    components: [
      "Właściciel szanuje w pełni prywatność Użytkowników. Szczegółowe informacje na temat sposobu gromadzenia i przetwarzania danych osobowych Użytkownika lub innych informacji, jak również sytuacji, w których Właściciel może je ujawniać, znajdują się w zakładce Polityka Prywatności.",
    ],
  },
  {
    title: "XIII OGRANICZENIE ODPOWIEDZIALNOŚCI",
    type: "list",
    components: [
      "Strona internetowa zawiera informacje o charakterze ogólnym. Nie ma na celu pośredniczyć w świadczeniu jakichkolwiek usług doradztwa profesjonalnego. Przed podjęciem czynności mających wpływ na sytuację finansową lub działalność gospodarczą Użytkownika należy skontaktować się z profesjonalnym doradcą.",
      "Strona internetowa nie zapewnia żadnych gwarancji dotyczących jej treści, w szczególności gwarancji bezpieczeństwa, bezbłędności, braku wirusów czy złośliwych kodów, gwarancji dotyczących poprawnego działania czy jakości.",
      "Strona internetowa nie zapewnia żadnej rękojmi, wyraźnej lub dorozumianej, w tym gwarancji przydatności handlowej lub przydatności do określonego celu, nienaruszenia praw autorskich, dostosowania, bezpieczeństwa i rzetelności informacji.",
      "Użytkownik korzysta ze strony internetowej na własne ryzyko i przyjmuje na siebie pełną odpowiedzialność za szkody związane lub wynikające z jej wykorzystania, zarówno bezpośrednie jak i pośrednie, uboczne, następcze, moralne, lub inne szkody z tytułu odpowiedzialności umownej, deliktowej, z tytułu zaniedbań, w tym m.in. za utratę danych lub usług.",
      "Strona internetowa nie ponosi żadnej odpowiedzialności za linki zamieszczone na stronie internetowej, szczególnie jeśli prowadzą do witryn, zasobów lub narzędzi utrzymywanych przez osoby trzecie.",
      "Właściciel nie ponosi odpowiedzialności, jeśli strona internetowa jest z jakichkolwiek przyczyn tymczasowo lub długookresowo niedostępna.",
      "Właściciel nie ponosi odpowiedzialności za informacje przekazywane na stronie internetowej, ani też nie może zapewnić całkowitego bezpieczeństwa transakcji lub komunikacji, prowadzonych za pomocą strony internetowej.",
      "Pomimo podejmowania przez Właściciela największych starań, w kwestii zapewnienia dokładności i aktualności strony internetowej, mogą pojawić się niezamierzone przez Właściciela błędy, które Użytkownik, po ich wykryciu, proszony jest zgłaszać Właścicielowi.",
      "Wszystkie wskazane powyżej wyłączenia i ograniczenia odpowiedzialności obowiązują w najszerszym dopuszczalnym prawnie zakresie, obejmując każdy typ istniejącej odpowiedzialności m.in. odpowiedzialności kontraktowej, deliktowej i każdej innej przewidzianej w polskim lub zagranicznym porządku prawnym.",
    ],
  },
  {
    title: "XIV WAŻNOŚĆ POSTANOWIEŃ",
    type: "list",
    components: [
      "Gdyby którekolwiek z postanowień Ogólnych warunków było lub miało stać się nieważne lub bezskuteczne, w dowolnym systemie prawnym, pozostała część Warunków pozostaje ważna i nienaruszona. Strony zastąpią nieważne lub bezskuteczne postanowienie innym, które możliwie najwierniej oddaje zamierzony cel. Odpowiednio dotyczy to także ewentualnych luk w Ogólnych warunkach.",
      "Gdyby którekolwiek z postanowień Ogólnych warunków było lub miało stać się nieważne lub bezskuteczne, w jednym lub kilku systemach prawnych, wszystkie postanowienia Ogólnych warunków zachowują ważność w każdym innym systemie prawnym.",
    ],
  },
  {
    title: "XV STOSUNEK DO ZAWARTYCH UMÓW",
    type: "text",
    components: [
      "Jeśli nie postanowiono inaczej, Ogólne warunki stanowią kompletną i wyczerpującą umowę pomiędzy Użytkownikiem i Właścicielem, dotyczącą korzystania ze strony internetowej, w zakresie treści w nich zawartych oraz zastępują wszelkie inne porozumienia, uzgodnienia i umowy dotyczące przedmiotu (treści) niniejszych Ogólnych warunków.",
    ],
  },
  {
    title: "XVI ZMIANA WARUNKÓW STRONY INTERNETOWEJ",
    type: "list",
    components: [
      "Właściciel strony internetowej zastrzega sobie prawo do dokonywania modyfikacji niniejszych Ogólnych warunków, w dowolnym momencie ich obowiązywania, zamieszczając ich zaktualizowaną wersję na stronie internetowej, które zaczynają obowiązywać Użytkowników od momentu ich publikacji, chyba że inaczej wskazano w zmodyfikowanych Ogólnych warunkach.",
      "Użytkownik ma obowiązek zapoznania się z modyfikacjami Ogólnych warunków, o czym Właściciel poinformuje go, wysyłając do Niego wiadomość lub komunikat o zmianach Ogólnych warunków do zaakceptowania.",
      "Dalsze korzystanie ze strony internetowej jest równoznaczne z akceptacją zmodyfikowanych Warunków strony internetowej.",
    ],
  },
  {
    title: "XVII ROZWIĄZYWANIE SPORÓW",
    type: "list",
    components: [
      "Wszelkie powstałe spory Strony postanawiają w pierwszej kolejności rozwiązać w trybie polubownego załatwienia sprawy, przed właściwym sądem polubownym (zapis na sąd polubowny).",
      "Jeśli polubowne załatwienie sprawy okaże się niemożliwe, spór wynikający z niniejszej umowy zostanie rozstrzygnięty przez sąd, w którego okręgu znajduje się siedziba Właściciela.",
    ],
  },
  {
    title: "XVIII PODSTAWA PRAWNA",
    type: "list",
    components: [
      {
        header:
          "W sprawach nieuregulowanych w niniejszych Ogólnych warunkach stosuje się odpowiednio następujące ustawy",
        elements: [
          "ustawę prawo telekomunikacyjne z dnia 16 lipca 2004 r. (tj. Dz.U. z 2019 r. poz. 2460, ze zm.);",
          "ustawę o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (t.j. Dz.U. z 2019 r. poz. 123, ze zm.);",
          "ustawę o prawie autorskim i prawach pokrewnych z dnia 4 lutego 1994 r. (t.j. Dz.U. z 2019 r. poz. 1231, ze zm.);",
          "ustawę Kodeks Cywilny z dnia 23 kwietnia 1964 r. (t.j. Dz.U. z 2019 r. poz. 1145, ze zm.); oraz inne właściwe przepisy prawa polskiego.",
        ],
      },
    ],
  },
];
