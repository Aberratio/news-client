"use cleint";

import { useStyles } from "core/styles/customization/useStyles";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

export const SubTitleBar = () => {
  const { customTheme } = useStyles();

  return (
    <Wrapper data-testid="subtitle-bar">
      <Typography
        variant="small"
        color={customTheme.general.primaryOppositeColor}
      >
        Niezależny tygodnik powiatowy gmin: Cieszków, Krośnice, Milicz
      </Typography>
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
