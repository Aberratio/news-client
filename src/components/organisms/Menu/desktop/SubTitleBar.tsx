"use cleint";

import { Typography } from "components/atoms/Typography/Typography";
import styled from "styled-components";

export const SubTitleBar = () => {
  return (
    <Wrapper>
      <Title variant="small">
        Niezależny tygodnik powiatowy gmin: Cieszków, Krośnice, Milicz
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    padding: ${theme.spaces["2xs"]} 0;

    background-color: ${theme.customTheme.general.primaryColor};
  `}
`;

const Title = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.customTheme.general.primaryOppositeColor};
  `}
`;
