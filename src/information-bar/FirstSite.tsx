import styled from "styled-components";
import { WidgetSchema } from "./WidgetSchema";

export const FirstSite = () => {
  return (
    <WidgetSchema dataTestId="first-site" title="W sprzedaży od 10.01.2024">
      <Cover src="/images/first_site/1410.jpg" />
    </WidgetSchema>
  );
};

const Cover = styled.img`
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
`;
