import { ReactNode } from "react";
import { styled } from "styled-components";

import Typography from "../../../../components/atoms/Typography";
import { useStyles } from "../../../../core/styles/customization/useStyles";

import { Label } from "./Label";

interface FormElementContainerProps {
  error?: ReactNode | string;
  formElementName: string;
  isDisabled?: boolean;
  label?: string;
  children: ReactNode;
}

export const FormElementContainer = ({
  error,
  formElementName,
  isDisabled = false,
  label,
  children,
}: FormElementContainerProps) => {
  const { customTheme } = useStyles();

  return (
    <Container>
      {!!error && (
        <Typography
          color={customTheme.general.errorMessageColor}
          variant="small"
        >
          {error}
        </Typography>
      )}
      {children}
      {label && (
        <Label
          label={label}
          inputName={formElementName}
          isDisabled={isDisabled}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => `
    position: relative;

    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    width: 100%;
    margin-bottom: ${theme.spaces.sm};

    input,
    select,
    textarea {
      transition: all 0.3s ease;

      + label > p {
        transition: all 0.3s ease;
        color: ${theme.colors.black};
      }

      &:focus {
        border: ${theme.spaces["3xs"]} solid ${theme.colors.black};

        + label > p {
          color: ${theme.colors.black};
        }
      }

      &::input-placeholder {
        color: ${theme.colors.black};
      }
    }
  `}
`;
