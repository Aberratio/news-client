import {
  ForwardedRef,
  SyntheticEvent,
  ReactNode,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";

import { FormElementContainer } from "./FormElementContainer";

export interface BasicInputProps {
  defaultValue?: string | number;
  disabled?: boolean;
  error?: ReactNode;
  innerRef?: ForwardedRef<HTMLInputElement>;
  inputSize?: "large" | "small";
  label?: string;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  selectInput?: boolean;
  tabIndex?: number;
  value?: number | string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const BasicInput = ({
  defaultValue,
  disabled,
  error,
  innerRef,
  label,
  name,
  placeholder,
  readOnly = false,
  required,
  selectInput,
  tabIndex = 0,
  value = "",
  onChange,
  onBlur,
}: BasicInputProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  const labelControl = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target === document.activeElement && selectInput) {
      target.select();
    }
  };

  useEffect(() => {
    setIsError(!!(value && value !== "" && error));
  }, [value, error]);

  return (
    <FormElementContainer
      error={isError ? error : ""}
      formElementName={name}
      isDisabled={disabled}
      label={label}
    >
      <StyledInput
        defaultValue={defaultValue}
        disabled={disabled}
        $isError={isError}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={innerRef}
        required={required}
        tabIndex={tabIndex}
        value={value}
        onBlur={onBlur ?? labelControl}
        onChange={onChange}
        onFocus={labelControl}
      />
    </FormElementContainer>
  );
};

const StyledInput = styled.input<{
  disabled?: boolean;
  $isError?: boolean;
}>(
  ({ theme, $isError = false, disabled }) => `
        border-radius: ${theme.general.borderRadius};
        box-sizing: border-box;
        border-width: ${theme.spaces["3xs"]};
        border: 1px solid #5069A7;

        height: ${theme.spaces["3xl"]};
        width: 100%;
        font-size: ${theme.spaces.lo};
        padding: 0 ${theme.spaces.md};

        background-color: ${theme.colors.white};
        color: ${theme.colors.black};

        &::placeholder {
            color: ${theme.colors.gray};
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
        }

        &:focus {
            background-color: ${theme.colors.white};
        }

        &:hover {
            ${!disabled && `border-color: ${theme.colors.gray};`}
        }

        border-color: ${
          $isError ? theme.general.errorMessageColor : `#5069A7`
        } !important;
    `
);
