import styled from "styled-components";
import { WebcoBar } from "./WebcoBar";
import { DescriptionColumn } from "./DescriptionColumn";
import { ElementType, InfoColumn } from "./InfoColumn";

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Container>
          <Row>
            <DescriptionColumn />
            <InfoColumn {...secondColumnMock} />
            <InfoColumn {...thirdColumnMock} />
          </Row>
        </Container>
      </Wrapper>
      <WebcoBar />
    </footer>
  );
};

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

const secondColumnMock = {
  header: "Ważne informacje",
  elements: [
    {
      id: 1,
      type: ElementType.Link,
      content: [
        {
          text: "Regulamin",
          link: "#",
        },
      ],
    },
  ],
};

const thirdColumnMock = {
  header: "Redakcja Głosu Milicza",
  elements: [
    {
      id: 1,
      type: ElementType.Link,
      content: [
        {
          text: "71-3830-021",
          link: "tel:713830021",
        },
        {
          text: "71-3831-189",
          link: "tel:713831189",
        },
        {
          text: "sekretariat@glosmilicza.pl",
          link: "mailto:sekretariat@glosmilicza.pl",
        },
        {
          text: "gmmilicz@pro.onet.pl",
          link: "mailto:gmmilicz@pro.onet.pl",
        },
      ],
    },
    {
      id: 2,
      type: ElementType.Text,
      content: [
        {
          text: "ul. T. Kościuszki 22",
        },
        {
          text: "56-300 Milicz",
        },
      ],
    },
    {
      id: 3,
      type: ElementType.BoldedText,
      content: [
        {
          bolded: "NIP",
          text: "916-10-01-943",
        },
        {
          bolded: "REGON",
          text: "930445239",
        },
      ],
    },
  ],
};
