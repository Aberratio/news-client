"use client";

import styled from "styled-components";

import Typography from "components/atoms/Typography";

interface WidgetProps {
  dataTestId: string;
  title: string;
  children: React.ReactNode;
}

const Widget = ({ dataTestId, title, children }: WidgetProps) => {
  return (
    <div data-testid={dataTestId}>
      <Header>
        <Typography isUppercase color="black">
          <strong>{title}</strong>
        </Typography>
      </Header>
      <Body>{children}</Body>
    </div>
  );
};

export default Widget;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  border-radius: ${({ theme }) =>
      theme.customTheme.publicationVisual.cornerRadius}
    ${({ theme }) => theme.customTheme.publicationVisual.cornerRadius} 0 0;
  border-bottom: 1px solid
    ${({ theme }) => theme.customTheme.publicationVisual.sectionHeaderBorderColor};

  p {
    letter-spacing: 1px;
  }
`;

const Body = styled.div`
  margin: 0;
  padding: 12px;
`;
