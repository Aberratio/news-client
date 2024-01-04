import { ReactNode } from "react";
import styled from "styled-components";

import { Typography } from "../typography/Typography";

interface LabelProps {
  inputName?: string;
  isDisabled?: boolean;
  label: ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  label,
  inputName,
  isDisabled = false,
}) => (
  <Wrapper htmlFor={inputName} $isDisabled={isDisabled}>
    <Typography variant="body">{label}</Typography>
  </Wrapper>
);

const Wrapper = styled.label<{ $isDisabled?: boolean }>`
  ${({ theme, $isDisabled }) => `
        display: block;
        opacity: ${$isDisabled ? "32%" : "100%"};
        display: flex;
        margin-bottom: ${theme.spaces.xs};

        color: ${theme.forms.primary.labelColor};
    `}
`;
