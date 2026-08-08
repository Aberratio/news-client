"use cleint";

import { useStyles } from "core/styles/customization/useStyles";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

export const SubTitleBar = () => {
  const { customTheme } = useStyles();
  const { publicationSettings } = useOrganizationInfo();

  return (
    <Wrapper data-testid="subtitle-bar">
      <Typography
        variant="small"
        color={customTheme.general.primaryOppositeColor}
      >
        {publicationSettings?.tagline}
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
