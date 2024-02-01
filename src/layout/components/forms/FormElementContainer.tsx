import { ReactNode } from "react";

import { ElementContainer } from "./FormComponents";
import { Label } from "./Label";
import { useStyles } from "../../../core/styles/customization/useStyles";
import Typography from "../../../components/atoms/Typography";

interface FormElementProps {
  error?: ReactNode | string;
  formElementName: string;
  hint?: ReactNode | string;
  isDisabled?: boolean;
  label?: string;
  children: ReactNode;
}

export const FormElementContainer: React.FC<FormElementProps> = ({
  error,
  formElementName,
  hint,
  isDisabled = false,
  label,
  children,
}) => {
  const { customTheme } = useStyles();

  return (
    <ElementContainer>
      {!!error && (
        <Typography
          color={customTheme.general.errorMessageColor}
          variant="small"
        >
          {error}
        </Typography>
      )}
      {!!hint && <Typography variant="small">{hint}</Typography>}
      {children}
      {label && (
        <Label
          label={label}
          inputName={formElementName}
          isDisabled={isDisabled}
        />
      )}
    </ElementContainer>
  );
};
