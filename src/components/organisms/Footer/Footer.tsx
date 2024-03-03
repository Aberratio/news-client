import { aboutPagePath, rulesPagePath } from "core/builders/buildPath";

import FooterColumns from "./columns/FooterColumns";
import { WebcoBar } from "./columns/WebcoBar";

export enum ElementType {
  Link,
  Text,
  BoldedText,
}

const Footer = () => {
  return (
    <footer>
      <FooterColumns columns={[secondColumnMock, thirdColumnMock]} />
      <WebcoBar />
    </footer>
  );
};

export default Footer;

const secondColumnMock = {
  header: "Ważne informacje",
  elements: [
    {
      id: 1,
      type: ElementType.Link,
      content: [
        {
          text: "Regulamin",
          link: rulesPagePath,
        },
      ],
    },
    {
      id: 2,
      type: ElementType.Link,
      content: [
        {
          text: "O nas",
          link: aboutPagePath,
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
